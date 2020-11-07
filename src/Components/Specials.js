import React, { useState } from 'react';
import '../App.css';

import PizzaCard from './PizzaCard.js';

// Images
import pizzaImage from '../Img/showcase1.jpg';
import wingSpecial from '../Img/wing_special2.jpg';
import combo from '../Img/combo.jpg';

function Specials() {

    const pizzaCards = [
        <PizzaCard image={wingSpecial} title="Wing Special" description="Our Pizza Deal!" price="$100" key="1"></PizzaCard>,
        <PizzaCard image={combo} title="Combo" description="Our Pizza Deal!" price="$100" key="2"></PizzaCard>,
    ]


    return (
        <section className="section_specials">
            <div className="div_container">
                <h1>Specials</h1>
                <div className="div_pizzaCards">
                    {pizzaCards}
                </div>
            </div>
        </section>
    )
}

export default Specials;