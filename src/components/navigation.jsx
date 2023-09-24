import { useState } from "react";
import FindBike from "./findBike";
import Account from "./accountinfo";


const Navigation = () => {
  const [component, setComponent] = useState(null);

  const setActiveCmponents = (component) => {
    setComponent(component);
  };

  return (
    <div className="navform">
      <div className="nav">
        <div className="nav2">
          <div className="nav-bar">
            <button className="nav-button" onClick={() => setActiveCmponents(<FindBike />)}>
              Find a bike
            </button>
            <button
              className="nav-button"
              onClick={() => setActiveCmponents(<Account />)}
            >
              Bike Bucks
            </button>
            <button
              className="nav-button"
              onClick={() => setActiveCmponents(<QuoteForm />)}
            >
               Account
            </button>
            
          </div>
        </div>
      </div>
      <div className="centered-component">{component}</div> 
    </div>
  );
};

export default Navigation;
