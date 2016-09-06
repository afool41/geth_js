amiontheforked_addr="0x2BD2326c993DFaeF84f696526064FF22eba5b362";
amiontheforked_abi=[{"constant":true,"inputs":[],"name":"forked","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"update","outputs":[],"type":"function"}];
amiontheforked=eth.contract(amiontheforked_abi).at(amiontheforked_addr);

