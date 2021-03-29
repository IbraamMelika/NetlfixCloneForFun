import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetlfixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header ClassName="banner" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/orginal/${movie?.backdrop_path}")`,
            backgroundPostion: "center center",
        }}
    >
      <div ClassName="banner_contents">
        <h1>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
      </div>
    </header>
  );
}

export default Banner;
