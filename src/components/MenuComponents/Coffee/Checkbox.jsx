import React from 'react';
const Checkbox = ({ type = "checkbox", name, checked=false, value, onChange, onClick}) => {
  
    return (
      
      <input type={type} name={name} checked={checked}  onClick = {onClick} value ={value} onChange={onChange} />
    );
  };


export default Checkbox;