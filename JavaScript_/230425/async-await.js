async function message() {
  let hello = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, 100)
  })

  let world = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('world');
    }, 100)
  })

  console.log(`${hello} ${world}`);
}

message();

///////////////////////////////////////////

class UserStorage {
  async searchUser(userName, password) {

    // await : 프로미스 객체가 반환될 때 까지 다음 코드의 동작을 중지하고, 프로미스 객체의 fulfilled 값을 반환
    // return await new Promise((resolve) => {
    const response = await fetch('users.json');
    const data = await response.json();

    // .then((data) => {
    //   if(data.ok){
    //     return data.json()
    //   } else {
    //     console.log(new Error('네트워크 응답에 문제 발생'));
    //   }
    // })
    // .then((response) => {
    const result = data.user.find((item) => {
      return item.userName === userName && item.password === password
    })

    if (result) {
      // await로 인해 userName이 반환
      // resolve(userName);
      return userName;
    } else {
      console.log(new Error('user not found'));
    }
    // })
    // })
  }

  async sayHi(user) {
    // return await new Promise((resolve) => {
    const response = await fetch('greetings.json');
    const data = await response.json();

    // .then((data) => {
    //   if (data.ok) {
    //     return data.json()
    //   } else {
    //     console.log(new Error('네트워크 응답에 문제 발생'));
    //   }
    // }).then((response) => {
    const result = data.greetings.find((item) => {
      return item.userName === user
    })

    if (result) {
      return {
          name: result.userName,
          greetings: result.greetings
        }
    } else {
      console.log(new Error('user not found'));
    }
    // })
    // })
  }
}

const userStorage = new UserStorage();

const userName = prompt('이름을 입력하세요');
const password = prompt('비밀번호를 입력하세요');

try {
  (async function () {
    const user = await userStorage.searchUser(userName, password);
    const result = await userStorage.sayHi(user);
    alert(`당신에게 인사합니다! ${result.name}님 ${result.greetings}`);
  })();
} catch (error) {
  console.log(new Error(error));
}

