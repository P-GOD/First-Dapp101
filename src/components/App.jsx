import React, { Component } from "react";
import Web3 from "web3";
import NavBar from "./NavBar";
import Main from "./../pages/Main";
import Cloudswap from "./../abis/Cloudswap.json";
import NimbusToken from "./../abis/NimbusToken.json";
import Farm from "./../pages/Farm";
import Cloudfarm from "./../abis/Cloudfarm.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooTer from "./FooTer";
import Home from "./../pages/Home";
import MainU from "./../pages/musdt/MainU";
import Tether from "./../abis/Tether.json";
import Usdtswap from "./../abis/Usdtswap.json";
import MainBnb from "./../pages/mBNB/MainU";
import MainE from "./../pages/mEth/MainU";
import Eth from "./../abis/Ether.json";
import ethswap from "./../abis/Ethswap.json";
import Bnb from "./../abis/Binance.json";
import bnbSwap from "./../abis/Bnbswap.json";
import About from "./../pages/About";

let web3 = new Web3();

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadBlockchainData() {
    web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const oneBalance = await web3.eth.getBalance(this.state.account);
    this.setState({ oneBalance });
    //load NimbusToken
    const nimbusAbi = NimbusToken.abi;
    const networkId = await web3.eth.net.getId();
    const nimbusAddress = "0x4DCf3dBe1728D15Dd2e6a06D72670caf13140F2D";
    if (networkId == 1666700000) {
      const token = new web3.eth.Contract(nimbusAbi, nimbusAddress);
      this.setState({ token });
      let tokenBalance = await token.methods
        .balanceOf(this.state.account)
        .call();
      this.setState({ tokenBalance: tokenBalance.toString() });
    } else {
      window.alert(
        "Clouds Kingdom Swap contract not deployed to detected network."
      );
    }

    //load mUsdt
    const musdtAbi = Tether.abi;
    const musdtAddress = "0x8b74DdA20Dd6107823693C1b437f6849a42eB676";
    if (networkId == 1666700000) {
      const usdtToken = new web3.eth.Contract(musdtAbi, musdtAddress);
      this.setState({ usdtToken });
      let usdtBalance = await usdtToken.methods
        .balanceOf(this.state.account)
        .call();
      this.setState({ usdtBalance: usdtBalance.toString() });
    } else {
      window.alert("mUSDT contract not deployed to detected network.");
    }

    //load Cloudswap
    const cloudswapAbi = Cloudswap.abi;
    const cloudswapAddress = "0x92e7C15f8c98288A9a0A9fc5281AA837B17D6D82";
    if (networkId == 1666700000) {
      const cloudSwap = new web3.eth.Contract(cloudswapAbi, cloudswapAddress);
      this.setState({ cloudSwap });
    } else {
      window.alert(
        "Clouds Kingdom Swap contract not deployed to detected network."
      );
    }

    //load usdtSwap
    const usdtswapAbi = Usdtswap.abi;
    const usdtswapAddress = "0xfE5f3518CB4b80F0e424d1dDf860A37fa91b17d9";
    if (networkId == 1666700000) {
      const usdtSwap = new web3.eth.Contract(usdtswapAbi, usdtswapAddress);
      this.setState({ usdtSwap });
    } else {
      window.alert(
        "Clouds Kingdom Swap contract not deployed to detected network."
      );
    }

    //load Cloudfarm
    const cloudfarmAbi = Cloudfarm.abi;
    const cloudfarmAddress = "0x6838c76A8b7F3155D78C2bDf549b2e42ed28d4C2";
    if (networkId == 1666700000) {
      const cloudfarm = new web3.eth.Contract(cloudfarmAbi, cloudfarmAddress);
      this.setState({ cloudfarm });
      let stakingBalance = await cloudfarm.methods
        .stakingBalance(this.state.account)
        .call();
      this.setState({ stakingBalance: stakingBalance.toString() });
    } else {
      window.alert(
        "CloudsKingdomSwap contract not deployed to detected network."
      );
    }

    const methAbi = Eth.abi;
    const methAddress = "0x79eBF567B2207dAfd8DA44FAb897664F5ef1EF11";
    if (networkId == 1666700000) {
      const ethToken = new web3.eth.Contract(methAbi, methAddress);
      this.setState({ ethToken });
      let ethBalance = await ethToken.methods
        .balanceOf(this.state.account)
        .call();
      this.setState({ ethBalance: ethBalance.toString() });
    } else {
      window.alert("meth contract not deployed to detected network.");
    }

    //load ethswap
    const ethswapAbi = ethswap.abi;
    const ethswapAddress = "0x8d4afD2d5DA7115fBb9f4bD6720Fb13E0B95E3F6";
    if (networkId == 1666700000) {
      const ethswap = new web3.eth.Contract(ethswapAbi, ethswapAddress);
      this.setState({ ethswap });
    } else {
      window.alert(
        "Clouds Kingdom Swap contract not deployed to detected network."
      );
    }

    const mbnbAbi = Bnb.abi;
    const mbnbAddress = "0xdE8335956603378F934f7E2De27a9961E5f67642";
    if (networkId == 1666700000) {
      const bnbToken = new web3.eth.Contract(mbnbAbi, mbnbAddress);
      this.setState({ bnbToken });
      let nbnbBalance = await bnbToken.methods
        .balanceOf(this.state.account)
        .call();
      this.setState({ bnbBalance: nbnbBalance.toString() });
    } else {
      window.alert("mbnb contract not deployed to detected network.");
    }

    const bnbswapAbi = bnbSwap.abi;
    const bnbswapAddress = "0xB3c9ef8f9Ddf730DedbE1A1f7cbd75b90b3dD2Ec";
    if (networkId == 1666700000) {
      const bnbswap = new web3.eth.Contract(bnbswapAbi, bnbswapAddress);
      this.setState({ bnbswap });
    } else {
      window.alert(
        "Clouds Kingdom Swap contract not deployed to detected network."
      );
    }

    this.setState({ loading: false });
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Harmony browser detected. You should consider trying MetaMask!"
      );
    }
  }

  buyNimbus = (oneAmount) => {
    this.setState({ loading: true });
    this.state.cloudSwap.methods
      .buyNimbus()
      //value = Payable
      .send({ value: oneAmount, from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
      });
  };

  sellNimbus = (tokenAmount) => {
    this.setState({ loading: true });
    this.state.token.methods
      .approve("0x92e7C15f8c98288A9a0A9fc5281AA837B17D6D82", tokenAmount)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.state.cloudSwap.methods
          .sellNimbus(tokenAmount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });
      });
  };

  //staking function
  stakeTokens = (tokenAmount) => {
    this.setState({ loading: true });
    this.state.token.methods
      .approve("0x6838c76A8b7F3155D78C2bDf549b2e42ed28d4C2", tokenAmount)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.state.cloudfarm.methods
          .depositTokens(tokenAmount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });
      });
  };

  unstakeTokens = () => {
    this.setState({ loading: true });
    this.state.cloudfarm.methods
      .unstakeTokens()
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
      });
  };
  issueTokens = () => {
    this.setState({ loading: true });
    this.state.cloudfarm.methods
      .issueTokens()
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
      });
  };

  buyTether = (oneAmount) => {
    this.setState({ loading: true });
    this.state.usdtSwap.methods
      .buyTether()
      //value = Payable
      .send({ value: oneAmount, from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
      });
  };

  sellTether = (tokenAmount) => {
    this.setState({ loading: true });
    this.state.usdtToken.methods
      .approve("0xfE5f3518CB4b80F0e424d1dDf860A37fa91b17d9", tokenAmount)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.state.usdtSwap.methods
          .sellTether(tokenAmount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });
      });
  };

  buyEther = (oneAmount) => {
    this.setState({ loading: true });
    this.state.ethswap.methods
      .buyEther()
      //value = Payable
      .send({ value: oneAmount, from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
      });
  };

  sellEther = (tokenAmount) => {
    this.setState({ loading: true });
    this.state.ethToken.methods
      .approve("0x8d4afD2d5DA7115fBb9f4bD6720Fb13E0B95E3F6", tokenAmount)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.state.ethswap.methods
          .sellEther(tokenAmount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });
      });
  };

  buyTether = (oneAmount) => {
    this.setState({ loading: true });
    this.state.usdtSwap.methods
      .buyTether()
      //value = Payable
      .send({ value: oneAmount, from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
      });
  };

  sellTether = (tokenAmount) => {
    this.setState({ loading: true });
    this.state.usdtToken.methods
      .approve("0xfE5f3518CB4b80F0e424d1dDf860A37fa91b17d9", tokenAmount)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.state.usdtSwap.methods
          .sellTether(tokenAmount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });
      });
  };

  buyBinance = (oneAmount) => {
    this.setState({ loading: true });
    this.state.bnbswap.methods
      .buyBinance()
      //value = Payable
      .send({ value: oneAmount, from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
      });
  };

  sellBinance = (tokenAmount) => {
    this.setState({ loading: true });
    this.state.bnbToken.methods
      .approve("0xB3c9ef8f9Ddf730DedbE1A1f7cbd75b90b3dD2Ec", tokenAmount)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.state.bnbswap.methods
          .sellBinance(tokenAmount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      token: {},
      cloudSwap: {},
      oneBalance: "0",
      tokenBalance: "0",
      cloudfarm: {},
      stakingBalance: "0",
      loading: true,
      usdtBalance: 0,
      usdtToken: {},
      usdtSwap: {},
      ethToken: {},
      ethBalance: 0,
      ethswap: {},
      bnbToken: {},
      bnbBalance: 0,
      bnbswap: {},
    };
  }

  render() {
    let contents, content, contentFarm, contentNav, contentFoot, contentUsdt;
    if (this.state.loading) {
      contents = (
        <h2 id="loader" className="text-center text-dark">
          Loading
        </h2>
      );
    } else {
      content = (
        <Main
          oneBalance={this.state.oneBalance}
          tokenBalance={this.state.tokenBalance}
          buyNimbus={this.buyNimbus}
          sellNimbus={this.sellNimbus}
        />
      );
      contentFarm = (
        <Farm
          tokenBalance={this.state.tokenBalance}
          oneBalance={this.state.oneBalance}
          stakingBalance={this.state.stakingBalance}
          stakeTokens={this.stakeTokens}
          unstakeTokens={this.unstakeTokens}
          issueTokens={this.issueTokens}
          account={this.state.account}
          stakeOne={this.stakeOne}
          unstakeOne={this.unstakeOne}
          stakingBalanceOne={this.state.stakingBalanceOne}
        />
      );
      contentNav = <NavBar account={this.state.account} />;
      contentFoot = <FooTer />;
      contentUsdt = (
        <MainU
          oneBalance={this.state.oneBalance}
          usdtBalance={this.state.usdtBalance}
          buyTether={this.buyTether}
          sellTether={this.sellTether}
        />
      );
    }

    return (
      <div className="App">
        <BrowserRouter>
          {contentNav}
          <div className="">
            <Routes>
              <Route path="/swap" element={content} />
              <Route path="/earn" element={contentFarm} />
              <Route path="/" element={<Home />} />
              <Route path="/uswap" element={contentUsdt} />
              <Route path="/about" element={<About />} />
              <Route
                path="/bswap"
                element={
                  <MainBnb
                    oneBalance={this.state.oneBalance}
                    bnbBalance={this.state.bnbBalance}
                    buyBinance={this.buyBinance}
                    sellBinance={this.sellBinance}
                  />
                }
              />
              <Route
                path="/eswap"
                element={
                  <MainE
                    oneBalance={this.state.oneBalance}
                    ethBalance={this.state.ethBalance}
                    buyEther={this.buyEther}
                    sellEther={this.sellEther}
                  />
                }
              />
            </Routes>
          </div>
          {contentFoot}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
