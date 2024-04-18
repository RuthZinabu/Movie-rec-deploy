import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {Detail} from  '../components/Detail'



export const Details = () => {
    const { index } = useParams();
    const movieindex = parseInt(index);


    const [movie, setMovie] = useState({});

    useEffect(() => {
    
    const url = `https://api.themoviedb.org/3/movie/${movieindex}?api_key=042aa4748de2bd655dc1224d9e6c6baa`;

    fetch(url)
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
    }, []); 

    //console.log(movie);
  return (
    <div>
      
        <Detail data={movie} />
    </div>
  )
}



















// import { Detail } from "../components/Detail"
// import React,  { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// export const Details = ({data}) => {
//   //  const {imdbID } = useParams();
//     //const ImdbID = parseInt(imdbID);

//     const [movies, setMovies] = useState([]);
//     // const [detdata, setdata] = useState('');
//     // getdata=da
//     const getMovieRequest = async (data1) => {
//       const url = `http://www.omdbapi.com/?i=${data1}&apikey=13c8922f`;
    
//       const response = await fetch(url);
//       const responseJson = await response.json();
    
//       if(responseJson.Search){
//       setMovies(responseJson.Search);
//     }
//     else {<p>Movie not found</p>}
//     };
    
//     useEffect(() => {
//       getMovieRequest(data);
//     }, [data]);
    
//   return (
    
//     <>
//             <Detail info={movies}/> 
//         </>
//   )
// }

 