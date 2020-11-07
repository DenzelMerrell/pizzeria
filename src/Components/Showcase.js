import React, { useState, useEffect } from 'react';
import '../App.css';

import Navigation from './Navigation.js';

// Images
import showcase1 from '../Img/showcase1.jpg';
import showcase2 from '../Img/showcase2.jpg';
import showcase3 from '../Img/showcase3.jpg';
import showcase4 from '../Img/showcase4.jpg';
import showcase5 from '../Img/showcase5.jpg';

function Showcase() {

    //The images to be cycled through the showcase
    const images = [showcase1, showcase2, showcase3, showcase4, showcase5];

    //The number of images to be cycled through the showcase
    const NUM_OF_IMAGES = 5;

    //The images will be cycled at random
    const [randomNum, setRandomNum] = useState(0);

    useEffect(() => {
        //Begin cycling the images through the showcase only when the component mounts
        setInterval(() => {
            setRandomNum(Math.floor(Math.random() * 5));
        }, 3000)
    }, [])


    const style = {
        backgroundImage: 'url(' + images[randomNum] + ')'
    }


    return (
        <section className="section_showcase" style={style}>
            <div className="div_overlay">
                <Navigation />
            </div>

        </section>

    )

}

export default Showcase;