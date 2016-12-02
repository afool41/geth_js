var _beneficiary = '0xf5200578ee1147886b55cfdc3e7798557dfaa1b4';
var _goal = web3.toWei(0.06);
var _timelimit = 500;
var crowdfundContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"refund","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"payout","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contribute","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_beneficiary","type":"address"},{"name":"_goal","type":"uint256"},{"name":"_timelimit","type":"uint256"}],"type":"constructor"}]);
var crowdfund = crowdfundContract.new(
   _beneficiary,
   _goal,
   _timelimit,
   {
     from: web3.eth.accounts[4], 
     data: '0x606060405260405160608061040d833981016040528080519060200190919080519060200190919080519060200190919050505b82600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690836c01000000000000000000000000908102040217905550816001600050819055508042016002600050819055505b505050610375806100986000396000f360606040526000357c010000000000000000000000000000000000000000000000000000000090048063590e1ae31461005257806363bd1d4a14610066578063d7bb99ba1461007a5761004d565b610002565b3461000257610064600480505061008e565b005b346100025761007860048050506101ab565b005b346100025761008c6004805050610256565b005b6000600260005054421180156100bf57506001600050543073ffffffffffffffffffffffffffffffffffffffff1631105b156101a75760036000505490505b600460005080549050811080156100e65750620186a05a115b1561019c57600460005081815481101561000257906000526020600020906002020160005b5060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600460005083815481101561000257906000526020600020906002020160005b50600101600050549081150290604051809050600060405180830381858888f193505050505080806001019150506100cd565b806003600050819055505b5b50565b600260005054421180156101db57506001600050543073ffffffffffffffffffffffffffffffffffffffff163110155b1561025357600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051809050600060405180830381858888f19350505050505b5b565b60026000505442111561026857610002565b600460005080548060010182818154818355818115116102eb576002028160020283600052602060002091820191016102ea91906102a1565b808211156102e65760006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160005060009055506002016102a1565b5090565b5b5050509190906000526020600020906002020160005b60406040519081016040528033815260200134815260200150909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690836c01000000000000000000000000908102040217905550602082015181600101600050555050505b56', 
     gas: 1500000
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
