document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Example: You could add form validation and submission logic here
    alert("Form submitted!");

    // Reset form after submission
    form.reset();
  });
});
