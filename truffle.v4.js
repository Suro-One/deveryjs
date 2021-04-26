// Allows us to use ES6 in our migrations and tests.
require("babel-register");
require("babel-polyfill");
require("babel-plugin-transform-runtime");

module.exports = {
  contracts_directory: "./contracts/v4/",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    coverage: {
      host: "127.0.0.1",
      network_id: "*",
      port: 7545, // <-- If you change this, also set the port option in .solcover.js.
      gas: 0xfffffffffff, // <-- Use this high gas value
      gasPrice: 0x01, // <-- Use this low gas price
    },
  },
  solc: {
    version: "0.7.4",
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  compilers: {
    solc: {
      version: "0.7.4",
    },
  },
  mocha: {
    useColors: true,
    exit: true,
    retries: 0,
    timeout: 1000,
  },
  paths: {
    sources: "./contracts/v4",
  },
};
