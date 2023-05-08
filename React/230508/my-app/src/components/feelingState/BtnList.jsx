import React from 'react';
import BtnListItem from './BtnListItem';
import './BtnList.css';

export default function BtnList(props) {
  const lists = ["좋아요", "정말 좋아요", "미쳤어요"];

  return (
    <ul className='container-list'>
      {lists.map((item, idx) => {
        // mood: 기분의 텍스트, isSelected: 현재 사용자의 기분이 맞는지 전달, props.onItemClick: 현재 기분을 변경하는 함수
        return <BtnListItem mood={item} key={idx} isSelected={props.mood === item} onClickEvt={props.onItemClick} />
      })}
    </ul>
  )
}
