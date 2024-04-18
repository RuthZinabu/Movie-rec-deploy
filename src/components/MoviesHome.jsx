import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Genre } from '../components/Genre';
import useGenre from "../hooks/useGenre";

export const MoviesHome = () => {
  const apiKey = import.meta.env.REACT_APP_API_KEY;
  // console.log(apiKey);
  const [moviesList, setMovieList] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b29d04ec0a55cae1d636f5a70f64bedf&with_genres=${genreforURL}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results))
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    getMovie();
  }, [genreforURL]);

  console.log(moviesList)
  return (
    <div className='mt-20'>
      <Genre
        type="movies"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
       
      />

      <div className='grid m-3 grid-cols-4  '>
        {moviesList && moviesList.length > 0 ? (
          moviesList.map((movie, index) => (
            <Link to={`/details/${movie.id}`} key={index}>
              <img className='p-5' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};


 

 