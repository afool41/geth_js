function balTotal() {
  t = web3.toBigNumber(0);
  for (i = 0; i < acct.length; i++) {
    t = t.plus(balOf(i));
  }
  return t;
}

function balOf(i) {
   return web3.fromWei(eth.getBalance(acct[i]));
}

function balShow() {
   s = "";
   t = web3.toBigNumber(0);
   for (i = 0; i < acct.length; i++) {
       var b = balOf(i);
       if (b > 0) {
          t = t.plus(b);
          s = s + i + ") " + b + " ; ";
       }
   }
   // console.log(_cur + " == " + t + "\n" + s);
   return _cur + " == " + t + " : " + s;
}
