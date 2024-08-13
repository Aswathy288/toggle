import { useState } from 'react';
import React from 'react';
import "./BgColor.css";

const BgColor = ({ name, imageUrl, about, head1, list1, head2, list2, btn }) => {
  let [color,setColor]=useState(true);
  const ColorChanger=()=>{
    setColor(!color);
    // console.log(color)
  }
 
  return (
    <div  className={` bg-color-container ${
      color ? "TrueStae" : "FalseState"
    } `}>
      <button className='card-title'  onClick={ColorChanger}>{btn}</button>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} className="card-image" />
      <p>{about}</p>
      <h2>{head1}</h2>
      <ul className="card-list">
        {list1.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>{head2}</h2>
      <ul className="card-list">
        {list2.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BgColor;

