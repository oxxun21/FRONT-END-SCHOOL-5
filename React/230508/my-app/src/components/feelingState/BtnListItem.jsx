import React from 'react';
import './BtnListItem.css';

export default function BtnListItem(props) {
  const onItemClick = () => {
    props.onClickEvt(props.mood);
  }

  const getBGC = () => {
    if(props.isSelected){
      return 'skyblue';
    }
  }

  return (
    <li>
      <button className='btn-item' onClick={onItemClick} style={{backgroundColor: getBGC()}}>기분이: {props.mood}</button>
    </li>
  )
}
