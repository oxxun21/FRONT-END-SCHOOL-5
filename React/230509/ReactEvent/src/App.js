import React, { useState } from 'react'
import Login from './components/Login/Login'
import Homepage from './components/Login/Homepage';
import Modal from './components/Modal/Modal';

function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i)=><h1>안녕, {name} {i}호</h1>);

  return(
    <div>
      {numComponentsArray}
    </div>
  )
}

export default function App() {
  const [login, setLogin] = useState(false);
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  }

  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  return (
    <>
      <Hello />
      {login ? <Homepage /> : <Login user={user} setLogin={setLogin} />}
      <button type="button" onClick={openModal}>열기</button>
      {modal && <Modal closeModal={closeModal}>
        <p>children을 쓰면 태그 넣을 수 잇슴</p>
      </Modal>}
    </>
  )
}
// && 연산자: 첫번째 falsy, 마지막 truthy 값을 반환