contract CrowdFund {
    address beneficiary;
    uint256 goal;
    uint256 deadline;
    uint256 refundIndex;
    
    struct Funder {
        address addr;
        uint256 value;
    }
    Funder[] funders;
    
    function CrowdFund(address _beneficiary, uint256 _goal, uint256 _timelimit) {
        beneficiary = _beneficiary;
        goal = _goal;
        deadline = now + _timelimit;
    }
    function contribute() {
        if (now > deadline) throw;
        funders.push(Funder(msg.sender, msg.value));    
    }
    function payout() {
        if (now > deadline && this.balance >= goal) 
        beneficiary.send(this.balance);
    }
    function refund() {
        if (now > deadline && this.balance < goal) {
            uint256 index = refundIndex;
            while (index < funders.length && msg.gas > 100000) {
                funders[index].addr.send(funders[index].value);
                index++;
            }
            refundIndex = index;
        }
    }
}
