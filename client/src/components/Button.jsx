import React from 'react';
import Styles from "./Button.module.scss";

const Button = ({ func, name,className, icon }) => {  //  => classname should be added 
    
    return (
      <button className={`${Styles.Button} ${Styles[className]}`} onClick={() => func(name)}>
        {name}
        {icon}
      </button>
    );
  };
  

export default Button;