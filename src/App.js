import { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import AccountButton from './components/AccountButton';

import Posts from './components/posts/Posts';

function App(props) {

  const [web3, setWeb3] = useState()
  const [alephAccount, setAlephAccount] = useState()
  const [walletAddress, setWalletAddress] = useState()

  const connectWallet = async (e) => {
    const { alephAccount, web3 } = await props.connectWeb3(e)
    const walletAddress = await web3.eth.getAccounts()

    setWeb3(web3)
    setAlephAccount(alephAccount)
    setWalletAddress(walletAddress[0])
  }

  useEffect(() => {
    if (window.ethereum.isConnected()) {
      connectWallet()
    }
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <AccountButton connectWallet={connectWallet} walletAddress={walletAddress} />
      <div className="container">
        <div className="row">
          <div className="col-9 offset-3">
            <Posts/>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default App;
