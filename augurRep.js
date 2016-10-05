augurRep_addr = "0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5";
augurRep_abi = [{ "name": "allowance", "type": "function", "constant": true, "inputs": [{ "name": "owner", "type": "address" }, { "name": "spender", "type": "address" }], "outputs": [{ "name": "out", "type": "uint256" }] }, { "name": "approve", "type": "function", "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "amount", "type": "uint256" }], "outputs": [{ "name": "out", "type": "uint256" }] }, { "name": "balanceOf", "type": "function", "constant": true, "inputs": [{ "name": "address", "type": "address" }], "outputs": [{ "name": "out", "type": "uint256" }] }, { "name": "decimals", "type": "function", "constant": true, "inputs": [], "outputs": [{ "name": "out", "type": "uint256" }] }, { "name": "getSeeded", "type": "function", "constant": true, "inputs": [], "outputs": [{ "name": "out", "type": "uint256" }] }, { "name": "name", "type": "function", "constant": true, "inputs": [], "outputs": [{ "name": "out", "type": "uint256" }] }, { "name": "setSaleDistribution", "type": "function", "constant": false, "inputs": [{ "name": "addresses", "type": "address[]" }, { "name": "balances", "type": "uint256[]" }], "outputs": [{ "name": "out", "type": "uint256" }] }, { "name": "symbol", "type": "function", "constant": true, "inputs": [], "outputs": [{ "name": "out", "type": "uint256" }] }, { "name": "totalSupply", "type": "function", "constant": true, "inputs": [], "outputs": [{ "name": "out", "type": "uint256" }] }, { "name": "transfer", "type": "function", "constant": false, "inputs": [{ "name": "receiver", "type": "address" }, { "name": "fxpValue", "type": "uint256" }], "outputs": [{ "name": "out", "type": "uint256" }] }, { "name": "transferFrom", "type": "function", "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "receiver", "type": "address" }, { "name": "fxpValue", "type": "uint256" }], "outputs": [{ "name": "out", "type": "uint256" }] }, { "name": "Approval(address,address,uint256)", "type": "event", "inputs": [{ "name": "owner", "type": "address", "indexed": true }, { "name": "spender", "type": "address", "indexed": true }, { "name": "fxpValue", "type": "uint256", "indexed": false }] }, { "name": "Transfer(address,address,uint256)", "type": "event", "inputs": [{ "name": "from", "type": "address", "indexed": true }, { "name": "to", "type": "address", "indexed": true }, { "name": "value", "type": "uint256", "indexed": false }] }];

myAugurRep_addr = "0x534206b24e54e1edd4940cf465e5b66db0ad73b6";
myAugurRep = 17901.96829666;

augurRep = eth.contract(augurRep_abi).at(augurRep_addr);

function balOfRep(i) {
   return augurRep.balanceOf(eth.accounts[i]).dividedBy(1e18);
}

function balTotalRep() {
   t = web3.toBigNumber(0);
   for (i = 0; i < eth.accounts.length; i++) {
       t = t.plus(balOfRep(i));
   }
   return t;
}

function balShowRep() {
   s = "";
   t =web3.toBigNumber(0);
   for (i = 0; i < eth.accounts.length; i++) {
       var b = balOfRep(i);
       if (b > 0) {
          t = t.plus(b);
          s = s + i + ") " + b + " Reps ;";
       }
   }
   return "augurRep == " + t + " Reps : " + s;
}
