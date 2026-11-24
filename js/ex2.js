var count = 0;
var countSpan = document.getElementById("count");
var countBtn = document.getElementById("count-btn");

countBtn.addEventListener("click", function () {
  count = count + 1;
  countSpan.textContent = count;
});

var input = document.getElementById("todo-input");
var addBtn = document.getElementById("add-btn");
var list = document.getElementById("todo-list");

function addTodo() {
  var text = input.value.trim();
  if (text === "") {

    return;
  }

  var li = document.createElement("li");
  li.textContent = text + " ";

var del = document.createElement("button");
  del.textContent = "Delete";
  del.addEventListener("click", function () {
    list.removeChild(li);
  });

  li.appendChild(del);
  list.appendChild(li);
  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", addTodo);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
