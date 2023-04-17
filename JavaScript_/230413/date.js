// Date()

let d = new Date()
d.getDate() // 일
d.getMonth()  // 월 (0부터 시작해서 +1 해야됨)
d.getDay()  // 0부터 시작 (일요일부터)

switch (d.getDay()) {
  case 0:
    console.log('일요일')
    break;
  case 1:
    console.log('월요일')
    break;
  case 2:
    console.log('화요일')
    break;
  case 3:
    console.log('수요일')
    break;
  case 4:
    console.log('목요일')
    break;
  case 5:
    console.log('금요일')
    break;
  case 6:
    console.log('토요일')
    break;
  default:
    console.log('날짜의 양식이 잘못되었습니다.')
    break;
}

d.getHours()
d.getMinutes()
d.getSeconds()

d.getFullYear()
// d.getYear() // 1900년도부터 연도 계산, 쓰지 않습니다. 잊어버리세요.

new Date(2023, 5, 30) // 0부터 시작하기 때문에 6월을 표시하기 위해서는 -1 해야됨
new Date(2023, 5, 30, 18)

/////////////////////////////////////
// 다음처럼 표현하면 가독성이 훨씬 좋다. 이렇게 쓰면 월에 + 1 안해도 됨
new Date('2023/1/20/10:00:00')

today = new Date() // today의 지정 로캘은 KST다.

//UTC와 today의 지정 로캘 KST와의 차이는 -9시간이다.
today.getTimezoneOffset() / 60

today.toString();     // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toTimeString(); // -> 12:30:00 GMT+0900 (대한민국 표준시)

today = new Date('2023/1/20/10:00:00')
today.toString();
today.toISOString();
today.toISOString().slice(0, 10);
today.toISOString().slice(0, 10).replace(/-/g, '')

//http://www.w3bai.com/ko/tags/ref_language_codes.html#gsc.tab=0
//http://www.w3bai.com/ko/tags/ref_country_codes.html#gsc.tab=0
today.toLocaleString('ko-KR'); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('en-US'); // -> 7/24/2020, 12:30:00 PM
today.toLocaleString('ja-JP'); // -> 2020/7/24 12:30:00


const dayNames = [
  '(일요일)',
  '(월요일)',
  '(화요일)',
  '(수요일)',
  '(목요일)',
  '(금요일)',
  '(토요일)'
];
// getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
const day = dayNames[today.getDay()];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const ampm = hour >= 12 ? 'PM' : 'AM';

/////////////// 17일 내용 추가
// 날짜의 차를 구하는 코드
// getTime은 1970 년 1 월 1 일 00:00:00 UTC와 주어진 날짜 사이의 경과 시간 (밀리 초)을 나타내는 숫자
function getDateDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const diffDate = date1.getTime() - date2.getTime();
  // 일 == 밀리세컨 * 초 * 분 * 시
  return Math.abs(diffDate / (1000 * 60 * 60 * 24));
}

getDateDiff("2023-02-27", "2023-06-30");
getDateDiff("2023-04-17", "2023-06-30");

// 두 날짜의 차를 계산합니다.
function daysBetween(date1, date2) {
  // 밀리초 단위로 두 날짜의 차이를 계산합니다.
  const diff = Math.abs(date1.getTime() - date2.getTime());
  // 1일은 24시간 * 60분 * 60초 * 1000밀리초입니다.
  const oneDay = 24 * 60 * 60 * 1000;
  // 차이를 1일 밀리초로 나눕니다.
  return Math.floor(diff / oneDay);
}

// 예시
const date1 = new Date("2021-01-01");
const date2 = new Date("2021-01-05");
console.log(daysBetween(date1, date2)); // 4