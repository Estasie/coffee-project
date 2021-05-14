import React from 'react';
import empty from '../../../content/imgs/menuImgs/empty_cup.svg';

function CoffeeDescription({positions,status, addPosPrice, coffeePosPrice}){
    const current = positions.find(el => el.id === status);
    let classes = 'coffee_img';
    
    function currencyDisplay(el) {
        return new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "RUB",
        }).format(el);
      }
      const priceSum = +addPosPrice + +coffeePosPrice;
    if(current){
        return(
        
            <div className="side_description_container">
           
            <img src={current.img} alt={current.name} className={classes}/>
            <p className="coffee_description">{current.descr}</p>
            <p className="coffee_price">{currencyDisplay(priceSum)}</p>
            </div>
        )
        
        
    }else{
        
        return(
            <div className="coffee_description_container">
        <img src={empty} alt="Пусто" className="coffee_img"/>
        <p className="coffee_description">Выберите позицию</p>
        </div>
        )
    }
    
}

export default CoffeeDescription;
