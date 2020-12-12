const { assert } = require('chai');

const DeMyLogo = artifacts.require('./DeMyLogo.sol');

contract(DeMyLogo, (account) => {
    let deMyLogo;

    before(async() => {
        deMyLogo = await DeMyLogo.deployed();
    });

    describe('deployment', async() => {
        it('deploys successfully', async() => {
            const address = await deMyLogo.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });
        it('has correct name', async() => {
            const name = await deMyLogo.name();
            assert.equal(name, "DeMyLogo");
        });
    });
})