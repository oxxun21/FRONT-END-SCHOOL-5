// function Robot(name) {
//     this.name = name;
// }

// Robot.prototype.sayYourName = function () {
//     console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
// }


class Robot {
  // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다. 
  // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
  constructor(name) {
    this.name = name;
  }

  // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}
const robot = new Robot('lee'); // 인스턴스 생성과정은 똑같음

robot.sayYourName();  // 삐리비리. 제 이름은 lee입니다. 주인님.

//////////////////
class Me {
  constructor() {
    this.name = '웨이드';
    this.address = '제주도 제주시 인다 1길';
    this.phoneNum = '010-9999-9999';
  }

  canWalk() {
    console.log('웨이드가 걷는다.');
  }

  teaching(myStudent) {
    myStudent.levelUp();
  }
}

const me = new Me();
me.address  // 제주도 제주시 인다 1길

// 클래스 상속
class BabyRobot extends Robot {   // extends(상속받을 클래스) 키워드를 사용하여 상속
  constructor(name) {
    super(name);
    this.ownName = '아이크';
  }

  sayBabyName() {
    // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
    this.sayYourName();
    console.log('Suceeding you, Father!');
  }
}