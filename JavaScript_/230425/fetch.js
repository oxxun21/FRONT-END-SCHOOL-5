let result = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
result
  .then((data) => data.json())
  .then((result) => {
    console.log(result);
    return result;
  })
  .catch((result) => {
    console.log(new Error(result));
  });

///////////////////////////////////////////

class UserStorage {

  // 유저가 등록되었는지 확인
  searchUser(userName, password) {
    fetch('users.json')
      .then((data) => {
        return data.json()
      }).then((response) => {
        const result = response.user.find((item) => {
          return item.userName === userName && item.password === password
        })

        if (result) {
          resolve(userName);
        } else {
          reject('user not found');
        }
      })
  }

  // 등록된 유저에 따른 인사말을 출력
  sayHi(user) {
    fetch('greetings.json')
      .then((data) => {
        return data.json()
      }).then((response) => {
        const result = response.greetings.find((item) => {
          return item.userName === user
        })

        if (result) {
          resolve(
            {
              name: result.userName,
              greetings: result.greetings
            }
          );
        } else {
          reject(new Error('no greetings'));
        }
      })
  }
}

const userStorage = new UserStorage();

const userName = prompt('이름을 입력하세요');
const password = prompt('비밀번호를 입력하세요');

userStorage.searchUser(userName, password)
  .then((result) => {
    return userStorage.sayHi(result);
  }).then((result) => {
    alert(`당신에게 인사합니다! ${result.name}님 ${result.greetings}`);
  }).catch((errorMsg) => {
    console.log(new Error(errorMsg));
  })