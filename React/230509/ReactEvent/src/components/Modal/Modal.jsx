import React from 'react'
import './Modal.css'

export default function modal({children, closeModal}) {
  return (
    <div className='modal-backdrop'>
      <article className='modal'>
        <h2>아 졸리당</h2>
        {children}
        <button type='button' onClick={closeModal}>닫기</button>
      </article>
    </div>
  )
}
