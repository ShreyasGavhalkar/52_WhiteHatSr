import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider
    appId="UjJNxIa780KOL70G6d1p3YfyjMOMiYkJS1F28kCi"
    serverUrl="https://riavjcmcqxi8.usemoralis.com:2053/server"
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MoralisProvider>
);
