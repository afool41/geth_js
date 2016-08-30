// from https://github.com/slockit/DAO/wiki/How-to-split-the-DAO
// https://github.com/slockit/DAO/wiki/How-to-create-a-proposal

// Normal procedure is the make my own newCurator proposal, but have to wait for 7 days !
// newProposal(recipient, amount, description, transactionData, debatingPeriod, newCurator ( true/false ), {from:acct, gas:30000}

thedao.newProposal(acct[5], 0, "afool split", , 604800, true, {from:acct[5], gas:300000});

// for normal proposal, it should have deposits like this ????
// thedao.newProposal(acct[5], 0, "afool propose", , 604800*2, false, {from:acct[5], to:theDAO, value:web3.toWei(2, "ether"), gas:300000});


// to speed up the process :
// join proposal 73 (voting ends @ 2016/6/19 00:33:00 CST) for immediate split
thedao.vote(73, true, {from:acct[5]});
thedao.vote(73, true, {from:acct[4]});
thedao.vote(73, true, {from:acct[3]});
thedao.vote(73, true, {from:acct[2]});
thedao.vote(73, true, {from:acct[1]});
thedao.vote(73, true, {from:acct[0]});

// panic split into a DAO by others 
// newCurator 0xa003e4b91180d3e06a03f1916fe94eb4c350850e
thedao.splitDAO(73, "0xa003e4b91180d3e06a03f1916fe94eb4c350850e", {from:acct[5], gas:4000000});
thedao.getNewDAOAddress(73);  // to find the new DAO address == tempdao_addr
thedao.splitDAO(73, "0xa003e4b91180d3e06a03f1916fe94eb4c350850e", {from:acct[4], gas:300000});
thedao.splitDAO(73, "0xa003e4b91180d3e06a03f1916fe94eb4c350850e", {from:acct[3], gas:300000});
thedao.splitDAO(73, "0xa003e4b91180d3e06a03f1916fe94eb4c350850e", {from:acct[2], gas:300000});
thedao.splitDAO(73, "0xa003e4b91180d3e06a03f1916fe94eb4c350850e", {from:acct[1], gas:300000});
thedao.splitDAO(73, "0xa003e4b91180d3e06a03f1916fe94eb4c350850e", {from:acct[0], gas:300000});

// the following happens on Ethereum-Classic chain !!
// wait 27 days, and then make a newCurator ( myself ) proposal asap
// acct[6] is for ETClassic !
// acct[5] propose acct[6] as the new curator
tempdao.newProposal(acct[6], 0, "afool split again", "", 604800, true, {from:acct[5], gas:300000});

// then join my own proposal
tempdao.vote(1, true, {from:acct[5]});
tempdao.vote(1, true, {from:acct[4]});
tempdao.vote(1, true, {from:acct[3]});
tempdao.vote(1, true, {from:acct[2]});
tempdao.vote(1, true, {from:acct[1]});
tempdao.vote(1, true, {from:acct[0]});

// wait 7 days, and then splitDAO ( myself as newCurator ) again
tempdao.splitDAO(1, acct[6], {from:acct[5], gas:4000000});  // automatically created the new childDAO, needs more gas
tempdao.getNewDAOAddress(1);  // to find the new DAO address == mydao_addr
tempdao.splitDAO(1, acct[6], {from:acct[4], gas:300000});   // gas usage is about 0.006 ether
tempdao.splitDAO(1, acct[6], {from:acct[3], gas:300000});
tempdao.splitDAO(1, acct[6], {from:acct[2], gas:300000});
tempdao.splitDAO(1, acct[6], {from:acct[1], gas:300000});
tempdao.splitDAO(1, acct[6], {from:acct[0], gas:300000});

// wait 27-day-creation-period again
mydao_status();

// and then make a normal Proposal ( MUST from a DAO token holder, curator is NOT necessarily a token holder! ) 
// to send "all etc in Wei == eth.getBalance(mydao_addr)" to curator ( myself ).
// Then vote yes from all my accounts
// and then wait 14 days before sending out the ether...
mydao.newProposal(acct[6], eth.getBalance(mydao_addr), "afool finally retrieving ALL etc", "", 1209600, false, {from:acct[5], gas:300000});

// then vote yes on new proposal..
mydao.vote(1, true, {from:acct[5]});
mydao.vote(1, true, {from:acct[4]});
mydao.vote(1, true, {from:acct[3]});
mydao.vote(1, true, {from:acct[2]});
mydao.vote(1, true, {from:acct[1]});
mydao.vote(1, true, {from:acct[0]});

