import React from "react";
import "../styles/App.css"

function Image(props) {
    return (
        <div className="card">
            <img id="cardImg" alt={props.image} src={props.image}
                onClick={() => props.selectTile(props.id)} ></img>
        </div>
    )
}

export default Image;