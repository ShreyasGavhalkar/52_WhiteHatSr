import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import WalletConnect from "./components/WalletConnects/WalletConnect";

function App() {

  return (
    <div className="wrapper">
      <h1>Khadakwasla Elections</h1>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<WalletConnect />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
