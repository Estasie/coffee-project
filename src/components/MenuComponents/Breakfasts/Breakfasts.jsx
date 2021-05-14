import React from "react";
import styles from "../MenuComponents.module.scss";
import syrniki from "../../../content/imgs/breakfast/syrniki.jpg";
import omlet from "../../../content/imgs/breakfast/omlet.jpg";
import engbreakfast from "../../../content/imgs/breakfast/engbreakfast.jpg";
import porige from "../../../content/imgs/breakfast/rismango.jpg";
import blyni from "../../../content/imgs/breakfast/blyni.jpg";
import eggs from "../../../content/imgs/breakfast/eggs.jpg";

export default function Breakfasts() {
  const breakfastPositions = [
    {
      name: "Сырники",
      img: syrniki,
      descr: "Со сметаной/сгущенным молоком/джемом",
      price: 390,
      id: "b1",
    },
    {
      name: "Омлет с лососем",
      img: omlet,
      descr: "Классический омлет с добавлением слабосоленого лосося",
      price: 490,
      id: "b2",
    },
    {
      name: "Английский завтрак",
      img: engbreakfast,
      descr:
        "Традиционный английский завтрак из яичницы с беконом, фасоли, баварских колбасок, грибов, тостов и помидоров",
      price: 420,
      id: "b3",
    },
    {
      name: "Каша рисовая",
      img: porige,
      descr: "С манго и грейпфрутом",
      price: 290,
      id: "b4",
    },
    {
      name: "Блины",
      img: blyni,
      descr: "Со сметаной/сгущенным молоком/джемом",
      price: 250,
      id: "b5",
    },
    {
      name: "Шакшука на сковороде",
      img: eggs,
      descr: "Яйца с томатами,луком и свежим красным перцем",
      price: 290,
      id: "b6",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {breakfastPositions.map((item) => {
          return (
            <div className={styles.itemContainer}>
              <div className={styles.imgContainer}>
                <img
                  src={item.img}
                  alt={item.id}
                  className={styles.imgStyles}
                />

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
