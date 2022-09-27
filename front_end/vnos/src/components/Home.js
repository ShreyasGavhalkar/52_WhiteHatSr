import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import image1 from "../Assets/image 1.jpg";
import image2 from "../Assets/image 2.jpg";
import image3 from "../Assets/image 3.jpg";
import image4 from "../Assets/image 4.jpg";
import styles from "./Home.module.css";
import Results from "./Results";
const Home = (props) => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
    Moralis,
  } = useMoralis();
  const [connectedWallet, setConnectedWallet] = useState("");
  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user?.get("ethAddress"));
          if (user?.get("ethAddress" === undefined)) setConnectedWallet("");
          else setConnectedWallet(user?.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
    setConnectedWallet("");
  };

  async function send(e) {
    const options = {
      type: "erc20",
      contractAddress: "0x5B3d976ACE976A23a458fDee67164684AB0861AD",
      amount: Moralis.Units.Token(1, 18),
      receiver: e.target.id,
    };
    let result = await Moralis.transfer(options);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.prompt}>
        {connectedWallet === "" || connectedWallet === undefined
          ? "Please Connect your MetaMask Wallet Address linked with your Voter ID"
          : "You can now Vote !"}
      </div>
      <div>
        <button className={styles.mainButton} id="signOut" onClick={login}>
          {connectedWallet === "" || connectedWallet === undefined
            ? "Connect Metamask Wallet"
            : `Connected Wallet: ${user?.get("ethAddress")}`}
        </button>
      </div>
      <div>
        <button
          className={styles.mainButton}
          id="signOut"
          disabled={isAuthenticating}
          onClick={logOut}
        >
          Disconnect Wallet
        </button>
      </div>
      <div>
        <button
          className={styles.mainButton}
          id="signOut"
          onClick={props.signOut}
        >
          Sign Out
        </button>
      </div>
      <div>
      </div>
      <br></br>
      <div className={styles.crdPlt}>
        <img src={image1} alt="Narendra Modi" />
        <Link to="/results">
        <button
          className={styles.polt}
          id="0xE471380c0986a6D08Af785Dadf1EbD1153039014"
          onClick={send}
        >
          Vote
        </button></Link>
      </div>
      <div className={styles.crdPlt}>
        <img src={image2} alt="Rahul Gandhi" />
        <Link to="/results">
        <button
          className={styles.polt}
          id="0x8325c3d900571ec9dF176d6bFBa1E04f0a1FE352"
          onClick={send}
        >
          Vote
        </button>
      </Link></div>
      <div className={styles.crdPlt}>
        <img src={image3} alt="Smriti Irani" />
        <Link to="/results">
        <button
          className={styles.polt}
          id="0x1095e99423d07e2E4f4A1de3b2331bAa40B20Cd4"
          onClick={send}
        >
          Vote
        </button></Link>
      </div>
      <div className={styles.crdPlt}>
        <img src={image4} alt="Amit Shah" />
        <Link to="/results">
        <button
          className={styles.polt}
          id="0xD0E188F13783c700433Bda81820FaBf8137b681E"
          onClick={send}
        >
          Vote
        </button></Link>
      </div>
    </div>
  );
};

export default Home;
