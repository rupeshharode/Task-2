 
let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email");
  const contactNo = document.getElementById("contactNo");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^\d{10}$/;

  email.classList.remove("error");
  contactNo.classList.remove("error");

  if (!email.value.match(emailPattern)) {
    email.classList.add("error");
    alert("Please enter a valid email address.");
    return;
  }

  if (!contactNo.value.match(phonePattern)) {
    contactNo.classList.add("error");
    alert("Please enter a valid 10-digit contact number (digits only).");
    return;
  }

  alert("Form submitted successfully!");
  contactForm.reset();
});