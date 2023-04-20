class Sausage {
  constructor(el1, el2) {
    this.inside1 = el1;
    this.inside2 = el2;
  }

  taste() {
    console.log(`${this.inside1}, ${this.inside2}맛 소시지닷!`);
  }
}

class FiresSauasge extends Sausage {  // 생성자가 없으면 안에 내용 상속 받음
  constructor(el1, el2, el3) {
    super(el1, el2);
    this.inside3 = el3;
  }
  taste() {
    console.log(`${this.inside1}, ${this.inside2}, ${this.inside3}맛과 불맛이 난다!`);
  }
}

let a = new Sausage('파', '소고기');
let b = new FiresSauasge('파', '소고기', '과자');
a.taste()
b.taste()


class Robot {
  #password

  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }

  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }

  getPassword() {
    return this.#password
  }

  setPassword(pw) {
    this.#password = pw;
  }
}


function PersonGenrator() {
  let age = 25;

  function InnerPersonType() { };

  InnerPersonType.prototype.getAge = function () {
    return age;
  }

  return InnerPersonType;
}

const Person = PersonGenrator();
const myPerson = new Person();

const PersonGenerator2 = (function () {
  let age = 25;

  function InnerPersonType() { };

  InnerPersonType.prototype.getAge = function () {
    return age;
  }

  return InnerPersonType;
})();

const myPerson2 = new PersonGenerator2();


class Robot {
  #password

  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }


  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }

  get password() {
    return this.#password
  }

  set password(pw) {
    this.#password = pw;
  }
}

const bot = new Robot('재현', 1234);