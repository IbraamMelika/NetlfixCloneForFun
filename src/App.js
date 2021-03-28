import React from 'react'
import './App.css';
//import Row  from './Row';

import requests from "./requests"

import RowRetry from './RowRetry'

function App() {
  return (
    <div className="App">
      <h1>Hey, Whats Up!</h1>
      <RowRetry title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetlfixOriginals}/>
      <RowRetry title="Trending Now" fetchURL={requests.fetchTrending}/>
    </div>
  );
}

export default App;
