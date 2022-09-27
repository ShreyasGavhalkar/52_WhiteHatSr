import ABI from "../ERC20ABI.json";
import { useState } from "react";
import { ethers } from "ethers";
import { VictoryPie } from "victory";
const Results = () => {
  const [votes, setVotes] = useState([
    {
      x: "Narendra Modi",
      y: "26",
    },
    {
      x: "Rahul Gandhi",
      y: "12",
    },
    {
      x: "Manmohan Singh",
      y: "11",
    },
    {
      x: "Amit Shah",
      y: "18",
    },
    
  ]);
  const addresses = [
    "0xE471380c0986a6D08Af785Dadf1EbD1153039014",
    "0x8325c3d900571ec9dF176d6bFBa1E04f0a1FE352",
    "0x1095e99423d07e2E4f4A1de3b2331bAa40B20Cd4",
    "0xD0E188F13783c700433Bda81820FaBf8137b681E",
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
    for (let i = 0; i < addresses.length; i++) {
      const temp = await getBal(addresses[i]);
      const tempvts = [...votes];
      tempvts[i].y = temp;
      setVotes(tempvts);
    }
  };

  return (
    <div onClick={doAll}>
      {console.log(votes)}
      Hello
      <VictoryPie
        data={votes}
        
      />
    </div>
  );
};

export default Results;
