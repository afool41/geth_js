if (typeof(acct) == 'undefined') {
   var acct = [];
}

for (i = 0; i < eth.accounts.length; i++) {
    acct[acct.length] = eth.accounts[i];
}

var _cur = "ETH";
var etc_addr = "0xe766ac7915e126f429abd534135179144627d01a";
var metamask_addr = "0x54e13ca8e3be520a6858acee04c6e1f562ddf443";

loadScript("wallet.js");
loadScript("digix.js");
// loadScript("thedao.js");
loadScript("tempdao.js");
loadScript("makerdao.js");
// loadScript("btcrelay.js");
loadScript("daomassrefund.js");
loadScript("daomultisig.js");
loadScript("amiontheforked.js");
loadScript("augurRep.js");

function balByAccts() {
 
   // total eth, dgd token, dgd badge, mkr, augur Rep
   var t_e = web3.toBigNumber(0), t_dt = web3.toBigNumber(0), t_db = web3.toBigNumber(0), t_m = web3.toBigNumber(0), t_r = web3.toBigNumber(0);

   for (i = 0; i < acct.length; i++) {
       var s = "acct[" + i + "]";
       if (acct[i] == etc_addr) {
           s = s + "*ETC*";
       }
       else if (acct[i] == metamask_addr) {
           s = s + "*MetaMask*";
       }
       s = s + "(" + eth.getTransactionCount(acct[i]) + ")";


       var a = "";   // assets

       // ether
       var e = web3.toBigNumber(balOf(i)); 
       t_e = t_e.plus(e);
       if (e > 0) {
          a = a + e + " " + _cur +"; ";
       }

       // dgd token
       var dt = web3.toBigNumber(balOfDgd(i));
       t_dt = t_dt.plus(dt);
       if (dt > 0) {
          a = a + dt + " DGDs ; ";
       }

       // dgd badge
       var db = web3.toBigNumber(balOfDgdBadge(i));
       t_db = t_db.plus(db);
       if (db > 0) {
          a = a + db + " DGD badge ; ";
       }

       // MKR
       var m = web3.toBigNumber(balOfMkr(i));
       t_m = t_m.plus(m);
       if (m > 0) {
          a = a + m + " MKR ; ";
       }

       // Augur Rep
       var r = web3.toBigNumber(balOfRep(i));
       t_r = t_r.plus(r);
       if (r > 0) {
          a = a + r + " REP ; ";
       }

       //if ((e + dt + db + m + r) > 0) {
       if (e.plus(dt).plus(db).plus(m).plus(r) > 0) {
          s = s + " == ";
       }

       console.log(s + a);
   }

   return _cur + " == " + t_e + " ;; " + "DGD == " + t_dt + " tokens  & " + t_db + " badges ;; " +  "MKR == " + t_m + " ;; " + "REP == " + t_r + " ;; ";

}

function balByAssets(asset) {
   if (asset == "eth") {
      console.log(balShow());
      return _cur + " == " + balTotal() + " ;; ";
   }
   else if (asset == "dgd") {
      console.log(balShowDgd());
      return "Dgx DGD == " + balTotalDgd() + " tokens  & " + balTotalDgdBadge() + " badges ;; ";
   }
   else if (asset == "mkr") {
      console.log(balShowMkr());
      return "MKR == " + balTotalMkr() + " ;; ";
   }
   else if (asset == "rep") {
      console.log(balShowRep());
      return "REP == " + balTotalRep() + " ;; ";
   }
   else {
      console.log(balShow());
      console.log(balShowDgd());
      console.log(balShowMkr());
      console.log(balShowRep());
      return _cur + " == " + balTotal() + " ;; " + "Dgx DGD == " + balTotalDgd() + " tokens  & " + balTotalDgdBadge() + " badges ;; " + "MKR == " + balTotalMkr() + " ;; " + "Augur Rep == " + balTotalRep() + " ;; ";
   }
}

