contract CrowdFund {
    address beneficiary;
    uint256 goal;
    uint256 deadline;
    
    mapping (address => uint256) funders;
    
    function CrowdFund(address _beneficiiary, unit256 _goal, uint256 _timelimit) {
        beneficiary = _beneficiary;
        goal = _goal;
        deadline = now + _timelimit
    }
    function contribute() {
        if (now > deadline) throw;
        funders[msg.sender] += msg.value;    
    }
    function payout() {
        if (now > deadline && this.balance >= goal) 
        beneficiary.send(this.balance);
    }
    function refund() {
        if (now > deadline && this.balance < goal) {
            msg.sender.send(funders[msg.sender]);
            funders[msg.sender].value = 0;
        }
    }
}
