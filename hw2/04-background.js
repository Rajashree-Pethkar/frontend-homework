// Add your code here
let nIntervId;

function randomHSLA() {
  return `hsla(${~~(360 * Math.random())}, 90%, 60%, 0.5)`;
}

const startStopBtn = document.getElementById('start-stop-color');

window.addEventListener('load', (event) => {
    nIntervId = setInterval(changeBackground, 3000);
});

function startChangeColor() {
    const inputNumber = document.getElementById('input-interval');
    clearInterval(nIntervId);
    nIntervId = null;
    nIntervId = setInterval(changeBackground, inputNumber.value * 1000);
    startStopBtn.classList.remove('btn-primary');
    startStopBtn.classList.add('btn-danger');
    return 'Stop';
}

function changeBackground(){
    document.body.style.background = randomHSLA();
}

function stopChangeColor() {
  clearInterval(nIntervId);
  nIntervId = null;
  startStopBtn.classList.add('btn-primary');
  startStopBtn.classList.remove('btn-danger');
  return 'Start';
}

function toggleStartStopButton(event){
    startStopBtn.textContent =
      startStopBtn.textContent === 'Stop'
        ? stopChangeColor()
        : startChangeColor();
}

startStopBtn.addEventListener('click', toggleStartStopButton);

// References
// https://stackoverflow.com/questions/43193341/how-to-generate-random-pastel-or-brighter-color-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
// https://developer.mozilla.org/en-US/docs/Web/API/setInterval