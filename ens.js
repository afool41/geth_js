function namehash(name) {
	var node = '0x0000000000000000000000000000000000000000000000000000000000000000';
	if (name != '') {
		var labels = name.split(".");
		for (var i = labels.length - 1; i >= 0; i--) {
			// console.log('labels[' + i + '] = ' + labels[i]);
			// console.log('web3.sha3(labels[' + i + ']) = ' + web3.sha3(labels[i]));
			// console.log('web3.sha3(labels[' + i + ']).slice(1) = ' + web3.sha3(labels[i]).slice(1));
			// console.log('web3.sha3(labels[' + i + ']).slice(2) = ' + web3.sha3(labels[i]).slice(2));
			// console.log('node + web3.sha3(labels[' + i + ']).slice(2) = ');
			// console.log(node + web3.sha3(labels[i]).slice(2));
			node = web3.sha3(node + web3.sha3(labels[i]).slice(2), {encoding: 'hex'});
			// console.log('node = ' + node);
		}
	}
	return node.toString();
}
