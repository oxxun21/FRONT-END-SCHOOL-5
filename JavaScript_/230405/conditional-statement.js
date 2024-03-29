// 사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요. 

// 1. 나이가 18세 이상이면 "안녕하세요!"를
// 2. 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 
// 3. 10세 미만이면 “부럽다…” 를 출력합니다.

const age = parseInt(prompt("나이를 입력해주세요"));
if (age >= 18) {
  console.log('안녕하세요!');
} else if (age >= 10) {
  console.log('안녕! 반가워 꼬마친구!');
} else {
  console.log('부럽다...');
}

// 사용자로부터 입력받은 성적에 따라 성적을 출력하는 프로그램을 작성하세요. 

// 1. 성적이 90점 이상이면 "A", 
// 2. 80점 이상이면 "B", 
// 3. 70점 이상이면 
// 4. "C", 60점 이상이면 "D", 
// 5. 그 외에는 “강해져서 돌아와라”를 출력합니다.

const score = parseInt(prompt("성적을 입력해주세요"));
if (score > 100) {  // 예외 처리
  alert('값이 넘 크네요')
} else {
  if (score >= 90) {
    console.log('A');
  } else if (score >= 80) {
    console.log('B');
  } else if (score >= 70) {
    console.log('C');
  } else if (score >= 60) {
    console.log('D');
  } else {
    console.log('강해져서 돌아와라');
  }  
}

let grade = score > 100 ? alert('값이 넘 크네요') : score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : '강해져서 돌아와라';
console.log(grade);