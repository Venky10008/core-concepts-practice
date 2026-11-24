const courseName = "Frontend Development";
let hoursStudied = 12;
console.log("Course:", courseName, "| Hours studied:", hoursStudied);

function addHours(hours) {
  hoursStudied = hoursStudied + hours;
  return hoursStudied;
}
console.log("After studying 3 more hours:", addHours(3));

const topics = ["HTML", "CSS", "JavaScript", "Flexbox", "Grid", "Responsive design"];
console.log("Topics I covered:");
for (let i = 0; i < topics.length; i++) {
  console.log((i + 1) + ". " + topics[i]);
}

const myProgress = {
  name: "Venkatesh",
  exercisesDone: 6,
  quizScore: 8,
  passed: true
};
console.log("Progress object:", myProgress);

if (myProgress.quizScore >= 7) {
  console.log("Quiz result: PASS");
} else {
  console.log("Quiz result: needs more practice");
}

const scores = [6, 8, 9, 5, 10];
const doubled = scores.map(function (s) { return s * 2; });
const passing = scores.filter(function (s) { return s >= 6; });
console.log("Original scores:", scores);
console.log("Doubled:", doubled);
console.log("Passing scores (>= 6):", passing);

console.log("'5' == 5 gives:", "5" == 5);
console.log("'5' === 5 gives:", "5" === 5);
