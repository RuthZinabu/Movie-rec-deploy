import React, { createContext, useContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {

  const [favourites, setFavourites] = useState([]);



  const addToFavourites = (input) => {
    console.log(input);
    
      const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites')) || [];
      
      // Check if the input movie already exists in favourites
      const isDuplicate = movieFavourites.some(movie => movie.id === input.id);
      
      if (!isDuplicate) {
        const newFavouriteList = [...movieFavourites, input];
        setFavourites(newFavouriteList);
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(newFavouriteList));
      } else {
        // Handle duplicate movie here (optional)
        console.log('This movie is already in favourites!');
      }
    
    console.log(favourites);
  };




  useEffect(() => {
      // Load data from local storage on component mount
      const storedData = JSON.parse(localStorage.getItem('react-movie-app-favourites')) || [];
      setFavourites(storedData);
  }, []);
  
  const handleDelete = (index) => {
      // Remove the item at the specified index from local storage
      const updatedData = [...favourites];
      updatedData.splice(index, 1);
      localStorage.setItem('react-movie-app-favourites', JSON.stringify(updatedData));
      setFavourites(updatedData);
  };

  return (
    <FavoritesContext.Provider value={{ favourites, setFavourites, handleDelete, addToFavourites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
