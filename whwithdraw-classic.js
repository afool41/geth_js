// https://www.reddit.com/r/ethereum/comments/4yhz8h/etc_withdraw_contract_to_be_reviewed/
// whitehat withdraw
var whwd_addr = "0x9f5304da62a5408416ea58a17a92611019bd5ce3";
var whwd_abi = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"seal","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"totalAccounts","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"data","type":"uint256[]"}],"name":"fill","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"sealed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"}]; 
var whwd = web3.eth.contract(whwd_abi).at(whwd_addr); 

function balOfWhwd(i) {
   return parseFloat(whwd.balanceOf(eth.accounts[i]))/(1.0e+18);
}

function balTotalWhwd() {
   t = parseFloat(0.0);
   for (i = 0; i < eth.accounts.length; i++) {
       t = t + balOfWhwd(i);
   }
   return t + " " + _cur;
}

function balShowWhwd() {
   s = "";
   t = parseFloat(0.0);
   for (i = 0; i < eth.accounts.length; i++) {
       var b = balOfWhwd(i);
       if (b > 0) {
          t = t + b;
          s = s + i + ") " + b + " ; ";
       }
   }
   return "WhiteHat wd == " + t + " : " + s;
}
