const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 7545
    }
  },
  contract_directory: "./src/constracts/",
  // contract_build_directory: "./src/truffle/truffle_abis/",
};
