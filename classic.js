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
 
   // total etc, mydao, whwd
   // var t_e = 0.0, t_my = 0.0, t_wh = 0.0;

   // total etc
   var t_e = 0.0, t_my = 0.0, t_wh = 0.0;

   for (i = 0; i < eth.accounts.length; i++) {
       var s = "acct[" + i + "] ";
       if (eth.accounts[i] != etc_addr) {
           s = "acct[" + i + "] #ETH#";
       }

       var a = "";   // assets

       // etc
       var e = balOf(i); 
       t_e = t_e + parseFloat(e);
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
       // var tmy = balOfMydao(i);
       // t_my = t_my + parseFloat(tmy);
       // if (tmy > 0) {
       //    a = a + tmy + " myDAOs ; ";
       // }

       // Whitehat withdraw contract
       // var twh = balOfWhwd(i);
       // t_wh = t_wh + twh;
       // if (twh > 0) {
       //    a = a + twh + " WhiteHats ; ";
       // }

       // if ((e + tmy + twh) > 0) {
       if (e > 0) {
          s = s + "== ";
       }

       console.log(s + a);
   }

   // return _cur + " == " + t_e + " ;; " + "MyDAO == " + t_my + " ;; " + "WhiteHat == " + t_wh + " ;; "; 
   return _cur + " == " + t_e;

}

function balByAssets(asset) {
   if (asset == "etc") {
      console.log(balShowEtc());
      return _cur + " == " + balTotal() + " ;; ";
   }
   else if (asset == "mydao") {
      console.log(balShowMydao());
      return "MyDAO == " + balTotalMydao() + " ;; "; 
   }
   else if (asset == "whwd") {
      console.log(balShowWhwd());
      return "WhiteHat == " + balTotalWhwd() + " ;; "; 
   }
   else {
      console.log(balShowEtc());
      console.log(balShowMydao());
      console.log(balShowWhwd());
      // return _cur + " == " + balTotal() + " ;; " + "Dgx DGD == " + balTotalDgd() + " tokens  & " + balTotalDgdBadge() + " badges ;; " + "tempDAO == " + balTotalTempdao() + " ;; " + "MKR == " + balTotalMkr() + " ;; ";
      return _cur + " == " + balTotal() + " ;; " + "My DAO == " + balTotalMydao() + " ;; " + "WhiteHat withdraw == " + balTotalWhwd() + " ;; ";
   }

}

