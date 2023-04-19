const arrPic = [
  'https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/jammanbo.png',
  'https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/ev.png?raw=true',
  'https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/mazayoung.png?raw=true',
  'https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/mobugi.png',
  'https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/nyaong.png',
  'https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png',
  'https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/weirdseed.png'
];

const center = document.querySelector('.list-item');

arrPic.forEach((item) => {
  const elLi = document.createElement('li');
  elLi.innerHTML = `<img src="${item}" alt="">`;
  center.appendChild(elLi);
})

const items = document.querySelectorAll('.list-item li');

const radius = items[0].offsetWidth * items.length / 3.14 / 2;
items.forEach((item, index) => {
  item.style.transform = `rotateY(${360 / items.length * index}deg) translateZ(${radius}px)`
})

const angle = 360 / items.length;
let curAngle = 0;

document.addEventListener('click', (event) => {
  if(window.innerWidth / 2 > event.clientX){  // screenX 는 화면에 따라서 작동이 다르게 되는 것을 알 수 있음
    curAngle += angle
  } else {
    curAngle -= angle
  }
  center.style.transform = `translate(-50%, -50%) rotateY(${curAngle}deg)`
})
