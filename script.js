// Button click
const magicBtn = document.getElementById("magicBtn");
magicBtn.addEventListener("click", () => {
  magicBtn.textContent = "You clicked me!";
  magicBtn.style.backgroundColor = "#ff6347"; // tomato color
});

// Hover effect
magicBtn.addEventListener("mouseover", () => {
  magicBtn.style.transform = "scale(1.1)";
});
magicBtn.addEventListener("mouseout", () => {
  magicBtn.style.transform = "scale(1)";
});

// Keypress detection
document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Bonus: double-click
magicBtn.addEventListener("dblclick", () => {
  alert("Double click detected! 🎉");
});

// Image Gallery
const images = [
  "https://via.placeholder.com/300?text=1",
  "https://via.placeholder.com/300?text=2",
  "https://via.placeholder.com/300?text=3"
];
let currentImage = 0;

document.getElementById("nextImage").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("galleryImage").src = images[currentImage];
});

// Tabs
const tabButtons = document.querySelectorAll(".tab");
const tabContent = document.getElementById("tabContent");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const tab = button.getAttribute("data-tab");
    tabContent.textContent = `This is the content for Tab ${tab}`;
  });
});

// Form validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let feedback = "";
  if (!username || !email || !password) {
    feedback = "All fields are required!";
  } else if (!email.includes("@")) {
    feedback = "Please enter a valid email!";
  } else if (password.length < 8) {
    feedback = "Password must be at least 8 characters!";
  } else {
    feedback = "Form submitted successfully! 🎉";
  }
  document.getElementById("formFeedback").textContent = feedback;
});

// Real-time feedback
document.getElementById("password").addEventListener("input", (e) => {
  const feedback = e.target.value.length < 8
    ? "Password too short"
    : "Looking good!";
  document.getElementById("formFeedback").textContent = feedback;
});
