import React from 'react'

export default function Input(props) {
  // input 데이터를 받고 저장해서 display로 넘겨야함
  return (
    <form>
      <span>나는 </span> 
      <input id="inputJob" type="text" placeholder='예) 프로그래밍' /> 
      <span> 전문가가 될 것 이다.</span>

      <span>그래서 앞으로 매일 하루에 </span>  
      <input id="inputTime" type="text" placeholder='예) 5시간' /> 
      <span> 씩 훈련할 것이다.</span>

      <button type='submit'>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
    </form>
  )
}
