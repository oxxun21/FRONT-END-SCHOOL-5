import React, { createContext, useContext, useState } from 'react'

// function Button({ children, ...props }) {
//   // { children, ...props } = 입력받은거
//   return (
//     <button onClick={props.onClick} style={{ width: "50px", height: "50px" }}>
//       {children}
//     </button>
//   );
// }

function ShowNum() {
  const numContext = useContext(NumContext)

  return <div>{numContext.num}</div>
}

function Button(props) {
  // props {onClick:  실행시키면num증가}
  // props는 js 객체다!!!
  return (
    <button
      onClick={props.onClick}  // props 안에 onClick 안에 실행시키면num증가 함수가 들어있다
      style={{
        width: "50px",
        height: "50px"
      }}
    >
      <ShowNum />
      {props.children}
    </button>
  )
}

function ShowDubble() {
  const numContext = useContext(NumContext)

  return <div>{numContext.num * 2}</div>
}

function Counter(props) {
  const numContext = useContext(NumContext)
  //아래에 span 안의 여기 숫자 0 부분에서 0을 변수로 만들어주세요
  // 버튼에 클릭이 되었습니다 라고 로그가 찍히는 이벤트를 넣고싶습니다.

  // const [num, setNum] = useState(0);
  // 배열 첫번째는 상태(값), 두번째에는 상태를 바꿔주는 함수
  // 1. num을 0으로 초기화해서 변수를 만들어줌
  // 1.1 num은 바뀌면 화면도 같이 바뀌는 변수임
  // 2. 이때 num = 1 형식으로 바꿀 수 없음
  // 3. 그래서 num을 바꾸기 위해서 setNum이라는 함수를 사용
  // const 실행시키면num증가 = () => {
  //   props.setNum(numContext.num + 1);
  // };
  // const 실행시키면num감소 = () => {
  //   props.setNum(numContext.num - 1);
  // };
  // jsx안에서 값을 사용하고싶으면 {} 중괄호로 감싸라!

  return (
    <>
      <span>여기 숫자 {numContext.num}</span>
      <div>
        <span>이름:ㅇㅇㅇ</span>
      </div>
      <Button onClick={numContext.더하기}>+</Button>
      <Button onClick={numContext.빼기}>-</Button>
    </>
  );
}

const NumContext = createContext();

function NumContextProvider({ children }) {
  const [num, setNum] = useState(0);
  // 전달해줄수 없는 컴포넌트가 생겼을 때 공통 부모에서 관리하도록 하고 싶을 때 상태 끌어올리기 사용
  const 더하기 = () => {
    setNum(num + 1)
  }
  const 빼기 = () => {
    setNum(num - 1)
  }

  const data = { num: num, 더하기: 더하기, 빼기: 빼기 }

  return (
    <NumContext.Provider value={data}>
      {children}
    </NumContext.Provider>
  )
}

export default function App() {
  return (
    <NumContextProvider>
      <h1>숫자 카운터 만들기</h1>
      <Counter />
      <ShowDubble />
    </NumContextProvider>
  );
}