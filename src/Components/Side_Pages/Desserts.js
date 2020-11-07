import React from 'react';

function Desserts(props) {
    return (
        <section className="section_desserts side">
            <div className="div_container">
                <h1>Desserts</h1>
                <ul className="ul_sides">
                    <li>Cookies</li>
                    <li>Brownies</li>
                </ul>
                <span onClick={props.toggle}>&lt;</span>
            </div>
        </section>
    )
}

export default Desserts;