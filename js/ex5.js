// Exercise 5: JavaScript fundamentals, logged to the console

// --- Variables ---
// I used let for values that change and const for values that don't.
const courseName = "Frontend Development";
let hoursStudied = 12;
console.log("Course:", courseName, "| Hours studied:", hoursStudied);

// --- Functions ---
function addHours(hours) {
  hoursStudied = hoursStudied + hours;
  return hoursStudied;
}
console.log("After studying 3 more hours:", addHours(3));

// --- Arrays and loops ---
const topics = ["HTML", "CSS", "JavaScript", "Flexbox", "Grid", "Responsive design"];
console.log("Topics I covered:");
for (let i = 0; i < topics.length; i++) {
  console.log((i + 1) + ". " + topics[i]);
}

// --- Objects ---
const myProgress = {
  name: "Venkatesh",
  exercisesDone: 6,
  quizScore: 8, // out of 10
  passed: true
};
console.log("Progress object:", myProgress);

// --- Conditionals ---
if (myProgress.quizScore >= 7) {
  console.log("Quiz result: PASS");
} else {
  console.log("Quiz result: needs more practice");
}

// --- Array methods (map and filter took me a while to understand) ---
const scores = [6, 8, 9, 5, 10];
const doubled = scores.map(function (s) { return s * 2; });
const passing = scores.filter(function (s) { return s >= 6; });
console.log("Original scores:", scores);
console.log("Doubled:", doubled);
console.log("Passing scores (>= 6):", passing);

// --- Common pitfall I hit: == vs === ---
console.log("'5' == 5 gives:", "5" == 5);   // true (type conversion, confusing!)
console.log("'5' === 5 gives:", "5" === 5); // false (strict check, safer)
