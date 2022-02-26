import React from 'react';

import './Button.css';

export default function Button(props) {
  const clickedHandler = () => {
    props.onClick();
  };
  return (
    <button className='button' type={props.type} onClick={clickedHandler}>
      {props.text}
    </button>
  );
}
