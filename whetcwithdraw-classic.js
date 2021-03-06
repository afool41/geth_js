// https://www.reddit.com/r/ethereum/comments/4yhz8h/etc_withdraw_contract_to_be_reviewed/
// whitehat withdraw
var whwd_addr = "0x9f5304da62a5408416ea58a17a92611019bd5ce3";
var whwd_abi = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"seal","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"totalAccounts","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"data","type":"uint256[]"}],"name":"fill","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"sealed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"}]; 
var whwd = web3.eth.contract(whwd_abi).at(whwd_addr); 

function balOfWhwd(i) {
   return whwd.balanceOf(acct[i]).dividedBy(1.0e+18);
}

function balTotalWhwd() {
   t = web3.toBigNumber(0)
   for (i = 0; i < acct.length; i++) {
       t = t.plus(balOfWhwd(i));
   }
   return t + " " + _cur;
}

function balShowWhwd() {
   s = "";
   t = web3.toBigNumber(0);
   for (i = 0; i < acct.length; i++) {
       var b = balOfWhwd(i);
       if (b > 0) {
          t = t.plus(b);
          s = s + i + ") " + b + " ; ";
       }
   }
   return "WhiteHat wd == " + t + " : " + s;
}
