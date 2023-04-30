// Add your code here
const input = document.getElementById('input');

function handleKeyUp(event) {
  const inputText = event.target.value;

  const mainDiv = document.getElementById('text');
  const textVal = mainDiv.innerText;
  if (inputText.length > 0) {
    // Found the regex from internet and with the help from a friend, I do not have the url.
    const regexp = new RegExp(`\\b(${inputText})\\b`, 'ig');

    updatedText = textVal.replace(
      regexp,
      '<span class="bg-warning">$&</span>'
    );
    mainDiv.innerHTML = updatedText;
  } else {
    mainDiv.innerHTML = textVal;
  }
}

input.addEventListener('keyup', handleKeyUp);


// References
// https://stackoverflow.com/questions/52743841/find-and-highlight-word-in-text-using-js
// https://stackoverflow.com/questions/32130130/how-to-highlight-all-occurrences-of-a-word-on-a-page-with-javascript-or-jquery

