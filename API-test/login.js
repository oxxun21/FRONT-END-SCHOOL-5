async function login() {
  const email = document.querySelector("#email").value
  const password = document.querySelector("#pw").value

  const url = "https://api.mandarin.weniv.co.kr";
  const reqPath = "/user/login";
  //비밀번호 6개이상인지 체크하기
  if (password.length < 6) {
    alert("비밀번호 6개 이상어야함")
    return;
  }
  const loginData = {
    "user": {
      "email": email,
      "password": password
    }
  }
  const reqUrl = url + reqPath
  const res = await fetch(reqUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(loginData)
  });

  const json = await res.json()
  console.log(json, "JSON 입니다")
  const token = json.user["token"]
  //로컬스토리지 key:"token"에 token값 저장 
  localStorage.setItem("token", token);
}
const loginButton = document.querySelector("#login-btn");
loginButton.addEventListener("click", login)