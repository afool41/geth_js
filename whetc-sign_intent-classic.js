// https://gist.github.com/BitySA/699d39cbf557e50adcccc166ed129f89

function pad(pad, str, padLeft) {
    if (typeof str === 'undefined')
        return pad;
    if (padLeft) {
        return (pad + str).slice(-pad.length);
    } else {
        return (str + pad).substring(0, pad.length);
    }
}

function asciiToHex(str) {
    var res = "";
    for (var i = 0; i < str.length; i++) {
        res += str.charCodeAt(i).toString(16);
    }
    return res;
}

function padTo64Bytes(hexstr) {
    return pad('0000000000000000000000000000000000000000000000000000000000000000', hexstr, true);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function signIntent(fromAddress, beneficiaryETC, percentageWHG) {
    if (!isNumeric(percentageWHG)) {
        console.log("ERROR: percentageWHG should be a number!");
        return;
    }
    if (percentageWHG < 0 || percentageWHG > 100) {
        console.log("ERROR: percentageWHG should be a number between 0 and 100!");
        return;
    }
    var text = asciiToHex("Withdraw DAOETC to ")
        + beneficiaryETC.substr(2, beneficiaryETC.length)
        + padTo64Bytes(percentageWHG.toString(16));
    personal.unlockAccount(fromAddress);
    var sig = web3.eth.sign(fromAddress, web3.sha3(text, {encoding: 'hex'}));
    return [beneficiaryETC, percentageWHG, sig];
}
