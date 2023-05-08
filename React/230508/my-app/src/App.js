// import './btnStyle.css';

// import { useState } from "react";

// function BtnList(props) {
//   return (
//     <>
//         <button className="btnStyle" value={`${props.feeling}`}>기분이: {props.feeling}</button>
//     </>
//   )
// }

// function App() {
//   const [feeling, setFeeling] = useState("골라줘요!");

//   const feelings = e => {
//     setFeeling(e.target.value)  // 자식에서 value 가져오는게 안됨(부모 -> 자식 통신 방향)
//   };

//   return (
//     <>
//       <h1>오늘의 기분을 선택해주세요</h1>
//       <BtnList onClick={feelings} feeling="정말 좋아요😀" />
//       <BtnList onClick={feelings} feeling="정말 미쳤어요🙄" />
//       <BtnList onClick={feelings} feeling="최고예요🥰" />

//       <div className='box'>
//         <h2>{feeling}</h2>
//       </div>
//     </>
//   )
// }

// export default App;

import { useState } from 'react';
import BtnList from "./components/feelingState/BtnList";
import Info from "./components/feelingState/Info";

function App(){
  const [currentMood, setCurrentMood] = useState("");

  return (
    <>
      <BtnList mood={currentMood} onItemClick={setCurrentMood} />
      <Info mood={currentMood} />
    </>
  )
}

export default App;