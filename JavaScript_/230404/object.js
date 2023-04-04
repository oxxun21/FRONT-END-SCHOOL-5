// 키 : 값
const human = {
  name: "people",
  age: 53,
  from: "korea",
  askingHim: function(){
      console.log("hello world!");
  }
};

console.log(human.name)
console.log(human.age)
console.log(human['name'])
console.log(human['age'])
// human.0 error  => arr.1이 안되는 거랑 같음
human['0']
human[0]

// 유사 배열 객체는 실무에서 사용 잘 안함
const arr = {
  0: 10,
  1: 20,
  2: 30,
  length: 3
};
arr[0]
arr[1]
arr[2]
arr.length
// 배열과 동작이 같아도 배열이 아님 => 유사배열객체
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠름

const human1 = {
  name: "people",
  age: 53,
  from: "korea",
  askingHim: function () {
      console.log("hello world!");
  },
  0: '01099998888'
};

human1.name = 'jun'
human1.askingHim()
console.log(human1.name)
delete human1.job

console.log('age' in human1); // true
console.log(20 in [10, 20, 30, 40]);  // false (다른 언어에선 true)
// in 연산자는 키만 순회하기 때문 -> 0, 1, 2, 3, length 를 입력하면 true가 나옴

const aespa = {
  members: ['카리나', '윈터', '지젤', '닝닝'],
  from: '광야',
  sing: function(){
      return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
  }
};

console.log(aespa.hasOwnProperty('itzy'));  // false
console.log(aespa.hasOwnProperty('sing'));  // true

console.log(Object.keys(aespa));  // 키만 가져옴
console.log(Object.values(aespa));  // 값만 가져옴