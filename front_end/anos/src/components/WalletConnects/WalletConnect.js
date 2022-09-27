import { ethers } from "ethers";
import React, {useState} from "react";
import { useMoralis } from "react-moralis";
import image1 from "../../Assets/image 1.jpg";
import image2 from "../../Assets/image 2.jpg";
import image3 from "../../Assets/image 3.jpg";
import image4 from "../../Assets/image 4.jpg";
function WalletConnect() {
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, Moralis } = useMoralis();

  const [voters, setVoters] = useState([
    {
      voterId: "mdq83U9gw5",
      wallet_address:  '',
      mnemonic:  '',
      private_key: '',
      mobile: "9970803617"
    },
    {
      voterId: "yI2yXSSOnW",
      wallet_address:  '',
      mnemonic:  '',
      private_key: '',
      mobile: "9970803617"
    },
    { 
      voterId: "QH4jQvGUxr",
      wallet_address:  '',
      mnemonic:  '',
      private_key: '',
      mobile: "9970803617"
    },
    {
      voterId: "jUWBBvPuBu",
      wallet_address:  '',
      mnemonic:  '',
      private_key: '',
      mobile: "9970803617"
    },
    {
      voterId: "cBeqrQrR3d",
      wallet_address:  '',
      mnemonic:  '',
      private_key: '',
      mobile: "9970803617"
    },
    {
      voterId: "JYLhuWv0Qb",
      wallet_address:  '',
      mnemonic:  '',
      private_key: '',
      mobile: "9970803617"
    },
    {
      voterId: "p9cdv6cGeE",
      wallet_address:  '',
      mnemonic:  '',
      private_key: '',
      mobile: "9970803617"
    },
    {
      voterId: "twZogC516T",
      wallet_address:  '',
      mnemonic:  '',
      private_key: '',
      mobile: "9970803617"
    },
    {
      voterId: "uoIVN4RM2H",
      wallet_address:  '',
      mnemonic:  '',
      private_key: '',
      mobile: "9970803617"
    },
    {
      voterId: "FgsfHCDs8P",
      wallet_address:  '',
      mnemonic:  '',
      private_key: '',
      mobile: "9970803617"
    }
]);

  async function send(e){
  const options = {type: "erc20",contractAddress: "0x5B3d976ACE976A23a458fDee67164684AB0861AD", amount: Moralis.Units.Token(1, 18), receiver: e.target.id}
  let result = await Moralis.transfer(options)
  }

  const createElection = () => {
    const tempvtrs = [...voters];

    for(let i = 0; i< tempvtrs.length;i++)
    {
      const wallet  = ethers.Wallet.createRandom();
      tempvtrs[i].wallet_address = wallet.address;
      tempvtrs[i].private_key = wallet.privateKey;
      tempvtrs[i].mnemonic = wallet.mnemonic.phrase;
    }
    setVoters(tempvtrs);
  }

  const login = async () => {
    if (!isAuthenticated) {

      await authenticate({signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user?.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const logOut = async () => {
    await logout();
    console.log("logged out");
  }

  return (
    <div className="App">
      <div className="crd-plt">
            <img src={image1} alt="Narendra Modi"/>   
        
        <button className="polt" id="0xE471380c0986a6D08Af785Dadf1EbD1153039014" onClick={send}>Vote</button>
      </div>
      <div className="crd-plt">
        <img src={image2} alt="Rahul Gandhi"/>
        <button className="polt" id="0x8325c3d900571ec9dF176d6bFBa1E04f0a1FE352" onClick={send}>Vote</button>
      </div>
      <div className="crd-plt">
        <img src={image3} alt = "Manmohan Singh" />
        <button className="polt" id="0x8325c3d900571ec9dF176d6bFBa1E04f0a1FE352" onClick={send}>Vote</button>
      </div>
      <div className="crd-plt">
        <img src={image4} alt = "Amit Shah" />
        <button className="polt" id="0x1095e99423d07e2E4f4A1de3b2331bAa40B20Cd4" onClick={send}>Vote</button>
      </div>
    </div>
  );
}

export default WalletConnect;
