mydao_addr="0xd98157ae53342c90cfd341417d3c856351c1df95"
mydao_abi_minimal=[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"},{"name":"description","type":"string"},{"name":"votingDeadline","type":"uint256"},{"name":"open","type":"bool"},{"name":"proposalPassed","type":"bool"},{"name":"proposalHash","type":"bytes32"},{"name":"proposalDeposit","type":"uint256"},{"name":"newCurator","type":"bool"},{"name":"yea","type":"uint256"},{"name":"nay","type":"uint256"},{"name":"creator","type":"address"}],"type":"function"},{"type":"function","outputs":[{"type":"uint256","name":""}],"name":"totalSupply","inputs":[],"constant":true},{"type":"function","outputs":[{"type":"uint256","name":""}],"name":"closingTime","inputs":[],"constant":true},{"type":"function","outputs":[{"type":"address","name":""}],"name":"curator","inputs":[],"constant":true},{"type":"function","outputs":[{"type":"uint256","name":"balance"}],"name":"balanceOf","inputs":[{"type":"address","name":"_owner"}],"constant":true},{"type":"function","outputs":[{"type":"uint256","name":"_numberOfProposals"}],"name":"numberOfProposals","inputs":[],"constant":true},{"type":"function","outputs":[{"type":"address","name":""}],"name":"extraBalance","inputs":[],"constant":true},{"type":"function","outputs":[{"type":"bool","name":"success"}],"name":"createTokenProxy","inputs":[{"type":"address","name":"_tokenHolder"}],"constant":false},{"type":"function","outputs":[{"type":"uint256","name":"_voteID"}],"name":"vote","inputs":[{"type":"uint256","name":"_proposalID"},{"type":"bool","name":"_supportsProposal"}],"constant":false},{"type":"event","name":"FuelingToDate","inputs":[{"type":"uint256","name":"value","indexed":false}],"anonymous":false},{"type":"event","name":"ProposalAdded","inputs":[{"type":"uint256","name":"proposalID","indexed":true},{"type":"address","name":"recipient","indexed":false},{"type":"uint256","name":"amount","indexed":false},{"type":"bool","name":"newCurator","indexed":false},{"type":"string","name":"description","indexed":false}],"anonymous":false},{"type":"event","name":"ProposalTallied","inputs":[{"type":"uint256","name":"proposalID","indexed":true},{"type":"bool","name":"result","indexed":false},{"type":"uint256","name":"quorum","indexed":false}],"anonymous":false}];
mydao_abi_full=[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"},{"name":"description","type":"string"},{"name":"votingDeadline","type":"uint256"},{"name":"open","type":"bool"},{"name":"proposalPassed","type":"bool"},{"name":"proposalHash","type":"bytes32"},{"name":"proposalDeposit","type":"uint256"},{"name":"newCurator","type":"bool"},{"name":"yea","type":"uint256"},{"name":"nay","type":"uint256"},{"name":"creator","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"minTokensToCreate","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"rewardAccount","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"daoCreator","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"divisor","outputs":[{"name":"divisor","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"extraBalance","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"uint256"},{"name":"_transactionData","type":"bytes"}],"name":"executeProposal","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"unblockMe","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalRewardToken","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"actualBalance","outputs":[{"name":"_actualBalance","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"closingTime","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"allowedRecipients","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferWithoutReward","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"refund","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_description","type":"string"},{"name":"_transactionData","type":"bytes"},{"name":"_debatingPeriod","type":"uint256"},{"name":"_newCurator","type":"bool"}],"name":"newProposal","outputs":[{"name":"_proposalID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"DAOpaidOut","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"minQuorumDivisor","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newContract","type":"address"}],"name":"newContract","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_allowed","type":"bool"}],"name":"changeAllowedRecipients","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"halveMinQuorum","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"paidOut","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"uint256"},{"name":"_newCurator","type":"address"}],"name":"splitDAO","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"DAOrewardAccount","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"proposalDeposit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"numberOfProposals","outputs":[{"name":"_numberOfProposals","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"lastTimeMinQuorumMet","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_toMembers","type":"bool"}],"name":"retrieveDAOReward","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"receiveEther","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"isFueled","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_tokenHolder","type":"address"}],"name":"createTokenProxy","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"uint256"}],"name":"getNewDAOAddress","outputs":[{"name":"_newDAO","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"uint256"},{"name":"_supportsProposal","type":"bool"}],"name":"vote","outputs":[{"name":"_voteID","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"getMyReward","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"rewardToken","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFromWithoutReward","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proposalDeposit","type":"uint256"}],"name":"changeProposalDeposit","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"blocked","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"curator","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"uint256"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_transactionData","type":"bytes"}],"name":"checkProposalCode","outputs":[{"name":"_codeChecksOut","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"privateCreation","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[{"name":"_curator","type":"address"},{"name":"_daoCreator","type":"address"},{"name":"_proposalDeposit","type":"uint256"},{"name":"_minTokensToCreate","type":"uint256"},{"name":"_closingTime","type":"uint256"},{"name":"_privateCreation","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"}],"name":"FuelingToDate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"CreatedToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Refund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalID","type":"uint256"},{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"newCurator","type":"bool"},{"indexed":false,"name":"description","type":"string"}],"name":"ProposalAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalID","type":"uint256"},{"indexed":false,"name":"position","type":"bool"},{"indexed":true,"name":"voter","type":"address"}],"name":"Voted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalID","type":"uint256"},{"indexed":false,"name":"result","type":"bool"},{"indexed":false,"name":"quorum","type":"uint256"}],"name":"ProposalTallied","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_newCurator","type":"address"}],"name":"NewCurator","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_recipient","type":"address"},{"indexed":false,"name":"_allowed","type":"bool"}],"name":"AllowedRecipientChanged","type":"event"}];

