import React from 'react';
import userInfo from "../userInfo.json";
import "../styles/App.css";
function Header(props) {
    return (
        <div>
            <header className="header">
                <div className="scoreHolder">
                    <h1 id='logo'>Clicky Game</h1>

                    <div id="userAlert" className={props.isColored ? "correctA" : "incorrectA"}>
                    </div>
                    <div id="scoreDiv">
                        <div className="score-display">
                            <p> High Score: {userInfo[0].highScore}</p>
                            <p>Current Score: {userInfo[0].score}</p>
                        </div>
                    </div>
                </div>
            </header>
            <div id="instruc">
                <p>Do not click on the same picture twice. </p>
            </div>
        </div>
    );
}

export default Header;
