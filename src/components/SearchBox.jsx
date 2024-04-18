import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation on search

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (searchTerm) {
      const apiKey = '042aa4748de2bd655dc1224d9e6c6baa';  
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
      const response = await fetch(url);
      const json = await response.json();
      setSearchResults(json.results);
    }
  };

  // const handleMovieSelect = (movieId) => {
  //   navigate(`/details/${movieId}`); 
  // };

    return(
        <div>
              <form onSubmit={handleSubmit} className='search  flex justify-between px-5 py-2 bg-gray-100 rounded w-[70%]' >
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a movie..."
          className='w-[30rem]'
        />
        <button type="submit" className='pl-3'><CiSearch/></button>
      </form>
      {searchResults.length > 0 && (
        <ul className="relative -translate-x-2/4 z-[100] left-[14.5rem] top-2.5; h-[8rem] overflow-y-scroll  bg-gray-100 rounded w-[70%] m-[1rem]">
          {searchResults.map((movie) => (
            <li key={movie.id} className='pl-3'>
              <Link to={`/details/${movie.id}`} onClick={() => window.location.load(`/details/${movie.id}`)}>
                {
                    movie.title
                }
                {
                    " - "
                }
                {
                    movie.release_date
                }
              </Link>
            </li>
          ))}
        </ul>
      )}
          </div>
        
    )
}

export default SearchBox;