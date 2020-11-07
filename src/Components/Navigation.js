import React from 'react';
import '../App.css';

import pizzeriaLogo from '../Img/pizzeriaLogo.png';

function Navigation() {
    return (
        <section className="section_nav">
            <div className="div_container">
                <ul>
                    <li><img className="img_logo" src={pizzeriaLogo} alt="Logo" /></li>
                    <li><a href="www.google.com">Menu</a></li>
                    <li><a href="www.google.com">Order</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Navigation;