mydao = eth.contract(mydao_abi_full).at(mydao_addr);

function balOfMydao(i) {
   return parseFloat(mydao.balanceOf(eth.accounts[i]))/(1.0e+16);
}

function balTotalMydao() {
   t = parseFloat(0.0);
   for (i = 0; i < eth.accounts.length; i++) {
       t = t + balOfMydao(i);
   }
   return t;
}

function balShowMydao() {
   s = "";
   t = parseFloat(0.0);
   for (i = 0; i < eth.accounts.length; i++) {
       var b = balOfMydao(i);
       if (b > 0) {
          t = t + b;
          s = s + i + ") " + b + " ; ";
       }
   }
   return "My DAO == " + t + " tokens : " + s;
}

// copied from http://ethereum.stackexchange.com/questions/4407/how-can-i-view-the-dao-proposals-including-the-current-voting-status
function mydao_listProposals(startProposal, endProposal) {
  var numberOfProposals = mydao.numberOfProposals();
  console.log("Number of proposals: " + numberOfProposals);

  if (startProposal == null) {
    startProposal = 1;
  }
  if (endProposal == null) {
    endProposal = numberOfProposals;
  }

  var totalSupply = mydao.totalSupply()/1e16;

  for (i = startProposal; i <= endProposal; i++) {
    var proposal = mydao.proposals(i);  
    var recipient = proposal[0];  
    var amount = proposal[1];
    var description = proposal[2];
    var votingDeadline = proposal[3];
    var timeNow = Date.now();
    var open = proposal[4];
    var proposalPassed = proposal[5];
    var yea = proposal[9] / 1e16;
    var yeaPercentOfTotalSupply = (yea / totalSupply) * 100;
    var nay = proposal[10] / 1e16;
    var nayPercentOfTotalSupply = (nay / totalSupply) * 100;
    var totalPercentOfTotalSupply = yeaPercentOfTotalSupply + nayPercentOfTotalSupply;
    var yeaAndNay = yea + nay;
    var yeaPercent;
    var nayPercent;
    if (yeaAndNay > 0) {
       yeaPercent = (yea / yeaAndNay) * 100;
       nayPercent = (nay / yeaAndNay) * 100;
    } else {
       yeaPercent = 0;
       nayPercent = 0;
    }
    var newCurator = proposal[8];
    var passDue = "";
    var newDAOAddress = "";
    if ((votingDeadline*1000) < timeNow) {
        passDue = "Voting ENDs after ";
        if (newCurator)
           newDAOAddress = " (new DAO : " + mydao.getNewDAOAddress(i) + ")";
    } else {
        passDue = "Still voting until ";
    }
    var creator = proposal[11];
    console.log("Proposal_ID: " + i  + "\n" +
      "  Created by     : " + creator + "\n" +
      "  Recipient      : " + recipient + "\n" +
      "  Amount         : " + amount + "\n" +
      "  New Curator    : " + newCurator + newDAOAddress + "\n" +
      "  Description    : " + description + "\n" +
      "  Voting Deadline: " + passDue + new Date(votingDeadline * 1000) + " (" + votingDeadline + ")\n" +
      "  Open           : " + open + "\n" +
      "  Proposal Passed: " + proposalPassed + "\n" +
      "  Yeas           : " + yea.toFixed(4) + " " + yeaPercent.toFixed(2) + "% ~ " + yeaPercentOfTotalSupply.toFixed(4) + "% of supply\n" + 
      "  Nays           : " + nay.toFixed(4) + " " + nayPercent.toFixed(2) + "% ~ " + nayPercentOfTotalSupply.toFixed(4) + "% of supply\n" +
      "  Total          : " + yeaAndNay + " == " + totalPercentOfTotalSupply.toFixed(4) + "% of supply\n");
  }

  return("Total MyDAO tokens : " + totalSupply);
}

function mydao_status() {
  // var myEth = 6772.203185900849465034;
  var creationEnds = mydao.closingTime();

  var timeNow = Date.now();
  console.log("Creation ends : " + new Date(creationEnds * 1000) );

  var totalSupply = mydao.totalSupply()/1e16;
  var totalEth = totalSupply/100;
  // console.log("Total Supply : " + totalSupply + " == " + (totalEth - myEth) + " more " + _cur);
  console.log("Total Supply : " + totalSupply + " == " + totalEth + " " + _cur);
  var bal = web3.fromWei(eth.getBalance(mydao_addr), "ether");
  console.log("Balance : " + bal + " " + _cur);

  if ((creationEnds * 1000) < timeNow)
     return "Creation ends!";
  else
     return "Still in creation period.";

}
