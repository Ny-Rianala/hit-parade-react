import React from 'react';
import { useParams } from "react-router-dom";
import Songs from "../songs";

const SongsDetails = () => {
    const { idParam } = useParams();
    const song = Songs.find(song => song.id === Number(idParam));
    // console.log(song);

    // Array.filter(song => song.style === idParam);
    
    let songDetails = Songs.filter( song => {
        return song.style === idParam;
    }).map(songdetail => {
        return songdetail.title;
    })

    

    SongsDetails.forEach(styles => {
        console.log(styles);
    });

    return (
        <div>
            {songDetails()}
          <h1>{song.title}</h1>
          <p>{song.singer}</p>
        </div>
    )
}

export default SongsDetails;
