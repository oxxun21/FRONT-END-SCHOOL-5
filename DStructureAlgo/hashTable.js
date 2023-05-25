const myHash = { two: 2, three: 3 };
myHash.one = 1; // insertion
myHash.one = 2; // access
myHash.two = 10;
myHash.three // search
delete myHash.three // deletion

class SuperHash {
  constructor(size) {
    this.data = new Array(size);
  }

  generateRandomHash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      // 나머지 연산은 일정한 숫자의 범위 안으로 값을 제한하는 특징이 있다. (0 ~ 9)
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key ,value) {
    // 값을 넣을 위치를 해쉬함수를 통해 설정
    const address =this.generateRandomHash(key);

    if(!this.data[address]){  // 기존 주소에 데이터가 없는 경우
      this.data[address] = []; 
      // this.data[address].push([key, value]);
    } else {  // 기존 주소에 이미 데이터가 있는 경우
      // 같은 키를 사용하는 데이터가 존재하는 경우 -> 덮어씌움
      for(let i = 0; i < this.data[address].length; i++){
        if (this.data[address][i][0] === key){
          this.data[address][i][1] = value;
          return value;
        }
      }

      // 같은 키를 사용하는 데이터가 없는 경우 -> list에 데이터 추가
      // this.data[address].push([key, value]);
      // return value;
    }
    this.data[address].push([key, value]);
    return value;
  }

  get(key) {
    const address = this.generateRandomHash(key);
    const targetElement = this.data[address];

    if(this.data[address]){
      // link list 확인
      for(let i = 0; i < targetElement.length; i++){
        // 찾는 key와 전달한 key가 일치하는지 확인
        if (this.data[address][i][0] === key){
          return this.data[address][i][1];
        }
      }
    }
    return undefined;
  }

  // 모든 키 값을 배열로 반환
  key() {
    const keyArray = [];
    for(let i = 0; i < this.data.length; i++){
      if (this.data[i]){
        // link list 가 존재한다면 
        if (this.data[i].length > 1){
          for(let j = 0; j < this.data[i].length; j++){
            keyArray.push(this.data[i][j][0])
          }
        } else {
          keyArray.push(this.data[i][0][0])
        }
      }
    }
    return keyArray
  }
}

const myHash = new SuperHash(10);

// 정리
// 해쉬테이블은 데이터를 검색하거나 추가할때 보통 빠른속도가 보장됩니다. 단, 조건은 데이터 공간이 넉넉하거나 link list를 탐색하는 알고리즘이 빠르다는 전제하에
// 단점은 데이터가 저장되는 순서가 보장되지 않으며 key 탐색의 경우 속도가 느립니다.
// 때문에 object를 순환하는데 사용되는 for in 문이 우리가 작성한 객체의 프로퍼티를 만들어진 순서대로 순환하지 못하는 이유이기도 합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in