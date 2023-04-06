const cars = ["BMW", " Volvo", "Saab", "Ford", "Flat", "Audi"]
let text = ""
// 반복문 사용 X
text += '<section><h2>'+ cars[0] + '</h2></section>'
text += '<section><h2>'+ cars[1] + '</h2></section>'
text += '<section><h2>'+ cars[2] + '</h2></section>' 
text += '<section><h2>'+ cars[3] + '</h2></section>' 
text += '<section><h2>'+ cars[4] + '</h2></section>' 
text += '<section><h2>'+ cars[5] + '</h2></section>' 
document.body.innerHTML = text

const cars2 = ["BMW", " Volvo", "Saab", "Ford", "Flat", "Audi"]
let text2 = ""
for(let i = 0; i <= cars2.length; i++) {
  text2 += '<section><h2>'+ cars2[i] + '</h2></section>'
  document.body.innerHTML = text2
}
text2

for (let i = 0; i < 10; i++){
  console.log(i);
}
// console.log(i); for문의 i가 블록 레벨 스코프라 실행 X
// let 안쓰고 선언하면 전역 변수가 됨 => var가 키워드 생략하고 선언 가능해서 변수가 var로 자동 인식

// for(;;){} : 무한 반복
// 무한반복은 메모리를 많이 잡아먹기 때문에 시스템 전체에 영향을 미침
// 만약 사용하게 된다면?
// 1. 반복의 시간을 가능하면 정해야한다.
// 2. 탈출 조건을 명확히 해야한다.

// 무한 루프 활용
let answer = Math.floor(Math.random()*100)
// 프로그래밍 언어에서 random은 seed라는 값을 주면 동일한 랜덤값이 나오는 수학 수식
// (~~Math.random()*100)
let count = 0;

for (;;) {
  count += 1
  let userInput = parseInt(window.prompt('값을 입력해주세요!'))
  if (answer > userInput) {
      window.alert('UP!')
  } else if (answer < userInput) {
      window.alert('DOWN!')
  } else if (Number.isNaN(userInput)) {
      window.alert('다시 입력하세요!')
  } else {
      window.alert('Correct!')
      break
  }
}

console.log(`${count}번째 맞추셨습니다!`)