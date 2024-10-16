var Form1 = document.getElementById("form1");
var Form2 = document.getElementById("form2");
var Form3 = document.getElementById("form3");
var progress = document.getElementById("progress");

const Next1 = document.getElementById("Next1");
const Back1 = document.getElementById("Back1");
const Next2 = document.getElementById("Next2");
const Back2 = document.getElementById("Back2");
const submit = document.getElementById("submit");
const confirmationOverlay = document.getElementById("confirmationOverlay");
const closeOverlay = document.getElementById("closeOverlay");

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password validation regex (min 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special char)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// URL validation regex
const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

// Phone number validation regex (simple version)
const phoneRegex = /^\d{10,15}$/;

Next1.onclick = function () {
  if (validateForm1()) {
    Form1.style.left = "-45rem";
    Form2.style.left = "3rem";
    progress.style.width = "24rem";
  }
};

Back1.onclick = function () {
  Form1.style.left = "3rem";
  Form2.style.left = "45rem";
  progress.style.width = "12rem";
};

Next2.onclick = function () {
  if (validateForm2()) {
    Form3.style.left = "3rem";
    Form2.style.left = "-45rem";
    progress.style.width = "36rem";
  }
};

Back2.onclick = function () {
  Form2.style.left = "3rem";
  Form3.style.left = "45rem";
  progress.style.width = "24rem";
};

submit.onclick = function (e) {
  if (!validateForm3()) {
    e.preventDefault(); // Prevent form submission
  } else {
    e.preventDefault(); // Prevent default form submission for demo
    confirmationOverlay.style.display = "flex"; // Show confirmation overlay
  }
};

closeOverlay.onclick = function () {
  confirmationOverlay.style.display = "none"; // Hide confirmation overlay
  // Reset form and navigation to initial state
  Form1.reset();
  Form2.reset();
  Form3.reset();
  Form1.style.left = "3rem";
  Form2.style.left = "45rem";
  Form3.style.left = "45rem";
  progress.style.width = "12rem";
};

// Form 1 validation
function validateForm1() {
  let email = Form1.querySelector("input[type='email']").value.trim();
  let password = Form1.querySelector("input[type='password']").value.trim();
  let confirmPassword = Form1.querySelectorAll("input[type='password']")[1].value.trim();

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!passwordRegex.test(password)) {
    alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  return true;
}

// Form 2 validation
function validateForm2() {
  let medium = Form2.querySelectorAll("input[type='text']")[0].value.trim();
  let linkedin = Form2.querySelectorAll("input[type='text']")[1].value.trim();
  let github = Form2.querySelectorAll("input[type='text']")[2].value.trim();

  if (!urlRegex.test(medium)) {
    alert("Please enter a valid Medium URL.");
    return false;
  }

  if (!urlRegex.test(linkedin)) {
    alert("Please enter a valid LinkedIn URL.");
    return false;
  }

  if (!urlRegex.test(github)) {
    alert("Please enter a valid GitHub URL.");
    return false;
  }

  return true;
}

// Form 3 validation
function validateForm3() {
  let firstName = Form3.querySelector("#firstName").value.trim(); // Select by ID for better accuracy
  let lastName = Form3.querySelector("#lastName").value.trim();   // Select by ID for better accuracy
  let mobileNumber = Form3.querySelector("#mobile").value.trim(); // Select by ID for better accuracy

  // Name regex: allows only English alphabetic characters and spaces
  const nameRegex = /^[A-Za-z]+$/;

  if (firstName.length < 2 || !nameRegex.test(firstName)) {
    alert("Please enter a valid first name (at least 2 characters long, alphabets only).");
    return false;
  }

  if (lastName.length < 2 || !nameRegex.test(lastName)) {
    alert("Please enter a valid last name (at least 2 characters long, alphabets only).");
    return false;
  }

  if (!phoneRegex.test(mobileNumber)) {
    alert("Please enter a valid mobile number (10-15 digits).");
    return false;
  }

  return true;
}

