import React, { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const onClick = () => {
    setNum(num + 1);
  };
  
  useLayoutEffect(() => { 
    console.log("⏱마운트 될때 브라우저에 그려주기 전에 딱 한번실행!");
    return ()=>{
      console.log("⏱🧹언마운트될때 단 한번 실행됩니다!")
    }
  }, []); 

	useLayoutEffect(() => {
    console.log("⏱마운트/업데이트 될때마다 브라우저에 그려주기 전에 실행!");
    return ()=>{
      console.log("⏱🧹업데이트가 될때, 언마운트될때 실행됩니다!")
    }
  }); 

  useLayoutEffect(() => {
    console.log("⏱마운트 될때, num state변경으로 인해 업데이트 될때 브라우저에 그려주기 전에 실행!");
    return ()=>{
      console.log("⏱🧹업데이트가 될때, 언마운트될때 실행됩니다!")
    }
  }, [num]);

  //useLayoutEffect가 모두 끝난 후에야 브라우저에 그려주기 시작합니다.

  useEffect(() => {
    console.log("🎈마운트 될때 브라우저에 그려진 후 딱 한번실행!");
    return ()=>{
      console.log("🎈🧹언마운트될때 단 한번 실행됩니다!")
    }
  }, []); 

	useEffect(() => {
    console.log("🎈마운트/업데이트 될때마다 브라우저에 그려진 후 실행!");
    return ()=>{
      console.log("🎈🧹업데이트가 될때, 언마운트될때 실행됩니다!")
    }
  }); 

  useEffect(() => {
    console.log("🎈마운트 될 때, num state변경으로 인해 업데이트 될때 브라우저에 그려진 후 실행!");
    return ()=>{
      console.log("🎈🧹업데이트가 될때, 언마운트될때 실행됩니다!")
    }
  }, [num]);

  return (
      <button onClick={onClick}>{num}</button>
  );
}

export default App

// import React, { useEffect, useLayoutEffect, useState } from "react";

// function App() {

//   const [num, setNum] = useState(0)

//   const handleonClick = () => {
//     setNum(num + 1)
//   }

//   useLayoutEffect(()=>{
//     console.log('useLayoutEffect 1')
//     return () => {
//       console.log('useLayoutEffect return_1')
//     }
//   }, [])

//   useLayoutEffect(()=>{
//     console.log('useLayoutEffect 2')
//     return () => {
//       console.log('useLayoutEffect return_2')
//     }
//   })

//   useLayoutEffect(()=>{
//     console.log('useLayoutEffect 3')
//     return () => {
//       console.log('useLayoutEffect return_3')
//     }
//   }, [num])

//   useEffect(()=>{
//     console.log('useEffect 1')
//     return () => {
//       console.log('useEffect return_1')
//     }
//   }, [])

//   useEffect(()=>{
//     console.log('useEffect 2')
//     return () => {
//       console.log('useEffect return_2')
//     }
//   })

//   useEffect(()=>{
//     console.log('useEffect 3')
//     return () => {
//       console.log('useEffect return_3')
//     }
//   }, [num])

//   return (
//     <button onClick={handleonClick}>{num}</button>
//   );
// }

// const Wrap = ()=>{
//   const [isVisible,setIsVisible] = useState(true)
//   const handleClick = ()=> setIsVisible(!isVisible)
//   return (
//     <>
//       <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
//       <br></br>
//       {isVisible&& <App />}
//     </>
//   )
// }

// export default Wrap;