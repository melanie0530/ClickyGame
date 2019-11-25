import React from 'react';
import "../styles/App.css";

function Section(props) {
    return (
        <div className="Section">
            {props.children}
        </div>
    );
}

export default Section;