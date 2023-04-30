// Add your code here
function logSubmit(event) {
  console.log(`Form Submitted! Fullname: ${event.target[0].value}`);
  console.log(`Email: ${event.target[1].value}`);
  let registrationStatus = 'None';
  if (event.target[2].value === '1') {
    registrationStatus = 'Registered';
  } else if (event.target[2].value === '2') {
    registrationStatus = 'Not registered';
  } else if (event.target[2].value === '3') {
    registrationStatus = 'Waitlisted';
  }
  console.log(`Registration Status: ${registrationStatus}`);
  console.log(
    `Courses taken, Programming language: ${document.getElementById(
      "prog_language"
    ).checked}`
  );
  console.log(
    `Operating Systems: ${document.getElementById('os').checked}`
  );
  console.log(
    `Full stack web developement: ${document.getElementById('fullstack_webdev').checked}`
  );
  console.log(
    `Anything else: ${document.getElementById('anything_else').value}`
  );
  event.preventDefault();
  window.location.reload(true);
}

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);