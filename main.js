// ================================================
//           form validation
// ===============================================

// Form Validation

document
  .getElementById("ideaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission by default\
  });

function validateForm() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const mobile = document.getElementById("mobile");
  let valid = true;
  let firstInvalidField = null; // To track the first invalid field

  // Reset previous errors
  clearErrors();

  // First Name validation (alphabetical and required)
  if (!/^[a-zA-Z]+$/.test(firstName.value)) {
    showError(firstName, "firstNameError");
    if (!firstInvalidField) firstInvalidField = firstName;
    valid = false;
  }

  // Last Name validation (alphabetical and required)
  if (!/^[a-zA-Z]+$/.test(lastName.value)) {
    showError(lastName, "lastNameError");
    if (!firstInvalidField) firstInvalidField = lastName;
    valid = false;
  }

  // Email validation (required and valid format)
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    showError(email, "emailError");
    if (!firstInvalidField) firstInvalidField = email;
    valid = false;
  }

  // Mobile number validation (numeric and required)
  if (!/^\d+$/.test(mobile.value)) {
    showError(mobile, "mobileError");
    if (!firstInvalidField) firstInvalidField = mobile;
    valid = false;
  }

  // If there is an invalid field, focus on it
  if (firstInvalidField) {
    firstInvalidField.focus();
  }

  return valid; // Return true if valid, false if not
}

function showError(element, errorId) {
  element.classList.add("error");
  document.getElementById(errorId).classList.add("active");
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(function (elem) {
    elem.classList.remove("error");
  });
  document.querySelectorAll(".error-msg").forEach(function (msg) {
    msg.classList.remove("active");
  });



  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  if (!firstName || !lastName || !email || !mobile) {
    return false; // Prevent form submission if validation fails
  }
  else {
    sendMail();
  }
}


// ===================================================
//           contact form data send To mail
// ===================================================

function sendMail() {
  // Get form values
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var subject = document.getElementById("subject").value;
  var projectdetails = document.getElementById("projectdetails").value;

  // Send email using EmailJS
  emailjs
    .send("service_yn2juv8", "template_72hytcd", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      subject: subject,
      projectdetails: projectdetails,
    })
    .then(
      function (response) {
        alert(
          "SUCCESS! Your form has been sent.",
          response.status,
          response.text
        );
      },
      function (error) {
        alert("FAILED... Please try again.", error);
      }
    );
}
