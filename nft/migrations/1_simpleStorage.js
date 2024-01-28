var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var SecondStorage = artifacts.require("./SecondStorage.sol");
module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(SecondStorage);
};