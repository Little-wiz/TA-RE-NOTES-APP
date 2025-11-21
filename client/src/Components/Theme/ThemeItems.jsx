import React from 'react';

const ThemeItems = ({ color, img,changeColor }) => {
  return (
    <img src={img} alt="Theme" className="theme_img" onClick={() => {changeColor(color)}}/>
  )
}

export default ThemeItems;