var acct = [];
for (i = 0; i < eth.accounts.length; i++) {
    acct[i] = eth.accounts[i];
}

var _cur = "ETC";

loadScript("wallet-classic.js");
// loadScript("digix.js");
loadScript("thedao-classic.js");
loadScript("tempdao-classic.js");
loadScript("mydao-classic.js");
// loadScript("makerdao.js");
// loadScript("btcrelay.js");

function balByAccts() {
 
   // total etc, dgd token, dgd badge, mkr, tempdao  & thedao tokens
   // var t_e = 0, t_dt = 0, t_db = 0, t_m = 0, t_tp = 0, t_td = 0;

   // total etc, mydao 
   var t_e = 0, t_my = 0;

   for (i = 0; i < eth.accounts.length; i++) {
       var s = "acct[" + i + "] ";
       var a = "";   // assets

       // etc
       var e = balOf(i); 
       t_e = t_e + e;
       if (e > 0) {
          a = a + e + " " + _cur + " ; ";
       }

       // dgd token
       // var dt = balOfDgd(i);
       // t_dt = t_dt + dt;
       // if (dt > 0) {
       //    a = a + dt + " DGDs ; ";
       // }

       // dgd badge
       // var db =  balOfDgdBadge(i);
       // t_db = t_db + db;
       // if (db > 0) {
       //    a = a + db + " DGD badge ; ";
       // }

       // MKR
       // var m = balOfMkr(i);
       // t_m = t_m + m;
       // if (m > 0) {
       //    a = a + m + " MKR ; ";
       // }

       // Temp DAO token
       // var tp = balOfTempdao(i);
       // t_tp = t_tp + tp;
       // if (tp > 0) {
       //    a = a + tp + " TempDAOs ; ";
       // }

       // The DAO token
       // var td = balOfThedao(i);
       // t_td = t_td + td;
       // if (td > 0) {
       //    a = a + td + " DAOs ; ";
       // }

       // My DAO token
       var tmy = balOfMydao(i);
       t_my = t_my + tmy;
       if (tmy > 0) {
          a = a + tmy + " myDAOs ; ";
       }

       // if ((e + dt + db + m + tp + td ) > 0) {
       if ((e + tmy) > 0) {
          s = s + "== ";
       }

       console.log(s + a);
   }

   // return _cur + " == " + t_e + " ;; " + "DGD == " + t_dt + " tokens  & " + t_db + " badges ;; " + "TempDAO == " + t_tp + " ;; " + "DAO == " + t_td + " ;; " + "MKR == " + t_m + " ;; ";
   return _cur + " == " + t_e + " ;; " + "MyDAO == " + t_my + " ;; "; 

}

function balByAssets(asset) {
   if (asset == "etc") {
      console.log(balShowEtc());
      return _cur + " == " + balTotal() + " ;; ";
   }
   // else if (asset == "dgd") {
   //    console.log(balShowDgd());
   //    return "Dgx DGD == " + balTotalDgd() + " tokens  & " + balTotalDgdBadge() + " badges ;; ";
   // }
   // else if (asset == "mkr") {
   //    console.log(balShowMkr());
   //    return "MKR == " + balTotalMkr() + " ;; ";
   // }
   else if (asset == "mydao") {
      console.log(balShowMydao());
      return "MyDAO == " + balTotalMydao() + " ;; "; 
   }
   // else if (asset == "tempdao") {
   //    console.log(balShowTempdao());
   //    return "tempDAO == " + balTotalTempdao() + " ;; "; 
   // }
   else {
      console.log(balShowEtc());
      // console.log(balShowDgd());
      // console.log(balShowMkr());
      console.log(balShowMydao());
      // console.log(balShowTempdao());
      // return _cur + " == " + balTotal() + " ;; " + "Dgx DGD == " + balTotalDgd() + " tokens  & " + balTotalDgdBadge() + " badges ;; " + "tempDAO == " + balTotalTempdao() + " ;; " + "MKR == " + balTotalMkr() + " ;; ";
      return _cur + " == " + balTotal() + " ;; " + "My DAO == " + balTotalMydao() + " ;; ";
   }

   // return "Total 2 assets...";
}

// standard callback function
function callBack(error, result) {
   if (!error)
      console.log(result);
   else
      console.error(error);
}
