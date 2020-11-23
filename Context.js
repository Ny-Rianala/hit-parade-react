import React, { useState, useEffect } from 'react';
const Context = React.createContext();
import Songs from "./songs";



const ContextProvider = ({ children }) => {
    const [songs, setSongs ] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      setSongs(Songs)
    }, []);

    // console.log(songs);

    //Unfill and fill the heart

  function toggleFavorite(id) {
    const newSongsArr = songs.map(song => {   
      if (song.id === id) {
        return {
          ...song,
          isFavorite : !song.isFavorite,
        }
      }
      return {...song};
    })
    setSongs(newSongsArr)
  }


  function addToCart (song) {
    setCartItems(prevItems => [...prevItems, song])
  }


  function removeFromCart(songId) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== songId))
}

    return (
        <Context.Provider value={{songs, toggleFavorite, addToCart, removeFromCart, cartItems}} >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
