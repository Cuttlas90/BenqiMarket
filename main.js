const Web3 = require("web3")
const proxy_abi = require('./proxy.json')


const web3 = new Web3('https://api.avax.network/ext/bc/C/rpc')

let address = "0x486Af39519B4Dc9a7fCcd318217352830E8AD9b4"
let proxy_address = "0xD38A19100530b99c3b84CCA971DfD96BD557AA91"


var myContract = new web3.eth.Contract(proxy_abi, address, {
  from: proxy_address
});

test()

async function test() {
  const result = await myContract.methods.getAllMarkets().call()
  console.log(result);
}