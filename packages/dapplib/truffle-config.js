require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar puzzle gesture drop tackle segment'; 
let testAccounts = [
"0xd9992dcc1a0ee853d4ca07c13d50e6c65d0216cb1d78ab9cdb776e2250bdcfd6",
"0xb815c341210ee3e3bb74db7e666bf0cb72c10d8646b94228bc0694e5552fd34e",
"0xf0487fe5da2705935f3555e63ca85d2bf16276a58db46b6086975f91f65da3a7",
"0x41ac9a645e5e77d2e79ee8b9cfe8a4d2710d6ab8bc1fa08c08539bcdb8fd6e36",
"0x2f62d683802d75b98c5a971ab8f25abad28ba543c7418fa8f6fb70e2acccd4a0",
"0xde16cb1d633031b6f332bae683e0805267f8335f85e1f60fe392bd46ca02b202",
"0x7fa300770a8609e6f85de8b4bfe5ca0fa02fa57e6e5a4b51f57437ed23d4b539",
"0x6f0b4422718ce01d10c8ff32f80fdded3ee80534d178091d4ac937a7510f4eb3",
"0x3921d3eccdab232e1cfeb3405fd0acb7ddb5e108a85fe583bdd55d6f1ec283e8",
"0x4488af75fe1d271e944504bb5933dc73aef88e5c544f1bfdc9ae0c2e8b24bfe6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

