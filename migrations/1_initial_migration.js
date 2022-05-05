var Migrations = artifacts.require("./Migrations.sol");
const Tether = artifacts.require("./Tether.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Tether);
};


// module.exports = async function deployer() {
//   await deployer.deploy(Tether);
// };
