function List({ list }) {
  return <li>{list.area}</li>
}

function App() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  return (
    <ul>
      {list.map((list, index) => (<List list={list} key={index} />))}
    </ul>
  )
}

export default App;