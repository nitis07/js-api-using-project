const stp = document.querySelector('#stop');
const body = document.querySelector('body');

const colorChange = function () {
  let ranNum = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += ranNum[Math.floor(Math.random() * 16)];
  }
  return color;
};
let timerr;
document.querySelector('#start').addEventListener('click', startTimer);
function startTimer() {
  if (!timerr) {
    timerr = setInterval(strtColor, 1000);
  }
}
function strtColor() {
  body.style.backgroundColor = colorChange();
}
stp.addEventListener('click', stoptimer);
function stoptimer() {
  clearInterval(timerr);
  timerr = null;
}
