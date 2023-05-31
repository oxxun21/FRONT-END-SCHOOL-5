// 회원가입을 위한 데이터를 가져와야함
// {
//     "user": {
//     "username": String *,
//     "email": String *,
//     "password": String *,
//     "accountname": String *,
//     "intro": String,
//     "image": String // 예시) https://api.mandarin.weniv.co.kr/1641906557953.png
//   }
// } 
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const userNameInput = document.querySelector("#userNameInput");
const userIdInput = document.querySelector("#userIdInput");
const userIntroInput = document.querySelector("#userIntroInput");
const imageUrl = document.querySelector("#imagePre").src;

const submitBtn = document.querySelector(".submit-btn");

function handleBtnSubmit() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const userName = userNameInput.value;
  const userId = userIdInput.value;
  const userIntro = userIntroInput.value;


  const data = {
    "user": {
      "username": userName,
      "email": email,
      "password": password,
      "accountname": userId,
      "intro": userIntro,
      "image": imageUrl
    }
  }

  fetch("https://api.mandarin.weniv.co.kr/user", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((res) => res.json()).then((json) => console.log(json));

  console.log(email, password, userName, userId, userIntro)
  console.log(data);
}

submitBtn.addEventListener('click', handleBtnSubmit);

// 프로필 사진 파일 업로드
const imageInput = document.querySelector("#profileImg");

async function handleImgInput(e) {
  const formData = new FormData();
  const imageFile = e.target.files[0];
  formData.append("image", imageFile);

  const res = await fetch("https://api.mandarin.weniv.co.kr/image/uploadfile", {
    method: "POST",
    body: formData
  })
  const json = await res.json();
  console.log(json);
  document.querySelector("#imagePre").src = "https://api.mandarin.weniv.co.kr/" + json.filename
}

imageInput.addEventListener('change', handleImgInput)