import React from 'react';
import './Info.css';

export default function Info(props) {
  return (
    <div className='container'>{props.mood ? `기분이 : ${props.mood}` : "아직 선택하지 않았어요"}</div>
  )
}
