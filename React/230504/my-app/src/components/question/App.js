function App(){
  const name = '라이캣';
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();

  const someStyle = {backgroundColor:"black", color:"white"}

  return (
    <div> 
      <div>
        <h1 style={someStyle}>안녕, {name} 1호</h1>
        <h1>안녕, 라이캣 2호!</h1>
        <div className="newClass"/>
      </div>
      <div style={someStyle}>
        <h1 style={{color: "red"}}>년: {year}</h1>
        <h1>월/일: {month}/{date}</h1>
        <h1>시간: {hour}시 {min}분 {sec}초</h1>
      </div>
    </div>
  )
}

export default App;