import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

export default function NationList() {
  // API 데이터를 관리할 state
  const [nations, setNations] = useState([]);
  const [url, setUrl] = useState("")  // fetch url
  
  ///////////////////////////////
  // useEffect(() => {
  //   fetch("")
  //   .then(response => {
  //     // http 상태코드 200번대가 아닐 경우
  //     if(!response.ok){
  //       throw new Error("네트워크 응답 문제 발생");
  //     }
  //     return response.json()
  //   }).then(json => setNations(json)).catch((error) => {
  //     console.error('데이터를 가져오는데 문제가 있음 : ', error);
  //   })
  // }, [])
  // 서버 하나는 하나의 포트번호 밖에 사용할 수 없음
  // 현재 리액트 서버(3000번), json 서버(나는 안한, 3001번) 두개 구동됨

  ///////////////////////////////
  // 내 코드 => 틀렷서~
  // async function fetchData() {
  //   try {
  //     const respons = await fetch("");
  //     const result = await respons.json();
  //     setNations(result);
  //   } catch (error) {
  //     console.error('데이터를 가져오는데 문제가 있음 : ', error);
  //   }
  // }

  // 밖으로 fetchData 함수를 빼고 사용해도 됨
  // useEffect(() => {
  //   fetchData();
  // }, [])

  ///////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if(!response.ok){
          throw new Error("네트워크 응답 문제 발생");
        }
        const json = await response.json();
        setNations(json);
      } catch (error) {
        console.error('데이터를 가져오는데 문제가 있음 : ', error);
      }
    }
    fetchData();
  }, [url])

  // useMemo는 부하가 심한 함수들을 똑같은 결과가 나온다는 것이 보장된다면 부하가 없이 결과를 띄우는 것 (리렌더링 X)
  // useEffect는 렌더링을 한 이후에 렌더링의 상태를 조작하기 위함

  return (
    <Item>
      <h2>나라 목록</h2>
      <ul>
        {nations.map((nation) => {
          return (
            <li key={nation.id}>
              <h3>나라 이름 : {nation.title}</h3>
              <p>인구 수 : {nation.population}</p>
            </li>
          )
        })}
      </ul>
      <div>
        <button onClick={() => {setUrl("fetch주소?loc=europe")}}>유럽 목록</button> 
        {/* ?loc=europe : json 서버에서 제공하는 기능 (쿼리), 특정 값에 해당하는 데이터를 보내라 */}
        <button onClick={() => {setUrl("fetch주소")}}>전체 목록</button>
      </div>
    </Item>
  )
}

const Item = styled.div`
  margin: 60px auto;

  ul {
    padding: 10px;  
  }

  li {
    border: 1px solid black;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    list-style: none;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
  }
`