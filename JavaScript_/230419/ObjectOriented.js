const me = {
  name : '웨이드',
  address : '제주도 제주시 인다 1길',
  phoneNum : '010-9999-9999',
  canWalk : function(){
      console.log('웨이드가 걷는다.');
  },
  teaching : function(myStudent){
      myStudent.levelUp();
  }
}

const student = {
  level: 1,
  levelUp : function(){
      this.level++;
  }
}

me.teaching(student);

function NewFactory(name){
  this.name = name;
  this.sayYourName = function(){
      console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

let robot1 = new NewFactory('브랜든');
let robot2 = new NewFactory('토마스');
let robot3 = new NewFactory('브래드');
// NewFactory name에 각각 이름이 들어가서 저장

function FoodPicker(menu){
  this.name = menu;
  this.sayMenu = function(){
    console.log(`${this.name[Math.floor(Math.random() * this.name.length)]}`);
  }
}

let choose = new FoodPicker(['짜장면', '청국장', '김치찌개'])
choose.sayMenu()

// Prototype은 생성자 함수에 있고, __proto__는 인스턴스에 있는 것
// new 키워드 1. 생성자함수랑 같이 호출되면 this랑 인스턴스를 연결, 2. 생성자 함수의 prototype과 인스턴스의 __proto__를 연결

function Proto(){
  this.age = 20;
}
Proto.__proto__.name = 'lee';   // 원래는 3개의 인스턴스가 다 독립적이게 되는데 prototype으로 연결시키면 인스턴스의 name들이 다 같게 됨(공유)

const proto1 = new Proto();
const proto2 = new Proto();
const proto3 = new Proto();

function FoodPicker(menu){
  this.name = menu;
}
FoodPicker.prototype.sayMenu = function(){    // 함수에는 prototype, __proto__는 인스턴스에 쓰셈!!!!!!!
  console.log(`${this.name[Math.floor(Math.random() * this.name.length)]}`);
}

let choose1 = new FoodPicker(['짜장면', '청국장', '김치찌개'])
let choose2 = new FoodPicker(['짜장면', '청국장', '김치찌개'])
choose1.sayMenu()
choose2.sayMenu()   // 두개 비교하면 같다고 나옴

// 객체 상속 => 원래 있는 메서드들을 이용하여 상속과 비슷하게 만듬
function Parent() {
  this.name = 'lee';
}
Parent.prototype.rename = function (name) {
  this.name = name;
}
Parent.prototype.sayName = function () {
  console.log(this.name);
}

function Child() {
  Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
  console.log('now i can walk!!');
}