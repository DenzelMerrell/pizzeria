import React, { useState } from 'react';
import './App.css';

//Import components

// import Navigation from './Components/Navigation.js';
import Showcase from './Components/Showcase.js';
import Specials from './Components/Specials.js';
import Sides from './Components/Sides.js';
import Footer from './Components/Footer.js';

import Wings from './Components/Side_Pages/Wings.js';
import Fries from './Components/Side_Pages/Fries.js';
import Drinks from './Components/Side_Pages/Drinks.js';
import Desserts from './Components/Side_Pages/Desserts.js';

function App() {

  const [showWings, setShowWings] = useState(false);
  const [showFries, setShowFries] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);
  const [showDesserts, setShowDesserts] = useState(false);


  const toggleDisplaySide = (event) => {
    const sideToToggle = event.target.innerText;

    switch (sideToToggle) {
      case "Wings":
        setShowWings(true);
        break;
      case "Fries":
        setShowFries(true);
        break;
      case "Drinks":
        setShowDrinks(true);
        break;
      case "Desserts":
        setShowDesserts(true);
        break;
      default:
        setShowWings(false);
        setShowFries(false);
        setShowDrinks(false);
        setShowDesserts(false);
        break

    }

  }

  const displaySides = () => {
    if (showWings)
      return <Wings toggle={toggleDisplaySide} />
    else if (showFries)
      return <Fries toggle={toggleDisplaySide} />
    else if (showDrinks)
      return <Drinks toggle={toggleDisplaySide} />
    else if (showDesserts)
      return <Desserts toggle={toggleDisplaySide} />
    else
      return <Sides toggle={toggleDisplaySide} />
  }

  return (
    <>
      <Showcase />
      <Specials />
      <div className="div_container">
        <div className="div_divider"></div>
      </div>
      {displaySides()}
      <Footer />
    </>
  );
}

export default App;
