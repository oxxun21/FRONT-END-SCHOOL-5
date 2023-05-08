import { useState } from "react";
import Input from "./components/Input";
import Display from './components/Display';

function App() {
  const [job, setJob] = useState("");
  const [time, setTime] = useState("");

  const [click, setClick] = useState(false);

  const userJob = event => {
    setJob(event.target.value);
    console.log(event.target.value);
  };


  return (
    <div>
      <input className="login_id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={job}
            onChange={userJob} />
      <Input />
      {click ? <Display /> : ""}
    </div>
  );
}
export default App;
