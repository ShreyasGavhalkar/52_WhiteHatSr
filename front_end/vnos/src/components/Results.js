import ABI from "../ERC20ABI.json";
import { useState,useEffect } from "react";
import { ethers } from "ethers";
import { VictoryPie } from "victory";
import styles from "./Results.module.css";
import  Chart  from "react-apexcharts";
const Results = () => {
  const [showRes, setShowingRes] = useState(false);
  const [votes, setVotes] = useState([
    0,0,0,0
  ]);

  const candidates = ["Amit Shah", "Smriti Irani","Rahul Gandhi","Narendra Modi"];
  const addresses = [
    "0xD0E188F13783c700433Bda81820FaBf8137b681E",
    "0x8325c3d900571ec9dF176d6bFBa1E04f0a1FE352",
    "0x1095e99423d07e2E4f4A1de3b2331bAa40B20Cd4",
    "0xE471380c0986a6D08Af785Dadf1EbD1153039014",
  ];

  const getBal = async (addr) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc20 = new ethers.Contract(
      "0x5B3d976ACE976A23a458fDee67164684AB0861AD",
      ABI,
      provider
    );
    const blnc = await erc20.balanceOf(addr);
    const dec = await erc20.decimals();

    return (await blnc.toString()) / Math.pow(10, dec);
  };

  const doAll = async () => {
    const tempvts = [...votes];
    for (let i = 0; i < addresses.length; i++) {
      const temp = await getBal(addresses[i]);
      tempvts[i] = parseInt(temp);
    }
    setVotes(tempvts);
    
  };

  useEffect(()=> {
    setShowingRes(true);
  },[votes])

  return (
    <div >
      <button style={{textAlign:"center"}} onClick={doAll}>Show Live Comparison</button>
      {showRes && <div className={styles.pieChart}>
      <Chart 
        type="pie"
        width={1349}
        height={550}

        series={ votes }                

        options={{
                title:{ text:"Voting Results"
                } , 
                noData:{text:"Empty Data"},                        
                labels:candidates                     
            }}
                />
      </div>}
    </div>
  );
};

export default Results;
