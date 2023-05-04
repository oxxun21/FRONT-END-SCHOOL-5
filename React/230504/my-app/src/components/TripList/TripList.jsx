import './TripList.css';

function TripList() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  let areas = list.map((item) => {
    return (
      <li className={item.visited === true ? "listItem active" : "listItem"} key={item.no}>{item.area}</li>  
    )
  });
  return <ul className='listArea'>{areas}</ul>
}

export default TripList;