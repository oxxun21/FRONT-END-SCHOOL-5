// import React, { useEffect, useState } from "react";

// function getName(){
// 	console.log("사실은 겁나 오래기다리는중...");
// 	return "개리";
// }

// function App() {
//   const [name, setName] = useState(getName());
//   const [num, setNum] = useState(0);
//   return(
//     <>
//       <div>안녕하세요 {name}! 현재 숫자는{num}입니다</div>
//       <button onClick={()=>setNum((prevNum)=>prevNum+1)}>{num}</button>
//     </>
//   )
// }

// export default App;

// 1. `useState()`에 인수로 `getName` 함수를 값으로 넘겨준다.
// 2. `useState(getName)`이 진행되면 최초 초기화 진행 과정에서 `getName`을 실행하게 된다.
// 3. 이후 업데이트(리렌더링 과정)에서 초기화가 진행되지 않기 때문에 `getName`을 실행하는 부분이 생략된다.
// 이와 같이 lazy initialize는 초기값 계산에 많은 비용(연산 시간, 메모리 등)이 소요될 때 비효율적인 부분을 최적화하는데 사용할 수 있다.

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import App from "./App";
function getName(){
	console.log("사실은 겁나 오래기다리는중...");
	return "개리";
}

function App() {
  const [name, setName] = useState(getName);
  const [num, setNum] = useState(0);
  return(
    <>
      <div>안녕하세요 {name}! 현재 숫자는{num}입니다</div>
      <button onClick={()=>setNum((prevNum)=>prevNum+1)}>{num}</button>
      {/* Click={()=>setNum((prevNum)=>prevNum+1)} : 함수형 업데이트는 이전 상태 값을 보장 */}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));