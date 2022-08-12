import { Component, OnInit } from '@angular/core';
import { Web3Auth } from '@web3auth/web3auth';
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import RPC from "../web3-rpc";
const clientId = "BAULYwqDDsCD3I6Cwb0NPkqmCUFV6z_JR2zsa6YFyxcbapHDJj28gbovwopAqru0GNxYV2VTdoOsPXuylCcOHXs";


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor() {
    console.log("modal1")
   }
  title = "angular-app";
  web3auth: Web3Auth | null = null;
  provider: SafeEventEmitterProvider | null = null;
  isModalLoaded = false;

  async ngOnInit() {
    this.web3auth = new Web3Auth({
      clientId,
      chainConfig: {
        chainNamespace: CHAIN_NAMESPACES.OTHER,
        chainId: "0x61",
        rpcTarget: "https://data-seed-prebsc-1-s1.binance.org:8545/", // This is the public RPC we have added, please pass on your own endpoint while creating an app
      },
    });
    const web3auth = this.web3auth
    
    await web3auth.initModal(); 
    this.login();
    if (web3auth.provider) {
      this.provider = web3auth.provider;
     }
   
    this.isModalLoaded = true;
    console.log("modal created");
    }

  
  
  login = async () => {
  if (!this.web3auth) {
    console.log("web3auth not initialized yet");
    return;
  }
  const web3auth = this.web3auth;
  this.provider = await web3auth.connect();
  console.log("logged in");
  };

 

  getChainId = async () => {
    if (!this.provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(this.provider);
    const chainId = await rpc.getChainId();
    console.log(chainId);
  };
  
  /*getUserInfo = async () => {
    if (!this.web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await this.web3auth.getUserInfo();
    console.log(user);
  };
  getAccounts = async () => {
    if (!this.provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(this.provider);
    const address = await rpc.getAccounts();
    console.log(address);
  };

  getBalance = async () => {
    if (!this.provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(this.provider);
    const balance = await rpc.getBalance();
    console.log(balance);
  };

  sendTransaction = async () => {
    if (!this.provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(this.provider);
    const receipt = await rpc.sendTransaction();
    console.log(receipt);
  };

  signMessage = async () => {
    if (!this.provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(this.provider);
    const signedMessage = await rpc.signMessage();
    console.log(signedMessage);
  };

  getPrivateKey = async () => {
    if (!this.provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(this.provider);
    const privateKey = await rpc.getPrivateKey();
    console.log(privateKey);
  };*/

  logout = async () => {
    if (!this.web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await this.web3auth.logout();
    this.provider = null;
    console.log("logged out");
  };
}