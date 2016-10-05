// mkr_contract_addr="0xc66ea802717bfb9833400264dd12c2bceaa34a6d";

// maker.js from https://github.com/MakerDAO/maker-js
loadScript("maker.js");
var maker = new dapple.maker(web3, 'live');
var mkr = maker.getToken('MKR');
var mkr_contract_addr = mkr.address;
var mkr_contract_abi = mkr.abi;

function balOfMkr(i) {
   return mkr.balanceOf(eth.accounts[i]).dividedBy(1.0e+18);
}

function balTotalMkr() {
   t = web3.toBigNumber(0);
   for (i = 0; i < eth.accounts.length; i++) {
       t = t.plus(balOfMkr(i));
   }
   return t;
}

function balShowMkr() {
   s = "";
   t = web3.toBigNumber(0);
   for (i = 0; i < eth.accounts.length; i++) {
       var b = balOfMkr(i);
       if (b > 0) {
          t = t.plus(b);
          s = s + i + ") " + b + " ; ";
       }
   }
   return "MKR == " + t + " : " + s;
}
