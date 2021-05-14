import React from 'react';
import buns from '../../../content/imgs/desserts/buns.jpg';
import phistashio from '../../../content/imgs/desserts/phistashio.jpg';
import mangopie from '../../../content/imgs/desserts/mangopie.jpg';
import icecream from '../../../content/imgs/desserts/icecream.jpg';
import napoleon from '../../../content/imgs/desserts/napoleon.webp';
import smetannik from '../../../content/imgs/desserts/smetannik.webp';

import styles from "../MenuComponents.module.scss";

export default function Desserts(){
    const dessertsPositions = [
    
        {
          name: "Заварные булочки",
          img: buns,
          descr: "С шоколадным соусом и клубникой",
          price: 330, id: "d1"
        },
        {
          name: "Фисташковый рулет с малиной",
          img: phistashio,
          descr: "Хрустящий снаружи и мягкий внутри меренговый рулет с конфитюром из малины",
          price: 430, id: "d2"
        },
        {
          name: "Торт Манго-маракуйя",
          img: mangopie,
          descr: "Со стевией и клубникой",
          price: 350, id: "d3"
        },
        {
          name: "Мороженое",
          img: icecream,
          descr: "Лаймовый, вишневый, клубничный сорбет",
          price: 170, id: "d4"
        },
        {
          name: "Наполеон",
          img: napoleon,
          descr: "Классический наполеон по особому рецепту, который вы будете советовать всем своим знакомым :)",
          price: 370, id: "d5"
        },
        {
          name: "Сметанник",
          img: smetannik,
          descr: "Легкий и воздушный тортик, как раз для тех, кто не любит тяжелые десерты",
          price: 390, id: "d6"
        },
      
    ];
    return(
      <div className={styles.wrapper}>
      <div className={styles.container}>
        {dessertsPositions.map((item) => {
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
    )
}