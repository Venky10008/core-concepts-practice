// Exercise 1: DOM manipulation basics
// I learned that getElementById gives me the element, and textContent changes its text.

var texts = [
  "You changed the text!",
  "DOM stands for Document Object Model.",
  "JavaScript can change the page without reloading it.",
  "This is my third text change."
];
var textIndex = 0;

var title = document.getElementById("title-text");
var para = document.getElementById("color-para");
var changeBtn = document.getElementById("change-btn");
var colorBtn = document.getElementById("color-btn");

changeBtn.addEventListener("click", function () {
  // cycle through the texts array so each click shows the next one
  title.textContent = texts[textIndex];
  textIndex = (textIndex + 1) % texts.length; // % makes it wrap back to 0
});

colorBtn.addEventListener("click", function () {
  // toggle between two colors so I can see the class change working
  if (para.style.color === "green") {
    para.style.color = "#2563eb";
  } else {
    para.style.color = "green";
  }
});
