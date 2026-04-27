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

2. Add content or attributes

    newDiv.textContent = "Hello, I am new!";
    newDiv.className = "box";
    newDiv.innerHTML = "<strong>Bold text</strong>";

3. Insert it into the page

    document.body.appendChild(newDiv);
    let container = document.getElementById("container");
    container.appendChild(newDiv);

You don’t “write HTML” directly—you build elements as objects and attach them to the DOM tree.

## How can I remove elements from the DOM?
    Removing elements from the DOM is basically the reverse of adding them. You just need to select the element and then remove it.
1. The simplest way: .remove()

    let elem = document.getElementById("title");
    elem.remove();

2. Remove via the parent

    let parent = document.getElementById("container");
    let child = document.getElementById("title");
    parent.removeChild(child);

3. Remove elements with an event (very common)
    <button id="deleteBtn">Delete</button>
    <p id="text">Remove me</p>
    let btn = document.getElementById("deleteBtn");
    let text = document.getElementById("text");

    btn.addEventListener("click", function() {
        text.remove();
    });

4. Remove multiple elements

    let items = document.querySelectorAll(".item");

    items.forEach(function(item) {
        item.remove();
    });

## How can I add or remove attributes from elements in the DOM?
    You can add, change, or remove attributes in the DOM using a few built-in JavaScript methods. Think of attributes as things inside HTML tags like id, class, src, href, etc.
