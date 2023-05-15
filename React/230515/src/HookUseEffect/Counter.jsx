import { useEffect } from 'react'
import {useState} from 'react'

export default function Counter(){
  const [count, setCount] = useState(0)
  const [render, setRender] = useState(false)

  const handleCountUp = (e) => {
    setCount(count + 1)
  }
  //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
  useEffect(() => {
    // if( count !== 0){
    if(render){
      if(count % 2){
        alert("홀수입니다")
      }else{
        alert("짝수입니다")
      }
    }
    setRender(true)
    // return () => {    // 클린업 과정 : state가 변경되고 cleanup 실행 -> useEffect 내 코드실행
    //   alert("카운트가 바뀌었어요")
    // }
  }, [count])
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}