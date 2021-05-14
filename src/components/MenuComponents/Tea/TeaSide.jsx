import React, { useState } from "react";
import TeaDescription from "./TeaDescription.jsx";
import './TeaSide.scss';

const TeaSide = ({ teaPos }) => {
  const [activePosition, setActivePosition] = useState("");
  const [teaPrice, setTeaPrice] = useState(null);
  const handlePositionChanges = (e) => {
    setActivePosition(e.target.id);
    setTeaPrice(e.target.value);
  };
  return (
    <div className="SideContainer">
      <ul className="items_list">
        {teaPos.map((el) => {
          let classes = "tea_position";

          if (el.id === activePosition) {
            classes += " _currentTeaPosition";
          }

          return (
            <li
              className={classes}
              id={el.id}
              key={el.name}
              onClick={handlePositionChanges}
              value={el.price}
            >
              {el.name}
            </li>
          );
        })}
      </ul>
      <TeaDescription
        positions={teaPos}
        status={activePosition}
        teaPrice={teaPrice}
      />
    </div>
  );
};

export default TeaSide;
