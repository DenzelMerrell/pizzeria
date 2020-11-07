import React from 'react';

function Wings(props) {
    return (
        <section className="section_wings side">
            <div className="div_container">
                <h1>Wings</h1>
                <ul className="ul_sides">
                    <li>Lemon Pepper</li>
                    <li>BBQ</li>
                    <li>Mild</li>
                    <li>Spicy</li>
                    <li>Plain</li>
                </ul>
                <span onClick={props.toggle}>&lt;</span>
            </div>
        </section>
    )
}

export default Wings;