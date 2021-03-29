import React from 'react'
import './App.css';
//import Row  from './Row';
//1:27:48
import requests from "./requests"

import RowRetry from './RowRetry'

function App() {
  return (
    <div className="App">
      {/* Nav bar componant */}
      {/* Banner Componant */}
      <RowRetry title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetlfixOriginals} isLargeRow/>
      <RowRetry title="Trending Now" fetchURL={requests.fetchTrending}/>
      <RowRetry title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <RowRetry title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <RowRetry title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <RowRetry title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <RowRetry title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
