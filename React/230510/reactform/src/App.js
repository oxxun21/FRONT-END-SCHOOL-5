import { useState } from "react";
import EventForm from "./components/EventForm";
import ItemGenerator from "./components/ItemGenerator";

function App() {
  const [datas, setDatas] = useState([]);

  const addData = (data) => {
    setDatas([...datas, data]);
  }
  console.log(datas);

  return (
    <div>
      <EventForm addData={addData} />
      <ItemGenerator datas={datas} />
    </div>
  );
}
export default App;
