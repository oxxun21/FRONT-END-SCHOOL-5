import React, { useState } from 'react'
import styled from 'styled-components';

const Count = styled.h3`
  font-size: 40px;
  font-weight: bold;
`
const Btn = styled.button`
  border: none;
  background-color: #eee;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  margin: 5px;
  &:hover{  
    background-color : skyblue;
    color: #fff;
  }
`

export default function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prevCounter => prevCounter += 1)
  }

  const decrease = () => {
    setCount(prevCounter => prevCounter -= 1)
  }

  return (
    <div>
      <Count>Counter: {count}</Count>
      <Btn type='button' onClick={increase} >increase</Btn>
      <Btn type='button' onClick={decrease}>decrease</Btn>
    </div>
  )
}
