import React from "react";
import styles from "../MenuComponents.module.scss";

import prosekko from "../../../content/imgs/otherDrinks/prosekko.jpg";
import asti from "../../../content/imgs/otherDrinks/asti.jpg";
import kampari from "../../../content/imgs/otherDrinks/kampari.jpg";
import bitte from "../../../content/imgs/otherDrinks/bitte.jpg";
import kluk from "../../../content/imgs/otherDrinks/kluk.jpg";
import malina from "../../../content/imgs/otherDrinks/malina.jpg";
import oblepiha from "../../../content/imgs/otherDrinks/oblepiha.jpg";
export default function OtherDrinks() {
  const otherPositions = [
    {
      name: "ИГРИСТОЕ ВИНО",
      descr: "Martini Prosecco D.O.C.",
      img: prosekko,
      price: 630,
      id: "o1",
    },
    {
      name: "ИГРИСТОЕ ВИНО",
      descr: "Martini Asti D.O.C.G",
      img: asti,
      price: 970,
      id: "o2",
    },
    {
      name: "АПЕРЕТИВ",
      descr: "Campari",
      img: kampari,
      price: 330,
      id: "o3",
    },
    {
      name: "АПЕРЕТИВ",
      descr: "Martini Riserva Bitte",
      img: bitte,
      price: 290,
      id: "o4",
    },
    {
      name: "ДОМАШНИЕ НАПИТКИ",
      descr: "Клюквенный",
      img: kluk,
      price: 140,
      id: "o5",
    },
    {
      name: "ДОМАШНИЕ НАПИТКИ",
      descr: "Малиновый",
      img: malina,
      price: 140,
      id: "o6",
    },
    {
      name: "ДОМАШНИЕ НАПИТКИ",
      descr: "Облепиховый",
      img: oblepiha,
      price: 140,
      id: "o7",
    },
  ];
  return (
      <div className={styles.wrapper}>
          <div className={styles.container}>
      {otherPositions.map((item) => {
        return (
          <div className={styles.itemContainer}>
            <div className={styles.imgContainer}>
              <img src={item.img} alt={item.id} className={styles.imgStyles} />

              <div className={styles.itemDescrWrapper}>
                <div className={styles.itemDescrContainer}>
                  <p className={styles.itemHeader}>{item.name}</p>
                  <p className={styles.itemDescription}>{item.descr}</p>
                  <p className={styles.itemPrice}>{item.price}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
      </div>
    
  );
}
