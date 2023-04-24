// case.1
let me = { age: 30 }; // 참조카운트 : 1;
let you = me;         // 참조카운트 : 2;

me = null; // 참조카운트 : 1;
you = null; // 참조카운트 : 0; 가비지 컬렉션 대상이 됩니다.

// case.2
let x = {
  y: {
    z: 1
  }
}

// x가 참조하는 객체를 object1, y참조하고 있는 객체를 object2

let a = x;  // object1 참조카운트 : 2 (x, a);
x = 1;      // object1 참조카운트 : 1 (a);

let b = a.y; // object2 참조카운트 : 2 (a.y, b);
a = 2; // object1 참조카운트 : 0, object2 참조카운트 : 1 (b)

// b가 object2 를 참조하기 때문에 object1 객체는 제거되지 않습니다.
// object1 객체는 사용하진 않지만 불필요하게 남아있는거죠.
// 이러한 상황을 메모리 누수라고 합니다.

//  case.3 클로져 메모리 누수
function outer() {
  let privateVal = ['test'];

  function getPrivate() {
    return privateVal
  }

  return getPrivate;
}

const getPrivate = outer();
const secretVal = getPrivate();

console.log(secretVal);
secretVal = null;

////////////////////////////////////////////////////////////////////////
const aespa = ["카리나", "윈터", "지젤", "닝닝"];
// 결과 : ['카리나💖', '윈터💖', '지젤💖', '닝닝💖']

// aespa.forEach((item, index) => {
//   aespa[index] = item + '❤️';
// })
// => 원본 데이터를 직접 조작하는 것은 좋지 않다

const aespa2 = aespa.map((item) => {
  return item + '❤️';
})