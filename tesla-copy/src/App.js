import React, { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Aside from './components/Aside'
import Section from './components/Section'
import Backdrop from './components/Backdrop';
import SectionLast from './components/SectionLast'

function App() {
  const [showAside, setShowAside] = useState(false);

  const openMenu = () => {
    setShowAside(true);
  };

  const closeMenu = () => {
    setShowAside(false);
  };
  
  

  return (
    <div className="App">
      <Header openMenu={openMenu} />
      <Backdrop showBackdrop={showAside} closeMenu={closeMenu} />
      <Aside showAside={showAside} closeMenu={closeMenu} />
      
      

      <Section
        backgroundImage="img/Model3.jpeg"
        title="Model 3"
        description={<a href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=95113&range=200">View Inventory</a>}
        btn1Text="Order Now"
        btn1Link="#"
        btn2Text="Demo Drive"
        btn2Link="#"
      />

      <Section
        backgroundImage="img/ModelY.jpeg"
        title="Model Y"
        description={<a href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=95113&range=200">View Inventory</a>}
        btn1Text="Order Now"
        btn1Link="#"
        btn2Text="Demo Drive"
        btn2Link="#"
      />

      <Section
        backgroundImage="img/ModelS.jpeg"
        title="Model S"
        description={<a href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=95113&range=200">View Inventory</a>}
        btn1Text="Order Now"
        btn1Link="#"
        btn2Text="Demo Drive"
        btn2Link="#"
      />

      <Section
        backgroundImage="img/ModelX.jpeg"
        title="Model X"
        description={<a href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=95113&range=200">View Inventory</a>}
        btn1Text="Order Now"
        btn1Link="#"
        btn2Text="Demo Drive"
        btn2Link="#"
      />

      <Section
        backgroundImage="img/SolarPanels.jpeg"
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        btn1Text="Order Now"
        btn1Link="#"
        btn2Text="Learn More"
        btn2Link="#"
      />

      <Section
        backgroundImage="img/SolarRoof.jpg"
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        btn1Text="Order Now"
        btn1Link="#"
        btn2Text="Learn More"
        btn2Link="#"
      />

      <SectionLast
        backgroundImage="img/Accessories.jpeg"
        title="Accessories"
        btnText="Shop Now"
      />

      
    </div>
  );
}

export default App;