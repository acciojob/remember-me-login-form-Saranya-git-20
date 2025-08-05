document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");
  const form = document.getElementById("login-form");

  // Check if credentials exist in localStorage
  const savedUsername = localStorage.getItem("savedUsername");
  const savedPassword = localStorage.getItem("savedPassword");
  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  }

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    alert(`Logged in as ${username}`);

    if (rememberCheckbox.checked) {
      // Save credentials
      localStorage.setItem("savedUsername", username);
      localStorage.setItem("savedPassword", password);
      existingBtn.style.display = "inline-block";
    } else {
      // Remove credentials
      localStorage.removeItem("savedUsername");
      localStorage.removeItem("savedPassword");
      existingBtn.style.display = "none";
    }

    // Optionally reset form
    form.reset();
  });

  // Handle login as existing user
  existingBtn.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("savedUsername");
    if (savedUsername) {
      alert(`Logged in as ${savedUsername}`);
    }
  });
});
