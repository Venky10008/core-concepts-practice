# Task 2 - Core Frontend Concepts Practice

Small practice project built for Task 2 ("Core Concepts and Skills") of the
YuvaIntern Frontend Development Fresher Internship. It is a set of six small
exercises, one per core concept, with comments in the code explaining what I
learned and the mistakes I ran into.

## How to run

Open `index.html` in any browser and click through the exercises. No build
tools or installs needed - it is plain HTML, CSS and JavaScript. Exercise 5
prints its output to the browser console (press F12 to open it).

## What each exercise demonstrates

1. **DOM manipulation (`exercises/ex1-dom.html`)** - Selecting elements with
   `getElementById`, changing text with `textContent`, and changing styles
   from JavaScript. Shows that JS can update a page without a reload.
2. **Events (`exercises/ex2-events.html`)** - `addEventListener` for click and
   keyboard (Enter) events. A click counter and a mini todo list that creates
   and deletes elements with `createElement` and `removeChild`. Also shows
   input validation (empty tasks are rejected with `trim()`).
3. **Form validation (`exercises/ex3-form.html`)** - Checking name, email and
   password fields on submit, showing per-field error messages, and using
   `event.preventDefault()` so the page does not reload. The key lesson:
   never trust user input.
4. **Flexbox and CSS Grid (`exercises/ex4-flexbox-grid.html`)** - The same set
   of boxes laid out both ways to show the difference: Flexbox for
   one-dimensional rows/columns, Grid for two-dimensional layouts. Also uses
   `gap` and `flex-wrap`.
5. **JavaScript fundamentals (`exercises/ex5-js-basics.html`)** - Console
   demos of variables (`let`/`const`), functions, arrays, loops, objects,
   conditionals, and the array methods `map` and `filter`. Includes the
   classic `==` vs `===` pitfall.
6. **Responsive layout (`exercises/ex6-responsive.html`)** - A two-column
   layout that stacks into one column below 600px using a media query. Shows
   why the viewport meta tag matters (without it, mobile browsers ignore the
   responsive CSS).

## What I learned / pitfalls I hit

- Empty tasks were being added to my todo list until I added a `trim()` check.
- Forgetting the viewport meta tag made my "responsive" page look broken on mobile.
- `==` does type conversion and caused confusing comparisons; `===` is safer.
- Old form error messages stayed on screen until I cleared them at the start of each submit.
- One shared stylesheet keeps the pages consistent (DRY principle).

## Folder structure

```
Task2-Core-Concepts-Practice/
  index.html            - landing page linking all exercises
  css/style.css         - shared styles
  js/ex1.js ... ex5.js  - JavaScript per exercise
  exercises/            - one HTML page per concept
```

Built by Venkatesh Pola, November 2026.
