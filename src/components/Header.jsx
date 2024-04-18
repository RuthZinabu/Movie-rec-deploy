import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome, IoMenu, IoClose, IoHeart } from 'react-icons/io5';
import { useFavorites } from '../components/FavoritesContext';
import SearchBox from '../components/SearchBox';

const Header = () => {
  const { favourites, setFavorites, handleDelete } = useFavorites();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className='mt-0   left-0 top-0 bg-blue-900 bg-opacity-20 w-full p-3 flex flex-col md:flex-row justify-between items-center z-10'>
   
        
        <h1 className='font-extrabold text-xl text-white px-5'>TeamTen</h1>
      <div className='mt-4 md:mt-0 flex-1   pl-20 '>
        <SearchBox />
      </div>

      <div className='md:hidden'>
        {isNavOpen ? (
          <IoClose size={24} className='text-white' onClick={toggleNav} />
        ) : (
          <IoMenu size={24} className='text-white' onClick={toggleNav} />
        )}
      </div>

      <ul
        className={`${
          isNavOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row md:justify-between md:text-white md:items-center text-white`}
      >
        <li className='px-4 md:px-10 font-bold hover:text-gray-300  '>
          <NavLink to='/' onClick={closeNav}>
            Home
          </NavLink>
        </li>

        <li className='px-4 md:px-10 font-bold hover:text-gray-300'>
          <NavLink to='/Loginpage' onClick={closeNav}>
            Signin
          </NavLink>
        </li>

        <li className='px-4 md:px-10 font-bold hover:text-gray-300'>
          <NavLink to='/Signout' onClick={closeNav}>
            About Us
          </NavLink>
        </li>

        <li className='px-4 md:px-10 font-bold hover:text-gray-300'>
          <NavLink to='/Fav' onClick={closeNav}>
            <div className='flex'>
              <IoHeart size={25} />
              {favourites.length > 0 && (
                <span className='absolute top-4 right-9 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center'>
                  {favourites.length}
                </span>
              )}
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
