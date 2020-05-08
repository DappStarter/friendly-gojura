require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain unknown heavy process obscure general'; 
let testAccounts = [
"0x9247c34cae88477f17404e2e0a881d281ea34726acb7215bd128f2fc57322b97",
"0xde4e7ab24378ce28bc7953ced2f12e5d6c46f8e996629193ff7ec0f6d498011a",
"0x3b92e80c4bf85fd3cc73f1e7d96bd0a2756672b5ff3283ff53a305a7e7f20146",
"0xf816bfcc63e55822e0ffda515220eb783a7a4d220768a7371df1ad58b2123a82",
"0x1adc5fa5fb217cb687805af78b71e5d6dcafa62ca70c4172b5360d375806e636",
"0x6d6dab1756e0254c198a65acc5b4a28cc861642bbb73f59ca63d844183dfbdb3",
"0xb657fd2dc20851c53a5d63d8210c6bf33bc347476fd0fe65cd5481d7f1c221a5",
"0xd7a00aad940918c784528bd71411de5d34b05e371f6fdd2b44d93fbabb2dc519",
"0x447d6d4b9a6c903b06ce0b9495968d1b01eab95127d2c0d519e9a224cd247e80",
"0x89af7582d55a29f87369f112771b55862ba52e6c3b172c004049a13face8ee9a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
