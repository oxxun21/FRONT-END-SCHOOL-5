let book = {
  책이름: "JS",
  책가격: 10000,
  저자: "홍길동",
  출판일: "2023.04.12"
}

let newBook = []

// form에서 입력 받음
newBook['책이름'] = "JS"
newBook['책가격'] = 10000
newBook['저자'] = "홍길동"
newBook['출판일'] = "2023.04.12"

function Book(책이름, 책가격, 저자, 출판일){
  this.책이름 = 책이름
  this.책가격 = 책가격
  this.저자 = 저자
  this.출판일 = 출판일
}

let newBook2 = Book("JS", 10000, "홍길동", "2023.04.12") // undefined => 함수에 return이 없어서

let newBook3 = new Book("JS", 10000, "홍길동", "2023.04.12") 

////////////////////

// new 키워드를 사용했을 때 일어나는 일
function Book(책이름, 책가격, 저자, 출판일){
  // this = {}
  this.책이름 = 책이름
  this.책가격 = 책가격
  this.저자 = 저자
  this.출판일 = 출판일
  // return this
}

////////////////////////
// this 예제
let newBook4 = new Book("JavaSCript", 100000, "홍길동", "2023.04.12")

// new 키워드를 사용했을 때 일어나는 일
function Book(책이름, 책가격, 저자, 출판일) {
    this.출력 = function (){
        console.log(this)
    }
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일    
    // return this
}