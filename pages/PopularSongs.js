import React, { useContext } from 'react'
import { Context }  from "../Context";
import SongsList from "../components/SongsList";



const PopularSongs = ({ song }) => {
    const {songs} = useContext(Context);
    console.log(songs);
    //use use context here


    // const [] = useState(song.upvotes);
    // const [] = useState(song.downvotes);


    // function increment() {
    //     topic.upvotes++;
    //     song([...Songs]);
    //  }
 
    //  function decrement() {
    //      song.downvotes++;
    //      setSongs([...Songs])
    //  }



    
    const allPopularSongs = songs.map(Song => (
        <div key={Song.id} className="list">
             <SongsList song={Song}/>
            <ul className="firstList">
                <li>{Song.title}</li>
                <li>{Song.singer}</li>
            </ul>
            <div className="secondList">
                <button className="secondList__one" >{Song.upvotes}</button>
                <button className="secondList__two">{Song.downvotes}</button>
            </div>
        </div>
    ))

    return (
        <div>     
            {allPopularSongs}
        </div>
    )
}

export default PopularSongs
