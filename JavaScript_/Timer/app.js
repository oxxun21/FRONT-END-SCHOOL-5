const $hour = document.querySelector('#hour');
const $minute = document.querySelector('#minute');
const $sec = document.querySelector('#sec');
const time = document.querySelectorAll('.time');

$hour.addEventListener('click', () => {
  let num = parseInt($hour.innerHTML);
  num === 12 ? $hour.innerHTML = "00" : $hour.innerHTML = num + 1
})

$minute.addEventListener('click', () => {
  let num = parseInt($minute.innerHTML);
  num === 50 ? $minute.innerHTML = "00" : $minute.innerHTML = num + 1
})

$sec.addEventListener('click', () => {
  let num = parseInt($sec.innerHTML);
  num === 50 ? $sec.innerHTML = "00" : $sec.innerHTML = num + 10
})

const $reset = document.querySelector('#reset');
$reset.addEventListener('click', () => {
  for (let i = 0; i <= time.length; i++) {
    time[i].textContent = "00";
  }
})

const $start = document.querySelector('#start');
function start(){
  // sec민 가능
  let timer = setInterval(() => {
    $sec.innerHTML = parseInt($sec.innerHTML) - 1
    let sec =  $sec.innerHTML;
    if (sec == 0) {
      clearInterval(timer);
      alert('Time Out');
      $sec.innerHTML = "00"
    }
  }, 1000)
}

$start.addEventListener('click', start);



