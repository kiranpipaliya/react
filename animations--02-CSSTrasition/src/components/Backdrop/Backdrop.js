import React from 'react';

import './Backdrop.css';
const backdrop = (props) => {
    console.log("Modal", props.show);
    const cssClasse = ["Backdrop", props.show ? "BackdropOpen" : "BackdropClose"]
    return <div className={cssClasse.join(" ")}></div>
};

export default backdrop;