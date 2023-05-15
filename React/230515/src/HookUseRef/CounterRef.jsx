import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

export default function CounterRef() {
  const [num, setNum] = useState(0);
  let num2 = useRef(0);

  return (
    <>
      <button onClick={() => setNum(num + 1)}>버튼</button>
      <div>{num}</div>
      <button onClick={() => {
        num2.current += 1;
        console.log(num2.current);
      }}>버튼2</button>
      <div>{num2.current}</div>
    </>
  )
}