# Week 3

## What is responsive web design?
Responsive web design is an approach to building websites so they 
automatically adapt to different screen sizes and devices — 
like phones, tablets, laptops, and large monitors.

Instead of making separate websites for mobile and desktop, 
one responsive website changes its layout and styling based 
on the available screen space.

## How are css media queries used in responsive design?
CSS media queries are used in responsive web design to apply different styles 
depending on the device or screen size.

They allow your webpage to “respond” to different conditions such as:
* Screen width
* Screen height
* Device orientation
* Resolution

## What part does the viewport meta tag play in responsive design?
The viewport meta tag tells mobile browsers how to control the page’s size 
and scaling on different devices.

It is one of the most important parts of responsive web design because, without it, 
mobile browsers often display webpages as if they were designed for large desktop screens.

### width=device-width
Sets the page width to match the device’s screen width.

* Phone → uses phone width
* Tablet → uses tablet width
* Desktop → uses desktop width

### initial-scale=1.0
Sets the initial zoom level when the page first loads.

* 1.0 means normal zoom
* Prevents the browser from automatically zooming out

## What is a CSS Reset?
A CSS reset is a set of CSS rules used to remove or standardize 
the default styling that browsers automatically apply to HTML elements.

Different browsers (Chrome, Safari, Firefox, Edge, etc.) have slightly different default styles for things like:

* Margins
* Padding
* Headings
* Lists
* Buttons
* Fonts

A CSS reset helps make your website look more consistent across browsers.

A CSS reset:

- Removes browser default styling
- Creates a consistent starting point
- Helps avoid cross-browser layout problems
- Is commonly used at the top of a stylesheet

## What is CSS Normalize?
Different browsers style elements differently.

For example:

- Heading sizes may vary
- Form elements can look inconsistent
- Line heights may differ
- Buttons may behave differently

Normalize.css smooths out those differences so websites behave more predictably.

## Should I use these?
Yes — in most web projects, using either a CSS reset or Normalize.css is a good idea 
because they help make your layouts more predictable across browsers.

Which one you should use depends on how much control you want over default styling.

You want a very clean starting point and plan to style everything yourself.

### Good for:

* Custom designs
* Learning CSS deeply
* Precise layouts
* Portfolio or professional sites

### Use Normalize.css When…

You want browsers to stay mostly “normal” but consistent.

Good for:

* Faster development
* Keeping default heading/list styles
* Larger projects
* Avoiding browser inconsistencies without resetting everything

## What are techniques for debugging Javascript code?
Debugging JavaScript means finding and fixing errors or unexpected behavior in your code. 
Developers usually combine several techniques together to identify problems quickly.

## How can I use breakpoints in the browser?
Breakpoints let you pause JavaScript execution in the browser so you can inspect 
what your code is doing step-by-step.

They are one of the most powerful debugging tools in browser Developer Tools.

### What a Breakpoint Does

A breakpoint:

- Stops JavaScript at a specific line
- Lets you inspect variables and values
- Allows step-by-step execution
- Helps find logic errors

Think of it like pausing a video to examine a frame.