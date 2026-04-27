# Week 2
## What is the Document Object Model?
### The Document Object Model (DOM) is a programming interface for web pages.
    The DOM is a tree-like representation of a web page that allows JavaScript to interact with and modify the page.

## How can I manipulate an html document with javascript?
    You manipulate an HTML document with JavaScript by interacting with the DOM (Document Object Model)—basically grabbing elements and then changing them.
1. Select elements from the page
    
    let heading = document.getElementById("title");
    document.querySelector("p");        // first <p>
    document.querySelectorAll("p");     // all <p> elements
    document.getElementsByClassName("box");

2. Change content

    heading.textContent = "New Title";
    heading.innerHTML = "<em>New Title</em>";

3. Change styles
    
    heading.style.color = "red";
    heading.style.fontSize = "40px";

4. Add new elements
    let newPara = document.createElement("p");
    newPara.textContent = "This is new!";
    document.body.appendChild(newPara);

5. Remove elements
    heading.remove();

6. Respond to user actions (events)
    heading.addEventListener("click", function() {
    heading.textContent = "You clicked me!";
});

## How can I add elements to the DOM?
    To add elements to the DOM with JavaScript, you follow a simple pattern:
    Create → Customize → Insert

1. Create a new element
    let newDiv = document.createElement("div");
