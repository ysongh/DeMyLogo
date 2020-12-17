const { assert } = require('chai');

const DeMyLogo = artifacts.require('./DeMyLogo.sol');

contract(DeMyLogo, ([deployer, user1, user2]) => {
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
        const taskAmount = 1;

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

    describe('logo', async() => {
        let result;
        let logoCount;

        const fileHash = '28dioaF823jifjf2i3jifjisfwdlsk3isof'
        const email = "somecompany123@mail.com";
        const taskId = 1;

        before(async() => {
            result = await deMyLogo.createLogo(fileHash, email, user1, taskId, { from: user2 });
            logoCount = await deMyLogo.logoCount();
        });

        it('create logo', async() => {
            const event = result.logs[0].args;
            assert.equal(event.logoId.toNumber(), logoCount.toNumber(), 'Id is correct');
            assert.equal(event.fileHash, fileHash, 'Hash is correct');
            assert.equal(event.email, email, 'Email is correct');
            assert.equal(event.designer, user2, 'Designer is correct');
            assert.equal(event.owner, user1, 'Owner is correct');
            assert.equal(event.winner, false, 'Winner is correct');
            assert.equal(event.taskId.toNumber(), taskId, 'Task Id is correct');
        });

        it('has correct logo count', async() => {
            assert.equal(logoCount, 1);
        });

        it('lists the logo', async() => {
            const logo = await deMyLogo.logos(logoCount);
            assert.equal(logo.logoId.toNumber(), logoCount.toNumber(), 'Id is correct');
            assert.equal(logo.fileHash, fileHash, 'Hash is correct');
            assert.equal(logo.email, email, 'Email is correct');
            assert.equal(logo.designer, user2, 'Designer is correct');
            assert.equal(logo.owner, user1, 'Owner is correct');
            assert.equal(logo.winner, false, 'Winner is correct');
            assert.equal(logo.taskId.toNumber(), taskId, 'Task Id is correct');
        });
    });

    describe('pay designer ', async() => {
        let result;
        let task;
        let taskId = 1;
        let logoId = 1;
        
        before(async() => {
            task = await deMyLogo.tasks(1);
        });
        
        it('received correct funds', async() => {
            let oldDesignerBalanace = await web3.eth.getBalance(user2);
            oldDesignerBalanace = new web3.utils.BN(oldDesignerBalanace);

            result = await deMyLogo.payDesigner(taskId, user2, logoId, { from: user1, value: web3.utils.toWei(task.amount.toString(), 'Ether') });
            
            let newDesignerBalanace = await web3.eth.getBalance(user2);
            newDesignerBalanace = new web3.utils.BN(newDesignerBalanace);

            let amount = web3.utils.toWei(task.amount.toString(), 'Ether');
            amount = new web3.utils.BN(amount);

            const expectedBalance = oldDesignerBalanace.add(amount);

            assert.equal(newDesignerBalanace.toString(), expectedBalance.toString());
            
            const event = result.logs[0].args;
            assert.equal(event.from, user1, 'Owner address is correct');
            assert.equal(event.to, user2, 'Designer address is correct');
            assert.equal(event.taskId, taskId, 'Task Id is correct');
            assert.equal(event.amount.toString(), task.amount.toString(), 'Amount is correct');
            assert.equal(event.logoId, logoId, 'Logo Id is correct');
        });

        it('set task completed to true', async() => {
            let task = await deMyLogo.tasks(taskId);
            assert.equal(task.completed, true);
        });

        it('set logo winner to true', async() => {
            let logo = await deMyLogo.logos(logoId);
            assert.equal(logo.winner, true);
        });
    });
})