import React from 'react';
import Snav from '../components/Snav';
import artfolio from '../svg/artfolio.png';
import '../styles/Gallery.css';

const Gallery = () => {
    return(
        <div>
            <div className="header">
                <img id="art" src={artfolio} alt="artfolio"/>
                <h1>Gallery</h1>
            </div>
            <div className="main">
                <div className="ri">

                </div>
                <div className="le">
                </div>
            </div>
            <Snav/>
        </div>
    )
}

export default Gallery;