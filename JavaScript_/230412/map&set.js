// Map : 키-값 쌍을 가지는 객체 자료형
let m = new Map();

// Map에 값 널기
m.set('하나', 1)
m.set(1, '하나')
m.set(true, 1)
m.set(false, 0)

// Map 값에 접근하기
m.get('하나')

// 키의 값으로 다른 arr이나 obj를 사용 가능
// {[1, 2, 3]: 100, {'하나': 1}: 10} => error
// m.set([1, 2, 3], 'ㄹㅇ')
// m.get([1, 2, 3])

let x = [1, 2, 3, 4]
m.set(x, 'ㄹㅇ')
m.get(X)

m.has('하나') // Map의 값 확인

m.delete('하나')  // Map 값 제거

m.size  // Map 크기 확인

///////////////////

const data = new Map()
    .set('name', 'hojun')
    .set('age', 10)
    .set('height', 180)

//////////////////
let data = new Map([['one', 1], ['two',2]]) // O
let data = new Map(Object.entries({'one':1, 'two':2})) // O
let data = new Map({'one':1, 'two':2}) // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X

// 직접 순회가 가능하지 않은 Object!
let data = {'one':1, 'two':2}
for (const i of data) { // X 작동되지 않습니다!
    console.log(i)
}

let data = {'one':1, 'two':2}
for (const i of Object.entries(data)) {
    console.log(i)
}

// 직접 순회가 가능한 Map!
let m = new Map();

m.set('하나', 1) // 메서드 체이닝
  .set('둘', 2)
  .set('셋', 3)
  .set('넷', 4)

for (const i of m) {
  console.log(i)
}

for (const [key, value] of m) {
  console.log(key, value)
}

let test = {'one': 1, 'two': 2}
Object.keys(test)   // obj의 단점

// map은 메서드로 모두 호출 가능
m.keys()
m.values()
m.entries()

// Map -> Obj 형변환
let 맵 = new Map(Object.entries({ 'one': 1, 'two': 2 }))
let 오브젝트 = Object.fromEntries(맵)

// 키 값의 중복이 안됩니다.
let map = new Map(); 
map.set('이호준', 1)
map.set('이호준', 2)
map.set('이호준', 3)

// Map과 Object 차이점
objMap = new Map();
objMap.set('one', 1);
objMap.set('two', 2);
objMap.set('three', 3);

console.log(objMap.size); // 3

obj = {hi : 1, hi2 : 2, hi3 :3, hi4: 4};
console.log(obj.length); // undefined
console.log(obj.size); // undefined