var acct = [];
for (i = 0; i < eth.accounts.length; i++) {
    acct[i] = eth.accounts[i];
}

var _cur = "ETH";

loadScript("wallet.js");
loadScript("digix.js");
// loadScript("thedao.js");
loadScript("tempdao.js");
loadScript("makerdao.js");
// loadScript("btcrelay.js");
loadScript("daomassrefund.js");
loadScript("daomultisig.js");
loadScript("amiontheforked.js");

function balByAccts() {
 
   // total eth, dgd token, dgd badge, mkr, tempdao  & thedao tokens
   // var t_e = 0, t_dt = 0, t_db = 0, t_m = 0, t_tp = 0, t_td = 0;

   // total eth, dgd token, dgd badge, mkr, daomassrefund
   // var t_e = 0, t_dt = 0, t_db = 0, t_m = 0, t_dmr = 0;

   // total eth, dgd token, dgd badge, mkr
   var t_e = 0, t_dt = 0, t_db = 0, t_m = 0;

   for (i = 0; i < eth.accounts.length; i++) {
       var s = "acct[" + i + "] ";
       var a = "";   // assets

       // ether
       var e = parseFloat(balOf(i)); 
       t_e = t_e + e;
       if (e > 0) {
          a = a + e + " " + _cur +"; ";
       }

       // dgd token
       var dt = parseFloat(balOfDgd(i));
       t_dt = t_dt + dt;
       if (dt > 0) {
          a = a + dt + " DGDs ; ";
       }

       // dgd badge
       var db = parseFloat(balOfDgdBadge(i));
       t_db = t_db + db;
       if (db > 0) {
          a = a + db + " DGD badge ; ";
       }

       // MKR
       var m = parseFloat(balOfMkr(i));
       t_m = t_m + m;
       if (m > 0) {
          a = a + m + " MKR ; ";
       }

       // if ((e + dt + db + m + tp + td ) > 0) {
       // if ((e + dt + db + dmr + m ) > 0) {
       if ((e + dt + db + m ) > 0) {
          s = s + "== ";
       }

       console.log(s + a);
   }

   // return _cur + " == " + t_e + " ;; " + "DGD == " + t_dt + " tokens  & " + t_db + " badges ;; " + "TempDAO == " + t_tp + " ;; " + "DAO == " + t_td + " ;; " + "MKR == " + t_m + " ;; ";
   // return _cur + " == " + t_e + " ;; " + "DGD == " + t_dt + " tokens  & " + t_db + " badges ;; " +  "MKR == " + t_m + " ;; " + "DAO mass refund == " + t_dmr + " ;; ";
   return _cur + " == " + t_e + " ;; " + "DGD == " + t_dt + " tokens  & " + t_db + " badges ;; " +  "MKR == " + t_m + " ;; ";

}

function balByAssets(asset) {
   if (asset == "eth") {
      console.log(balShowEth());
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
   // else if (asset == "dmr") {
   //    console.log(balShowDmr());
   //    return "DMR == " + balTotalDmr() + " ;; ";
   // }
   // else if (asset == "tempdao") {
   //    console.log(balShowTempdao());
   //    return "tempDAO == " + balTotalTempdao() + " ;; "; 
   // }
   else {
      console.log(balShowEth());
      console.log(balShowDgd());
      // console.log(balShowTempdao());
      console.log(balShowMkr());
      // console.log(balShowDmr());
      // return _cur + " == " + balTotal() + " ;; " + "Dgx DGD == " + balTotalDgd() + " tokens  & " + balTotalDgdBadge() + " badges ;; " + "tempDAO == " + balTotalTempdao() + " ;; " + "MKR == " + balTotalMkr() + " ;; ";
      // return _cur + " == " + balTotal() + " ;; " + "Dgx DGD == " + balTotalDgd() + " tokens  & " + balTotalDgdBadge() + " badges ;; " + "MKR == " + balTotalMkr() + " ;; " + "DMR == " + balTotalDmr() + " ;; ";
      return _cur + " == " + balTotal() + " ;; " + "Dgx DGD == " + balTotalDgd() + " tokens  & " + balTotalDgdBadge() + " badges ;; " + "MKR == " + balTotalMkr() + " ;; ";
   }
}

