import React from 'react';

function Fries(props) {
    return (
        <section className="section_fries side">
            <div className="div_container">
                <h1>Fries</h1>
                <ul className="ul_sides">
                    <li>Regular</li>
                    <li>Curly Fries</li>
                    <li>Waffle Fries</li>
                    <li>Onion Rings</li>
                </ul>
                <span onClick={props.toggle}>&lt;</span>
            </div>
        </section>
    )
}

export default Fries;