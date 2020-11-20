import React from 'react';
import Songs from "../songs.json";



function AllSongs() {


    const allPopularSongs = Songs.map(Song => (
        <div key={Song.id} className="list">
            <p><i class="ri-heart-line"></i></p>
            <ul className="firstList">
                <li>{Song.title}</li>
                <li>{Song.singer}</li>
            </ul>
            <ul className="secondList">
                <li className="secondList__one">{Song.upvotes}<i class="ri-arrow-up-line"></i></li>
                <li className="secondList__two">{Song.downvotes}<i class="ri-arrow-down-line"></i></li>
                <li><i class="ri-shopping-cart-2-line cart"></i></li>
            </ul>
        </div>
    ))

    return (
        <div>
            {allPopularSongs}
        </div>
    )
}

export default AllSongs