import React, { useState } from "react";
import cup from "../../content/imgs/menuImgs/cup.svg";
import CoffeeSide from "./Coffee/CoffeeSide.jsx";
import TeaSide from "./Tea/TeaSide.jsx";

import americano from "../../content/imgs/menuImgs/americano.svg";
import capuchino from "../../content/imgs/menuImgs/capuchinoArt.svg";
import roseLatte from "../../content/imgs/menuImgs/roseLatte.svg";
import mokko from "../../content/imgs/menuImgs/mokko.svg";
import glasse from "../../content/imgs/menuImgs/glasse.svg";
import greenTea from "../../content/imgs/menuImgs/green_tea.svg";

export default function CoffeAndTea() {
  const CoffeePositions = [
    {
      name: "Американо",
      img: americano,
      descr: "Эспрессо и немного горячей воды",
      price: 100,
      id: "a1",
    },
    {
      name: "Капучино",
      img: capuchino,
      descr: "Кофе с молоком и шапочки из взбитого молока",
      price: 130,
      id: "k1",
    },
    {
      name: "Латте",
      img: roseLatte,
      descr:
        "Кофе, в котором больше молока, чем в капучино и тоже шапочка из взбитого молока",
      price: 140,
      id: "l1",
    },
    {
      name: "Мокко",
      img: americano,
      descr: "Кофе с шоколадом, взитыми сливками и молоком",
      price: 180,
      id: "m1",
    },
    {
      name: "Гляссе",
      img: roseLatte,
      descr: "Кофе с шариком сливочного пломбира",
      price: 120,
      id: "g1",
    },
  ];
  const additionalPositions = [
    { name: "Сироп", img: "", descr: "", price: 20, key: "Syrop" },
    { name: "Топпинг", img: "", descr: "", price: 30, key: "Topping" },
    {
      name: "Взбитые сливки",
      img: "",
      descr: "",
      price: 25,
      key: "WhispedCream",
    },
    {
      name: "Кокосовая стружка",
      img: "",
      descr: "",
      price: 33,
      key: "Coconut",
    },
    { name: "Маршмеллоу", img: "", descr: "", price: 15, key: "Marshmello" },
  ];
  const TeaPositions = [
    {
      name: "Чай с фейхоа, шалфеем и жасмином",
      img: roseLatte,
      descr: "Джем из фейхоа, Жасмин, Свежий шалфей",
      price: 100,
      id: "t1",
    },
    {
      name: "Чай с мандарином, листьями лайма и душистым перцем",
      img: greenTea,
      descr: "Мандариновый фреш, Листья лайма,Душистый перец",
      price: 100,
      id: "t2",
    },
    {
      name: "Чай с клубникой и личи",
      img: capuchino,
      descr: "Клубника, Сок личи, Молочный улун",
      price: 130,
      id: "t3",
    },
    {
      name: "Глинтвейн белый персиковый",
      img: roseLatte,
      descr: "Почти классический глинтвейн",
      price: 120,
      id: "t4",
    },
    {
      name: "Чай чёрный с персиком и грушей",
      img: americano,
      descr: "Нежный черный чай, советуем взять к нему немного мёда",
      price: 140,
      id: "t5",
    },
  ];

  return (
    <div className="menuItem_wrapper">
      <div className="menuItem_container">
        <CoffeeSide
          coffeePos={CoffeePositions}
          additionalPos={additionalPositions}
          cup={cup}
        />
        <TeaSide teaPos={TeaPositions} />
      </div>
    </div>
  );
}
