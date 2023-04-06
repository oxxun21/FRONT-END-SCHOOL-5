// break -> 자기를 감싸고 있는 블록 탈출 (상위 반복문은 탈출 X)
for (let i = 2; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
    if (j === 3) {
      break
    }
  }
}

// continue -> continue 블록의 구문을 실행시키지 않고 다음 반복으로 넘어서 구문 실행
for (let i = 2; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    // console.log(`${i} X ${j} = ${i * j}`);
    if (j === 3) {
      continue
    }
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

// label : 특정한 곳으로 점프, 가독성을 해치기 때문에 지양
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      break outer;
    }
    console.log(i, j);
  }
}

jump: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      break jump;
    }
    console.log(i, j);
  }
}

for (let 반복 = 0; 반복 < 3; 반복++) {
  jump: for (let i = 2; i < 3; i++) {
    for (let j = 1; j < 3; j++) {
      if (j === 3) {
        break jump;
      }
      console.log(`${반복}. ${i} X ${j} = ${i * j}`)
    }
  }
}

for (let 반복 = 0; 반복 < 3; 반복++) {
  hojun: for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (j === 3) {
        break hojun;
      }
      console.log(`${반복}. ${i} X ${j} = ${i * j}`)
    }
  }
}

hojun: for (let 반복 = 0; 반복 < 3; 반복++) {
  for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (j === 3) {
        break hojun;
      }
      console.log(`${반복}. ${i} X ${j} = ${i * j}`)
    }
  }
}
