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

  title.textContent = texts[textIndex];
  textIndex = (textIndex + 1) % texts.length;
});

colorBtn.addEventListener("click", function () {

  if (para.style.color === "green") {
    para.style.color = "#2563eb";
  } else {
    para.style.color = "green";
  }
});
