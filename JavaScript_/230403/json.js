let 회원정보 = [
  {
    "_id": "642a6220cf61f02ee45cdbdf",
    "index": 0,
    "age": 23,
    "eyeColor": "brown",
    "name": "Liza Mcdaniel",
    "gender": "female",
    "company": "FRANSCENE"
  },
  {
    "_id": "642a6220613e04201f43b894",
    "index": 1,
    "age": 28,
    "eyeColor": "green",
    "name": "Aida Craft",
    "gender": "female",
    "company": "MAGNAFONE"
  },
  {
    "_id": "642a622098122b7b28a18be4",
    "index": 2,
    "age": 27,
    "eyeColor": "green",
    "name": "Shelley Blair",
    "gender": "female",
    "company": "KLUGGER"
  },
  {
    "_id": "642a622006a6f36bb324be51",
    "index": 3,
    "age": 23,
    "eyeColor": "brown",
    "name": "Letitia Conway",
    "gender": "female",
    "company": "ISODRIVE"
  },
  {
    "_id": "642a62202f3fb4a7b988c327",
    "index": 4,
    "age": 39,
    "eyeColor": "brown",
    "name": "Leach Mcbride",
    "gender": "male",
    "company": "DADABASE"
  },
  {
    "_id": "642a6220e66d4ec6c804fa0e",
    "index": 5,
    "age": 38,
    "eyeColor": "brown",
    "name": "Lucille Kirkland",
    "gender": "female",
    "company": "EXPOSA"
  }
]

console.log(회원정보[0])
console.log(회원정보[0]['name'])
console.log(회원정보[1]['company'])
let 나이평균 = (회원정보[0]['age'] + 회원정보[1]['age'] + 회원정보[2]['age'] + 회원정보[3]['age'] + 회원정보[4]['age'] + 회원정보[5]['age']) / 6
console.log(나이평균)