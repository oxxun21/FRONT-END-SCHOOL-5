import styled from 'styled-components'

const Btn = styled.button`
  margin: 10px;
  padding: 15px 30px;
  border: none;
  border-radius: 15px;
  background-color: aliceblue;
  color: #1e6b7b;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  transition: 0.25s;
  cursor: pointer;
  &:hover {
    background-color: #f199bc;
    color: #fff;
    font-weight: bold;
    transform: scale(1.2);
  }
`

const Btn2 = styled(Btn)`
  background-color: #77af9c;
  color: #d7fff1;
`

const Btn3 = styled(Btn)`
  background-color: #6aafe6;
  color: #d4dfe6;
`

export {Btn, Btn2, Btn3}