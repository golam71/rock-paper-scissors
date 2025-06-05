const form = document.getElementById("validationForm");
const username = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const charCounter = document.getElementById("charCounter");

// Update character counter for comment
comment.addEventListener("input", function () {
  const length = this.value.length;
  charCounter.textContent = `${length}/200`;
  charCounter.style.color = length > 200 ? "#f44336" : "#666";
});

function showMessage(msg, type) {
  message.className = type;
  message.textContent = msg;
  message.style.display = "block";

  if (type === "success") {
    setTimeout(() => {
      message.style.display = "none";
    }, 3000);
  }
}

function validateField(field, validationFn) {
  const result = validationFn(field.value);

  if (result.isValid) {
    field.classList.remove("invalid");
    field.classList.add("valid");
    field.setCustomValidity("");
  } else {
    field.classList.remove("valid");
    field.classList.add("invalid");
    field.setCustomValidity(result.message);
  }

  return result.isValid;
}

function validateName(value) {
  if (!value.trim()) {
    return { isValid: false, message: "Name is required" };
  }
  if (value.length < 2) {
    return { isValid: false, message: "Name must be at least 2 characters" };
  }
  if (value.length > 20) {
    return {
      isValid: false,
      message: "Name must be no more than 20 characters",
    };
  }
  return { isValid: true, message: "" };
}

function validateEmail(value) {
  if (!value.trim()) {
    return { isValid: false, message: "Email is required" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return { isValid: false, message: "Please enter a valid email address" };
  }
  return { isValid: true, message: "" };
}

function validateComment(value) {
  if (!value.trim()) {
    return { isValid: false, message: "Comment is required" };
  }
  if (value.length < 10) {
    return {
      isValid: false,
      message: "Comment must be at least 10 characters",
    };
  }
  if (value.length > 200) {
    return {
      isValid: false,
      message: "Comment must be no more than 200 characters",
    };
  }
  return { isValid: true, message: "" };
}

function validateForm() {
  const nameValid = validateField(username, validateName);
  const emailValid = validateField(email, validateEmail);
  const commentValid = validateField(comment, validateComment);

  const allValid = nameValid && emailValid && commentValid;
  submitBtn.disabled = !allValid;

  return allValid;
}

// Real-time validation on input and blur
username.addEventListener("input", () => validateField(username, validateName));
username.addEventListener("blur", () => validateField(username, validateName));

email.addEventListener("input", () => validateField(email, validateEmail));
email.addEventListener("blur", () => validateField(email, validateEmail));

comment.addEventListener("input", () =>
  validateField(comment, validateComment)
);
comment.addEventListener("blur", () => validateField(comment, validateComment));

// Form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    showMessage("Form submitted successfully!", "success");
    // Here you would typically send the data to a server
    console.log("Form data:", {
      name: username.value,
      email: email.value,
      comment: comment.value,
    });
  } else {
    showMessage("Please fix the errors above", "error");
  }
});

// Initial validation check
validateForm();
