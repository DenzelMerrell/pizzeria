import React from 'react';
import '../App.css';

//Images
import wings from '../Img/wings.jpg';

function Sides(props) {
    return (
        <section className="section_sides side">
            <div className="div_container">
                <h1>Sides</h1>
                <ul className="ul_sides">
                    <li onClick={props.toggle}>Wings</li>
                    <li onClick={props.toggle}>Fries</li>
                    <li onClick={props.toggle}>Drinks</li>
                    <li onClick={props.toggle}>Desserts</li>
                </ul>
            </div>
        </section>
    )
}

export default Sides;