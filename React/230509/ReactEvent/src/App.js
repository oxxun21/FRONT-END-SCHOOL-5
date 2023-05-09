import React, { useState } from 'react'
import Login from './components/Login/Login'
import Homepage from './components/Login/Homepage';
import Modal from './components/Modal/Modal';

export default function App() {
  const [login, setLogin] = useState(false);
  const [modal, setModal] = useState(true);

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
      {login ? <Homepage /> : <Login user={user} setLogin={setLogin} />}
      <button type="button" onClick={openModal}>열기</button>
      {modal && <Modal closeModal={closeModal}>
        <p>children을 쓰면 태그 넣을 수 잇슴</p>
      </Modal>}
    </>
  )
}
// && 연산자: 첫번째 falsy, 마지막 truthy 값을 반환