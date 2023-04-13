// this*** : 자신을 호출한 객체, 자신이 생성할 객체
// this는 객체를 가리키는 자기 참조 변수

function a(){
  console.log(this);
}
a() // => window 호출

function b(){
  console.log('hello world')
}
b()
window.b()  // window 호출

let myObj = {
  val1: 100,
  func1: function () {
      console.log(this);
  }
}

myObj.func1();  // => myObj 호출

////////////////////
let myObj1 = {
  val1: 100,
  func1: function () {
      console.log(this);
  }
}

let test = myObj1.func1;
test()  // => window
// this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라서 this의 의미가 달라지기 때문

function sayName(){
  console.log(this);
}
var c = {
  'hello': 'world',
  'say': sayName()
}
var b = { // var b = {c} 로도 같은 동작 가능
  'c': c
}
var a = {
  'b': b
}
// 문제를 조금 더 꼬아보겠습니다.
function sayName(){
  console.log(this)
}

var c = {
  'hello': 'world',
  'say': sayName
}

var b = { 
  'c': c,
  'say': sayName
}

var a = { 
  'b': b,
  'say': sayName
}

////////////////////////
let name = 'lee'

function sayName(){
  console.log(this.name);   // this => window
}

sayName()

let peter = {
  name: 'Peter Parker',
  say: sayName
}

let bruce = {
  name: 'Bruce Wayne',
  say: sayName
}

peter.say() // Peter Parker
bruce.say() // Bruce Wayne

////////////////////////
function attackBeam(){
  this.hp -= 20
}

function attackKnife(){
  this.hp -= 5
}

let zombi = {
  name: 'busan zombi',
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 2
}

let thanos = {
  name: 'busan zombi',
  damaged: attackBeam,
  hp: 1000,
  power: 100
}

zombi.damaged1()  // Beam
zombi.damaged2()  // Knife
zombi.hp

////////////////////////
function attackBeam(){
  this.hp -= 20
}

function attackKnife(){
  this.hp -= 5
  // console.log(this); => 로 this 확인 가능
}

let zombi = {
  name: 'busan zombi',
  damaged: [attackBeam, attackKnife],
  hp: 10000,
  power: 2
}

let thanos = {
  name: 'busan zombi',
  damaged: attackBeam,
  hp: 1000,
  power: 100
}

zombi.damaged[0]()  // 배열로 만들었을때 this가 zombi가 아닌 배열로 잡힘 => 원하는 곳에 this를 묶어주기 위해 bind 사용
zombi.damaged[1]()
zombi.hp

//////////////////////////////
/* this 사용 예시 */

let 호텔 = [{
  '이름' : '하나호텔',
  '위치' : '제주도 제주시 001',
  '가격' : {'A':50000, 'B':30000, 'C':15000},
  '방의개수' : 50,
  '예약자수' : 25,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
},{
  '이름' : '둘호텔',
  '위치' : '제주도 제주시 002',
  '가격' : {'A':100000, 'B':60000, 'C':30000},
  '방의개수' : 100,
  '예약자수' : 30,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
},{
  '이름' : '셋호텔',
  '위치' : '제주도 제주시 003',
  '가격' : {'A':80000, 'B':50000, 'C':30000},
  '방의개수' : 120,
  '예약자수' : 80,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

////////////////////////////////
function a(){
  console.log(this);
  function b(){
    console.log(this);
    function c(){
      console.log(this);
    }
    c()
  }
  b()
}
a()
// a, b, c => 모두 window
// a.b.c() => 이런 식으로 호출한 객체를 타고 올라가는 형태가 아님