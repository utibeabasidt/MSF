// JavaScript Validation
document
 .getElementById("signupForm")
 .addEventListener("submit", function (event) {
   event.preventDefault();

   const fullname = document.getElementById("fullname").value;
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   const confirmPassword =
     document.getElementById("confirmPassword").value;

   // Simple validation
   if (password !== confirmPassword) {
     alert("Passwords do not match!");
   } else if (
     fullname === "" ||
     email === "" ||
     password === "" ||
     confirmPassword === ""
   ) {
     alert("Please fill in all fields.");
   } else {
     alert("Sign up successful!");
     // Redirect or handle the signup logic
     window.location.href = "dashboard.html"; // Redirect bhomepage or to a dashboard
   }
 });