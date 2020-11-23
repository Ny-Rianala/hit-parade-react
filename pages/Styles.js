import React from 'react'
import { Link } from 'react-router-dom'
import  Songs  from "../songs"


function Styles() {

    const songStyle = Songs.map(songstyle => (
		<div key={songstyle.id}>
			<Link to={`/styles/${songstyle.style}`}>🎧{songstyle.style}</Link>
            <hr/>
		</div>
	))

    return (
        <div className="styleList">
            <h1>{songStyle}</h1>   
        </div>
    )
}

export default Styles
