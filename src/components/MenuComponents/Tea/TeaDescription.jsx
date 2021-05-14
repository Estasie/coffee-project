import React, {useState} from 'react';
import empty from '../../../content/imgs/menuImgs/empty_cup.svg';

const TeaDescription = ({positions, status, teaPrice}) => {
    const current = positions.find(el => el.id === status);
    function currencyDisplay(el) {
        return new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "RUB",
        }).format(el);
      }
    if(!current){
        return(
            <div className="side_description_container">
            <img src={empty} alt="Пусто" className="coffee_img"/>
            <p className="coffee_description">Выберите позицию</p>
            </div>
        )
    }else {
        return (
            <div className="side_description_container">
            <img src={current.img} alt={current.name} className="coffee_img"/>
            <p className="tea_descr">{current.descr}</p>
            <p className="tea_price">{currencyDisplay(current.price)}</p>
            </div>
        )
    }
    
}

export default TeaDescription;