function balTotal() {
  t = parseFloat(0.0);
  for (i = 0; i < eth.accounts.length; i++) {
    t = t + balOf(i);
  }
  return t;
}

function balOf(i) {
   return parseFloat(web3.fromWei(eth.getBalance(eth.accounts[i])));
}

function balShowEth() {
   s = "";
   t = parseFloat(0.0);
   for (i = 0; i < eth.accounts.length; i++) {
       var b = balOf(i);
       if (b > 0) {
          t = t + b;
          s = s + i + ") " + b + " ; ";
       }
   }
   // console.log(_cur + " == " + t + "\n" + s);
   return _cur + " == " + t + " : " + s;
}
