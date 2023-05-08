import React, { useState } from "react";

function Resume({hello, name, hobby, food, color}) {
  const [txt, setTxt] = useState("Hello");
  // click 시 숫자 증가
  // const [like, setLike] = useState(0);
  // console.log(useState(0));

  // function clickLike() {
  //   // +1 은 기존의 like 값과 1을 더해 새로운 값을 반환하는것이고
  //   // ++ 변수의 값 자체를 직접적으로 변경하려는 시도입니다.
  //   setLike(like + 1);
  //   console.log(like);
  // }

  // click 시 글자 표시
  const [like, setLike] = useState("");
  function clickLike() {
    if(like === "") {
      setLike("Like")
    } else {
      setLike("");
    }
  }

  return (
    <div style={{border: "1px solid black"}}>
      <h1>{name} 자기소개서</h1>
      <h1>{hello}</h1>
      <h2>취미: {hobby}</h2>
      <h2>좋아하는 음식: {food}</h2>
      <h2>좋아하는 색: <span style={{color: "blue"}}>{color}</span></h2>
      <button onClick={clickLike}>like</button> <span>{like}</span>
      <input type="text" value={txt} />
    </div>
  )
}

export default Resume;