import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Web3 from 'web3';

import DeMyLogo from '../../abis/DeMyLogo.json';
import Navbar from './Navbar';
import Tasks from './Tasks';
import AddTask from './AddTask';
import TaskDetail from './TaskDetail';
import AddLogo from '../logo/AddLogo';

class Main extends Component{
  state = {
    account: '',
    deMyLogoBlockchain: null,
    taskCount: 0,
    tasks: [],
    currentTask: {},
    contentNumber: 1
  }

  async componentWillMount(){
    await this.loadWeb3();
    await this.loadBlockchainData();
    await this.getTasks();
  }

  async loadWeb3(){
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);

      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  async loadBlockchainData(){
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const networkId = await web3.eth.net.getId();
    const networkData = DeMyLogo.networks[networkId];

    if(networkData){
      const abi = DeMyLogo.abi;
      const address = DeMyLogo.networks[networkId].address;

      const deMyLogoBlockchain = new web3.eth.Contract(abi, address);
      this.setState({ deMyLogoBlockchain });

      const taskCount = await deMyLogoBlockchain.methods.taskCount().call();
      this.setState({ taskCount });
    }else{
      window.alert('Contract is not deployed to detected network')
    }
  }

  async getTasks(){
    for(let i = 0; i < this.state.taskCount; i++){
      const task = await this.state.deMyLogoBlockchain.methods.tasks(i + 1).call();
      this.setState({ tasks: [task, ...this.state.tasks] });
    }
    console.log(this.state.tasks, this.state.task);
  }

  async createTasks(taskName, taskDescription, taskContact, taskAmount){
    const receipt = await this.state.deMyLogoBlockchain.methods.createTask(taskName, taskDescription, taskContact, taskAmount).send({ from: this.state.account });
    console.log(receipt)
    if(receipt.status){
      this.setState({ contentNumber: 1 });
    }
  }

  async createLogo(fileHash, email){
    const receipt = await this.state.deMyLogoBlockchain.methods.createLogo(fileHash, email, this.state.currentTask.owner).send({ from: this.state.account });
    
    if(receipt.status){
      this.setState({ contentNumber: 3 });
    }
  }

  changeContent(num){
    this.setState({ contentNumber: num });  
  }

  getTaskDetail(id){
    const task = this.state.tasks[this.state.taskCount - id];
    this.setState({
      currentTask: task,
      contentNumber: 3
    });
  }

  render(){
    let getContent;

    switch (this.state.contentNumber) {
      case 1:
        getContent = <Tasks
          changeContent={this.changeContent.bind(this)}
          getTaskDetail={this.getTaskDetail.bind(this)}
          tasks={this.state.tasks} />;
        break;
      case 2:
        getContent = <AddTask
          changeContent={this.changeContent.bind(this)}
          createTasks={this.createTasks.bind(this)} />;
        break;
      case 3:
        getContent = <TaskDetail
          changeContent={this.changeContent.bind(this)}
          currentTask={this.state.currentTask} />;
        break;
      case 4:
        getContent = <AddLogo
          changeContent={this.changeContent.bind(this)}
          createLogo={this.createLogo.bind(this)} />;
        break;
      default:
        getContent = 'Page not found';
    }

    return (
      <div>
        <Navbar account={this.state.account} />
        <Container>
          { getContent }
        </Container>
      </div>
    );
  }
}

export default Main;