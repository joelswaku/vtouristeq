//lert('hello');
/** 

const userName = document.getElementById('userName').value;
const Email = document.getElementById('email').value;
const password = document.getElementById('password').value;

//clear error
document.getElementById('usernameError').innerText = "";
document.getElementById('emailError').innerText = "";
document.getElementById('passwordError').innerText = "";
let emailPatter = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


let isValid = true;


document.getElementById('myForm').addEventListener('submit',function(event){
  event.preventDefault();
  let isValid = true;
  if (userName.trim() === "") {
   
    document.getElementById('usernamError').innerText = 'user name is required';
    isValid = false;
     }


    if (!Email.macth(emailPatter)) {
      document.getElementById('emailError').innerText = 'enter a valid email'
      
    }



})
*/



// form-validation.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      let isValid = true;

      // Get input values
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      // Clear previous error messages
      document.getElementById('usernameError').innerText = "";
      document.getElementById('emailError').innerText = "";
      document.getElementById('passwordError').innerText = "";

      // Validate Username
      if (username === "") {
          document.getElementById('usernameError').innerText = "Username is required.";
          isValid = false;
      }

      // Validate Email
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
          document.getElementById('emailError').innerText = "Enter a valid email address.";
          isValid = false;
      }

      // Validate Password
      if (password.length < 6) {
          document.getElementById('passwordError').innerText = "Password must be at least 6 characters.";
          isValid = false;
      }

      // If all fields are valid, redirect to the "My Account" page
      if (isValid) {
          window.location.href = 'http://127.0.0.1:5500/account.html'; // Redirect to My Account page
      }
  });
});
