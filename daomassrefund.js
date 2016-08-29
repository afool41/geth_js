daomassrefund_addr="0x3dA71558a40F63b960196cC0679847fF50faD22B";
daomassrefund_abi=[{"constant":false,"inputs":[],"name":"clawback","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_childDAO","type":"address"}],"name":"withdraw","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"WithDrawPreForkChildDAO","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_childDAO","type":"address"},{"name":"_tokenHolder","type":"address"}],"name":"checkMyWithdraw","outputs":[{"name":"","type":"uint256"}],"type":"function"}];

daomassrefund = eth.contract(daomassrefund_abi).at(daomassrefund_addr);

mysplitproposalid=73;
mydao_addr="0x5524c55fb03cf21f549444ccbecb664d0acad706";

function balOfDmr(i) {
   return parseFloat(daomassrefund.checkMyWithdraw(mydao_addr, eth.accounts[i]))/(1.0e+18);
}

function balTotalDmr() {
   t = parseFloat(0.0);
   for (i = 0; i < eth.accounts.length; i++) {
       t = t + balOfDmr(i);
   }
   return t + " " + _cur;
}

function balShowDmr() {
   s = "";
   t = parseFloat(0.0);
   for (i = 0; i < eth.accounts.length; i++) {
       var b = balOfDmr(i);
       if (b > 0) {
          t = t + b;
          s = s + i + ") " + b + " ; ";
       }
   }
   return "DMR == " + t + " : " + s;
}
