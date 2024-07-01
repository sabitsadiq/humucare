document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    // Prevent default form submission (replaces link behavior)
    event.preventDefault();

    // Get references to form elements
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    // Clear any previous error messages
    clearErrorMessages();

    // Validation logic
    var isValid = true;

    // Check if Email is empty or has invalid format
    if (!validateEmail(email.value)) {
      showError(email, "Please enter a valid email address");
      isValid = false;
    }

    // Check if Password is empty
    if (password.value === "") {
      showError(password, "Password cannot be empty");
      isValid = false;
    }

    // Simulate user authentication (replace with your actual logic)
    // This is a placeholder; you'll likely need to interact with a server for real authentication
    const validCredentials =
      email.value === "sample@gmail.com" && password.value === "password";

    // Redirect to course page if validation and authentication are successful
    if (isValid && validCredentials) {
      window.location.href = "takeCourse.html";
    }
  });

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showError(element, message) {
  // Add error class to the element
  element.classList.add("error");

  // Create a span element to display the error message
  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error-message");
  errorSpan.textContent = message;

  // Insert the error message after the element
  element.parentNode.insertBefore(errorSpan, element.nextSibling);
}

function clearErrorMessages() {
  // Remove error class from all input elements
  const errorInputs = document.querySelectorAll(".error");
  errorInputs.forEach((input) => input.classList.remove("error"));

  // Remove any existing error messages
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => message.remove());
}
