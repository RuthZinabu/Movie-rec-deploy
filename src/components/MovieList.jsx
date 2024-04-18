import React from "react";
import {Details} from '../pages/Details';

//for the searched movies
const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {props.movies.map((movie, index) => (
           
             <div className='image-container d-flex justify-content-start m-3' style={{ margin: "0.5rem" }} key={movie.imdbID}>
                 <img src={movie.Poster} alt="movie"  ></img>
               
                 <div className="overlay d-flex align-items-center justify-content-center">
                    <FavouriteComponent/>
                 </div> 
             </div>
            
            ))}
        </div>
    );
};

export default MovieList;