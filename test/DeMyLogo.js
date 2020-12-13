const { assert } = require('chai');

const DeMyLogo = artifacts.require('./DeMyLogo.sol');

contract(DeMyLogo, ([deployer, user1]) => {
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

    describe('task', async() => {
        let result;
        let taskCount;

        const taskName = "Some Company";
        const taskDescription = "I need a logo with a cool icon and blue text";
        const taskContact = "You can contact me at somecompany123@mail.com";
        const taskAmount = 10;

        before(async() => {
            result = await deMyLogo.createTask(taskName, taskDescription, taskContact, taskAmount, { from: user1 });
            taskCount = await deMyLogo.taskCount();
        });

        it('create task', async() => {
            const event = result.logs[0].args;
            assert.equal(event.taskId.toNumber(), taskCount.toNumber(), 'Id is correct');
            assert.equal(event.name, taskName, 'Name is correct');
            assert.equal(event.description, taskDescription, 'Description is correct');
            assert.equal(event.contact, taskContact, 'Contact is correct');
            assert.equal(event.amount, taskAmount, 'Amount is correct');
            assert.equal(event.completed, false, 'Completed is correct');
            assert.equal(event.owner, user1, 'Owner is correct');
        });

        it('has correct task count', async() => {
            assert.equal(taskCount, 1);
        });

        it('lists the task', async() => {
            const task = await deMyLogo.tasks(taskCount);
            assert.equal(task.taskId.toNumber(), taskCount.toNumber(), 'Id is correct');
            assert.equal(task.name, taskName, 'Name is correct');
            assert.equal(task.description, taskDescription, 'Description is correct');
            assert.equal(task.contact, taskContact, 'Contact is correct');
            assert.equal(task.amount, taskAmount, 'Amount is correct');
            assert.equal(task.completed, false, 'Completed is correct');
            assert.equal(task.owner, user1, 'Owner is correct');
        });
    });
})