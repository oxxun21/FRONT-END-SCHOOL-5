///////// 1-2
// import { useState } from 'react';

// function App() {
//   const [message, setMessage] = useState("여기를 주목하세요");  // setMessage가 message의 상태를 변경 가능하게 만들어줌

//   const handleOnMouseEnter = () => {
//     setMessage("안녕하세요!");
//   };

//   const handleOnMouseLeave = () => {
//     setMessage("안녕히가세요!");
//   };

//   return (
//     <div>
//       <p 
//         onMouseEnter={handleOnMouseEnter} 
//         onMouseLeave={handleOnMouseLeave}
//       >
//         여기에 마우스를 올려보세요!
//       </p>
//       <div>{message}</div>
//     </div>
//   );
// }

// export default App;


///////// 2-1
// import { useState } from "react";

// function App() {
//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     console.log("submit");
//   };

//   const handleLoginInput = (e) => {
//     console.log("id", e.target.value);
//   };

//   const handlePasswordInput = (e) => {
//     console.log("pw", e.target.value);
//   };

//   return (
//     <form onSubmit={handleLoginSubmit}>
//       <label>
//         아이디 : 
// 				<input type="text" onChange={handleLoginInput} />
//       </label>
//       <br/>
//       <label>
//         비밀번호 :
//         <input type="password" onChange={handlePasswordInput} />
//       </label>
//       <button type="submit">로그인</button>
//     </form>
//   );
// }

// export default App;

///////// 2-2
import { useState } from "react";

function App() {

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if(id === ''){
      alert('아이디를 입력하지 않았습니다.')
    }
    if(pw === ''){
      alert('패스워드를 입력하지 않았습니다.')
    }
    alert(`id : ${id}, pw : ${pw}`);
  };

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value)
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value)
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 : <input type="text" value={id} onChange={handleLoginInput} />
      </label>
      <br/>
      <label>
        비밀번호 :
        <input type="password" value={pw} onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

export default App;