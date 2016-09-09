// thedao after hard fork

thedao_addr="0xbb9bc244d798123fde783fcc1c72d3bb8c189413"
thedao_abi_fragment = [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"type":"function"}, {"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"type":"function"}];

thedao = eth.contract(thedao_abi_fragment).at(thedao_addr);

function balOfThedao(i) {
   return parseFloat(thedao.balanceOf(eth.accounts[i])).dividedBy(1.0e+16);
}

function balTotalThedao() {
   t = parseFloat(0.0);
   for (i = 0; i < eth.accounts.length; i++) {
       t = t + balOfThedao(i);
   }
   return t;
}

function balShowThedao() {
   s = "";
   t = parseFloat(0.0);
   for (i = 0; i < eth.accounts.length; i++) {
       var b = balOfThedao(i);
       if (b > 0) {
          t = t + b;
          s = s + i + ") " + b + " ; ";
       }
   }
   return "The DAO == " + t + " tokens : " + s;
}

function thedao_status() {
  var bal = web3.fromWei(eth.getBalance(thedao_addr), "ether");
  return "Balance = " + bal + " " + _cur;
}
