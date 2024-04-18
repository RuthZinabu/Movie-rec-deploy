import Header from "../components/Header"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from '../components/FavoritesContext';

export default function Favorites(){
    const { favourites,setFavourites, handleDelete } = useFavorites();
 
    return(
        <>
           
            <nav className="grid m-3 grid-cols-4">
                {
                    favourites.map((movie, index) => (
                        <div className="flex-col justify-center items-center text-center" key={index}>
                            <Link to={`/details/${movie.id}`} className="p-1" onClick={() => window.location.load(`/details/${movie.id}`)}>
                                <img className="w-[15rem] p-1" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            </Link>
                            <button onClick={()=>{handleDelete(index)}} className="bg-red-600 text-white rounded p-2">Delete</button>
                        </div>
                    ))
                } 
            </nav>
        </>
    )
}
