import React from 'react';
import '../App.css';

function PizzaCard(props) {
    return (
        <div className="div_pizzaCard">
            <img src={props.image} alt="Pizza" />
            <h1 className="cardContent">{props.title}</h1>
            <p className="cardContent">{props.description}</p>
            <p className="cardContent">{props.price}</p>
            <button className="button_order cardContent" >Order Now</button>
        </div>
    )
}

export default PizzaCard;