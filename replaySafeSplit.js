// ReplaySafeSplit contract from :
// https://steemit.com/ethereum/@pauls/ethereum-fork-step-by-step-guide-to-safely-splitting-your-eth-etc
// rss_addr="0xaa1a6e3e6ef20068f7f8d8c835d2d22fd5116444";

// Safer version of ReplaySafeSplit contract from : 
// https://medium.com/@chevdor/safer-version-of-the-replaysafesplit-smart-contract-a29c347e8a7#.i74eq7idl
rss_addr="0x82018414398A34413Aa280a58B523dE8d277654c";
rss_abi_fragment = [{"constant":false,"inputs":[{"name":"targetFork","type":"address"},{"name":"targetNoFork","type":"address"}],"name":"split","outputs":[{"name":"","type":"bool"}],"type":"function"}];

rss = eth.contract(rss_abi_fragment).at(rss_addr);

