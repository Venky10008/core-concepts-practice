// Exercise 2: events - click, keyboard (Enter), and creating/removing elements

// --- Part 1: click counter ---
var count = 0;
var countSpan = document.getElementById("count");
var countBtn = document.getElementById("count-btn");

countBtn.addEventListener("click", function () {
  count = count + 1;
  countSpan.textContent = count;
});

// --- Part 2: mini todo list ---
var input = document.getElementById("todo-input");
var addBtn = document.getElementById("add-btn");
var list = document.getElementById("todo-list");

function addTodo() {
  var text = input.value.trim();
  if (text === "") {
    // I hit this bug early: empty tasks were being added. trim() + this check fixed it.
    return;
  }

  var li = document.createElement("li");
  li.textContent = text + " ";

  // each item gets its own delete button
  var del = document.createElement("button");
  del.textContent = "Delete";
  del.addEventListener("click", function () {
    list.removeChild(li);
  });

  li.appendChild(del);
  list.appendChild(li);
  input.value = ""; // clear the box after adding
  input.focus(); // put the cursor back so the next task is faster to type
}

addBtn.addEventListener("click", addTodo);

// also let Enter add the task, which is what users expect
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
