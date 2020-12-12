const DeMyLogo = artifacts.require("DeMyLogo");

module.exports = async function(deployer){
	deployer.deploy(DeMyLogo);
};