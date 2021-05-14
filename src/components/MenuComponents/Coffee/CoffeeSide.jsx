import React, { useState } from "react";
import Checkbox from "./Checkbox.jsx";
import CoffeeDescription from "./CoffeeDescription.jsx";

import "./CoffeeSide.scss";
import "../../../App.css";

export default function CoffeeSide({ coffeePos, additionalPos }) {
  const [checkedItems, setCheckedItems] = useState({});
  const [activePosition, setActivePosition] = useState("");
  const [coffeePrice, setCoffeePrice] = useState(null);
  const [additionalPrice, setAdditionalPrice] = useState(null);

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleCoffePositionsPrices = (e) => {
    if (activePosition !== "") {
      e.target.checked
        ? setAdditionalPrice(additionalPrice + +e.target.value)
        : setAdditionalPrice(additionalPrice - +e.target.value);
    } else {
      setAdditionalPrice(0);
    }
  };

  const handlePositionChanges = (e) => {
    setActivePosition(e.target.id);
    setCoffeePrice(e.target.value);
  };

  return (
    <div className="SideContainer">
      <ul className="items_list">
        {coffeePos.map((el) => {
          let classes = "item_position";

          if (el.id === activePosition) {
            classes += " _currentPosition";
          }

          return (
            <>
              <li
                className={classes}
                id={el.id}
                key={el.name}
                onClick={handlePositionChanges}
                value={el.price}
              >
                {el.name}
              </li>
            </>
          );
        })}
      </ul>
      <CoffeeDescription
        positions={coffeePos}
        status={activePosition}
        coffeePosPrice={coffeePrice}
        addPosPrice={additionalPrice}
      />

      <div className="additional_positions">
        {additionalPos.map((item) => (
          <div className="checkbox">
            <label key={item.key} className="custom-checkbox">
              <Checkbox
                name={item.name}
                checked={checkedItems[item.name]}
                value={item.price}
                onChange={handleChange}
                onClick={handleCoffePositionsPrices}
                className="checkbox__input"
              />
              <span>{item.name}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}