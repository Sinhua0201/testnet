// generateWallet.js
const { Wallet } = require("ethers");

const wallet = Wallet.createRandom();

// console.log("🆕 New Wallet Created!");
// console.log("Address:     ", wallet.address);
// console.log("Private Key: ", wallet.privateKey);
// console.log("Mnemonic:    ", wallet.mnemonic.phrase); // Optional: for backup
console.log(process.env.PRIVATE_KEY);
