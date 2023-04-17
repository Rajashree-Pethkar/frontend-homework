const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);

const output = document.getElementById('output');
const newP = document.createElement('p');
output.appendChild(newP);

function handleInput(event) {
  newP.textContent = ' ';
  let inputNumber = parseInt(event.target.value, 10);
  if (!Number.isNaN(inputNumber)) {
    if (inputNumber >= 0) {
      const temp = inputNumber;
      let reversed = 0;

      while (inputNumber > 0) {
        reversed = reversed * 10 + (inputNumber % 10);
        inputNumber = parseInt(inputNumber / 10);
      }

      if (reversed === temp) {
        newP.style.color = "green";
        newP.textContent = "Yes. This is a palindrome";
      } else {
        newP.style.color = "red";
        newP.textContent = "No. Try again.";
      }
    } else {
      newP.style.color = "red";
      newP.textContent = "No. Try again.";
    }
  } else {
    newP.textContent = " ";
  }
}
