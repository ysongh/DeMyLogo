import React, { Component } from 'react';
import Web3 from 'web3';

import DeMyLogo from '../../abis/DeMyLogo.json';

class Tasks extends Component{
  state = {
    account: '',
    deMyLogoBlockchain: null
  }

  async componentWillMount(){
    await this.loadWeb3();
    await this.loadBlockchainData();
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

      const name = await deMyLogoBlockchain.methods.name().call();
      this.setState({ name });
    }else{
      window.alert('Contract is not deployed to detected network')
    }
  }

  render(){
    return (
      <div>
        <h1>DeMyLogo</h1>
        <p>{ this.state.account }</p>
        <p>{ this.state.name }</p>
      </div>
    );
  }
}

export default Tasks;