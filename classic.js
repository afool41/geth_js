var acct = [];
for (i = 0; i < eth.accounts.length; i++) {
    acct[i] = eth.accounts[i];
}

var _cur = "ETC";
var etc_addr = "0xe766ac7915e126f429abd534135179144627d01a";

loadScript("wallet-classic.js");
loadScript("thedao-classic.js");
loadScript("hackerdao-classic.js");
loadScript("tempdao-classic.js");
loadScript("mydao-classic.js");
loadScript("whetcwithdraw-classic.js");
loadScript("whetc-sign_intent-classic.js");
loadScript("amiontheforked.js");

function balByAccts() {
 
   // total etc
   var t_e = web3.toBigNumber(0);

   for (i = 0; i < eth.accounts.length; i++) {
       var s = "acct[" + i + "]";
       if (eth.accounts[i] != etc_addr) {
           s = s + "#ETH";
       }
       s = s + "(" + eth.getTransactionCount(eth.accounts[i]) + ")";

       var a = "";   // assets

       // etc
       var e = web3.toBigNumber(balOf(i)); 
       t_e = t_e.plus(e);
       if (e > 0) {
          a = a + e + " " + _cur + " ; ";
       }

       if (e > 0) {
          s = s + " == ";
       }

       console.log(s + a);
   }

   return _cur + " == " + t_e;

}

function balByAssets(asset) {
   if (asset == "etc") {
      console.log(balShowEtc());
      return _cur + " == " + balTotal() + " ;; ";
   }
   else {
      console.log(balShowEtc());
      return _cur + " == " + balTotal() + " ;; ";
   }

}

