import React, { useContext } from 'react';
import { Context } from "../Context";


const SongsList = ({ song }) => {
	
    const {songs, toggleFavorite ,  removeFromCart} = useContext(Context);
    console.log(toggleFavorite);

    function heartIcon() {
        if (song.isFavorite){   
            return (
               <i onClick={() => toggleFavorite(song.id)} className="ri-heart-fill favorite"></i>
            )
        }else {
            return (
               <i onClick={() => toggleFavorite(song.id)} className="ri-heart-line favorite"></i>
            );
        }
	}
	
	// function cartIcon() {
	// 	const alreadyInCart = cartItems.some(cartItem => cartItem.id === song.id)

    //     if (alreadyInCart ){   
    //         return (
    //            <i onClick={() => removeFromCart(song.id)} className="ri-cart-fill cart"></i>
    //         )
    //     }else {
    //         return (
    //            <i onClick={() => addToCart(song)} className="ri-cart-line cart"></i>
    //         );
    //     }
    // }
 
  
return (
        <div>
            {heartIcon()}
			{/* {cartIcon()} */}
        </div>
    )
    }

export default SongsList;




// import React, { useContext } from 'react';
// import { Context }  from "../Context";
// import PopularSongs from '../pages/PopularSongs';

// function  SongsList() {
// 	const context = useContext(Context);
// 	const getAllSongs = context.Songs.map((songs, index) => {
// 		return	<PopularSongs key={songs.id} photo={songs} />
// 	}) 

// 	return (
// 		<main className="photos">
// 			{getAllSongs}
// 		</main>
// 	);
// }

// export default SongsList;

