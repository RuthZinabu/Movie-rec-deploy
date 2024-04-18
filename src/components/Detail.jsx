import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useFavorites } from "./FavoritesContext";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

  

export const Detail = (props) => {
  const apiKey = import.meta.env.REACT_APP_MOVIEDB_API_KEY;
  const {vote_average,id, poster_path, title, overview,original_language
    , release_date, genres, video} = props.data;
  
  const {favourites, setFavourites, handleDelete, addToFavourites} = useFavorites([]);

  function renderTrailer() {
    let trailerLink = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`;
  
    fetch(trailerLink)
      .then(response => response.json())
      .then(data => {
        const trailer = data.videos.results.find(vid => vid.name === 'Official Trailer');
        if (trailer) {
          return (
            <Youtube id={trailer.key}/>
          );
        } else {
          console.log('Trailer not found');
        }
      })
      .catch(err => console.error('error:' + err));
  }
  


function genreArrayExtracter(){
    let array = new Array();
    if (genres) {
        for (let i=0; i< genres.length; i++){ array[i] = genres[i].id;}
    }
    return array;
}
function recommendationQureyCreator(array){
    let returnValue = 'https://api.themoviedb.org/3/discover/movie?api_key=042aa4748de2bd655dc1224d9e6c6baa&with_genres=';
    for(let i=0; i<array.length; i++){
        if(i>0) returnValue += ",";
        returnValue += array[i]
    }
    return returnValue;
}

function recommendations(url){
    const [recReturn, setRecReturn] = useState([]);
    fetch(url)
    .then(response => response.json())
    .then(json => setRecReturn(json))
    .catch(err => console.error('error:' + err));
    return recReturn;
}

const recommend = recommendations(recommendationQureyCreator(genreArrayExtracter()));

  return (
    <>
   <div className='containerd flex m-5  mt-20 lg:h-[500px] lg:bg-cover pt-2 sm:h-[900px]    ' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/w500${poster_path})` }} >
  <div className='imaged h-[300px] w-[300px] p-3 mt-10'>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}  className="rounded pl-5  "/>
      </div>
      <div className='imgInfod p-7 h-[400px] w-[800px] mt-10 text-white whitespace-normal overflow-hidden' >
        <h1 className="mb-10 text-3xl font-bold">{title}</h1>
       <p>{release_date} <span className="px-4">{original_language}</span> </p>  
        <p>{overview}</p>


        {genres && (
  <div className="md:flex md:flex-wrap gap-4   m-5">
    {genres.map((gen, index) => (
      <div className="p-2 rounded-2xl border-solid border-[0.01rem] text-[0.8rem] border-[black] h-10 overflow-hidden overflow-wrap-none " key={index}>
        {gen.name}
      </div>
    ))}
    <div className="p-2 rounded-2xl border-solid border-[0.01rem] text-[0.8rem] border-[black]  ">{vote_average} ⭐️</div>
  </div>
)}


 <div>
 <button className="ml-4 p-2 bg-red-600 rounded-2xl hover:bg-red-500 border-black focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 active:bg-red-700" onClick={() => { addToFavourites(props.data) }}>
  Add To Favorites 🤍
</button>
<button  
 onClick={()=> renderTrailer()} target="_blank" rel="noreferrer"
className="ml-4 p-2 pr-4 bg-red-600 rounded-2xl hover:bg-red-500 border-black focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 active:bg-red-700">
<PlayArrowIcon /> Watch
</button>
 </div>



      </div>
    </div>
    <div className="m-5 ml-20">
      <h2 className="mb-10  text-white mt-[70px] text-3xl font-bold pl-3 border-solid border-[0rem_0rem_0rem_1rem] border-[black] text-[2rem] " >Similar movies</h2>
    {
      (recommend.results) && (<nav className="grid m-3 grid-cols-4 ">{
        recommend.results.map((movie, index) => (
            (movie.id!=id)&&(
            <Link to={`/details/${movie.id}`} key={index} className="p-1" onClick={() => window.location.load(`/details/${movie.id}`)}>
              <img className="w-[15rem] p-1" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
            )
            ))
          } 
        </nav>
      )
    }
    </div>
    </>
  );
};