import React from 'react';

function Drinks(props) {
    return (
        <section className="section_drinks side">
            <div className="div_container">
                <h1>Drinks</h1>
                <ul className="ul_sides">
                    <li>Coca-Cola</li>
                    <li>Sprite</li>
                    <li>Lemonade</li>
                    <li>Water</li>
                </ul>
                <span onClick={props.toggle}>&lt;</span>
            </div>
        </section>
    )
}

export default Drinks;