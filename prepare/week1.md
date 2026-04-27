# Week 1

# HTML Intro
### Hyper Text Markup Language
    HTML gives structure to our web page with a hierarchy that will help it be understandable to our readers or users.

# CSS Intro
### Cascading Style Sheets
    CSS is the language used to style an HTML document. CSS is a separate language from HTML. It describes how the HTML should be displayed. Whereas HTML is about structure and what element is used for what content, CSS is all about presentation and how the elements on the page will look and how they will be laid out on the page.

# JS
### JavaScript
    JavaScript is a programming language used for creating interactive and dynamic websites
    and web applications.

# Learn
## What is Javascript?
JavaScript is a popular programming language used mainly to make websites interactive and dynamic.
At its core, JavaScript lets you control what happens on a web page after it loads. While HTML provides structure and CSS handles design, JavaScript adds behavior.
 What JavaScript can do
  * Update content on a page without reloading (like live search results)
  * Respond to user actions (clicks, typing, scrolling)
  * Create animations, games, and interactive forms
  * Communicate with servers (fetch data from APIs)
  * Build full applications (both frontend and backend)
## Tell me about it's history.
JavaScript has a surprisingly fast and messy origin story—it went from a quick experiment to one of the most important programming languages in the world.
### The beginning (1995)
JavaScript was created in just 10 days by Brendan Eich while working at Netscape Communications.
* It was originally called Mocha, then LiveScript, and finally renamed JavaScript (mostly for marketing, to ride the popularity of Java).
### The “browser wars” era (late 1990s)
Things got chaotic when Microsoft created its own version called JScript for Internet Explorer.
### Standardization (late 1990s–2000s)
To fix the chaos, JavaScript was standardized as ECMAScript by ECMA International.
### The big turning point: AJAX (2000s)
JavaScript became much more powerful with the rise of AJAX (Asynchronous JavaScript and XML).
### Modern JavaScript (2010s–today)
JavaScript exploded in popularity and capability:
* Node.js (2009) allowed JavaScript to run on servers
* Frameworks like React, Angular, and Vue.js made building complex apps easier
* Annual updates to ECMAScript added modern features (ES6 in 2015 was a huge upgrade)
### Today
JavaScript is now:
* One of the most widely used languages in the world
* Used for websites, servers, mobile apps, games, and more
* A core part of nearly every modern web experience

## What is the difference between javascript and ecmascript? (Ecmascript was mentioned in the last response)
Good question—this confuses a lot of people because the terms are often used interchangeably, but they’re not the same thing.
The simple idea
- JavaScript = the actual programming language you use
- ECMAScript = the official standard/specification that defines how JavaScript should work

ECMAScript is like a rulebook, and JavaScript is a game built using that rulebook.

ECMAScript = the blueprint
JavaScript = the working language built from that blueprint + extra features

## How can I use Javascript in a webpage?
1. Inline JavaScript (inside HTML)
To use JavaScript in a webpage, you connect it to your HTML so the browser can run it.
<button onclick="alert('Hello!')">Click me</button>

2. Internal JavaScript (<script> tag)
<h1 id="title">Hello</h1>

<script>
  document.getElementById("title").textContent = "Hello, JavaScript!";
</script>

3. External JavaScript file (best practice)
<script src="script.js" defer></script>
document.getElementById("title").textContent = "Hello, JavaScript!";

What JavaScript can do on a webpage
Once connected, JavaScript can:
* Change text, styles, and HTML
* Respond to clicks and user input
* Show/hide elements
* Fetch data from servers

## What are common problems that can occur when using Javascript?
JavaScript is powerful, but it’s also easy to trip over a few common issues—especially when you’re working in the browser.
1. “Cannot read properties of null”
document.getElementById("title").textContent = "Hi";

2. Wrong selectors (IDs/classes don’t match)
<h1 id="header"></h1>
document.getElementById("title")

3. Event listeners not working
button.addEventListener("click", doSomething);

4. Variable issues (let, const, var)
JavaScript is picky.
const x = 5;
x = 10; // ❌ error

5. Typos and syntax errors
console.log("Hello"   // ❌ missing )

6. Logic errors (code runs, but wrong result)
These are harder to catch because nothing crashes.
if (x = 5) {  // ❌ assignment instead of comparison

7. Asynchronous confusion
fetch("data.json")
  .then(response => response.json())
  .then(data => console.log(data));

8. Browser compatibility issues
Different browsers (like Google Chrome vs Safari) may behave slightly differently, especially with newer features.

9. Overwriting values accidentally
element.style.color = "red";
element.style.color = "blue";
element.style.color = "green";

10. Console errors ignored
The browser console is your best friend.

Open DevTools: 
- Right click → Inspect → Console

11. Bottom line
Most JavaScript problems come down to:
* Timing (when code runs)
* Targeting (wrong element)
* Syntax (small mistakes)
* Logic (code does the wrong thing)