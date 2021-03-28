import React, { useState, useEffect }from 'react'
import axios from './axios';

function RowRetry({title, fetchURL}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            //console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie =>(
                    <img src={movie.poster_path} alt={movie.name}/>
                ))}
                
            </div>
            
        </div>
    )
}

export default RowRetry