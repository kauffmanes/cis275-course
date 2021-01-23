---
title: "Intro to CSS"
---

<article class="highlighted">
  <h2>Goals</h2>
  <ol>
    <li>Review the test</li>
    <li>Learn what CSS does</li>
    <li>Learn how CSS works</li>
  </ol>
</article>

## Review
1. What do we know so far? HTML!
1. Design Basics CRAP!

---

## What is it?
- Cascading Style Sheets
- CSS is the code *associated with* an *HTML* file that tells the browser how stuff should specifically **look**.
- HTML: structure, CSS: appearance

---

## How does it work?
Imagine an invisible box drawn around every element on a page.

```html
<div>
  <h1>Potatoes</h1>
  <p>The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself, a perennial in the family Solanaceae.</p>
  <p>Wild potato species can be found throughout the Americas, from the United States to southern Chile. The potato was originally believed to have been domesticated by indigenous peoples of the Americas independently in multiple locations, but later genetic testing of the wide variety of cultivars and wild species traced a single origin for potatoes.</p>
  <p>In the area of present-day southern Peru and <em>extreme</em> northwestern Bolivia, from a species in the Solanum brevicaule complex, potatoes were domesticated approximately 7,000–10,000 years ago. In the Andes region of South America, where the species is indigenous, some close relatives of the potato are cultivated.</p>
</div>
```
<!-- **Displays as**:
<div>
    <h1>Potatoes</h1>
    <p>The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself, a perennial in the family Solanaceae.</p>
    <p>Wild potato species can be found throughout the Americas, from the United States to southern Chile. The potato was originally believed to have been domesticated by indigenous peoples of the Americas independently in multiple locations, but later genetic testing of the wide variety of cultivars and wild species traced a single origin for potatoes.</p>
    <p>In the area of present-day southern Peru and <em>extreme</em> northwestern Bolivia, from a species in the Solanum brevicaule complex, potatoes were domesticated approximately 7,000–10,000 years ago. In the Andes region of South America, where the species is indigenous, some close relatives of the potato are cultivated.</p>
</div> -->

**And with lines added:**
<div style="border: solid 5px red">
  <h1 style="border: solid 5px blue">Potatoes</h1>
  <p style="border: solid 5px green">The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself, a perennial in the family Solanaceae.</p>
  <p style="border: solid 5px green">Wild potato species can be found throughout the Americas, from the United States to southern Chile. The potato was originally believed to have been domesticated by indigenous peoples of the Americas independently in multiple locations, but later genetic testing of the wide variety of cultivars and wild species traced a single origin for potatoes.</p>
  <p style="border: solid 5px green">In the area of present-day southern Peru and <em style="border: solid 5px pink">extreme</em> northwestern Bolivia, from a species in the Solanum brevicaule complex, potatoes were domesticated approximately 7,000–10,000 years ago. In the Andes region of South America, where the species is indigenous, some close relatives of the potato are cultivated.</p>
</div>

---

## Statement Construction (Syntax)
- Works by associating rules with HTML elements
- Style sheets are made up of **statements** (CSS rules) which consist of **selectors** and **declaration**.

```css
h1 {
  color: red;
}

```
- `h1` is the selector
- `{ color: red; }` is the declaration
- Declarations must exist in `{}` except for when local
- Declarations are made up of a **property** (`color`) and **value** (`red`)
- Each declaration must conclude with a semi-colon (good practice)

```css
/* specifying several properties in one declaration: */
h1 {
  color: red;
  font-family: Arial;
}
```

```css
/* targeting multiple elements as well */
h1, h2, h3 {
  color: red;
}
```

```css
/* some people write single-line declarations like this */
body { background: black; }

p {
  color: gray;
  font-family: Verdana, Arial, sans-serif;
  line-height: 125%;
  font-weight: bold;
}

h1, h2 {
 color: red;
 font-family: 'Comic Sans', sans-serif;
}
```

### Syntax Points to Remember
- Every statement must have a selector and declaration
- Declarations are set off by curly braces
- Properties and values must be separated by a colon
- Semi-colons must separate each property/value pair
- White space can make your style sheet easier to read
- You can comment style sheets: `/* this is a CSS comment */`

---

## Uses for Styles
- Typography
- Colors
- Indentation
- Spacing
- Alignment
- Link pseudo-class (link mannerisms on hover-over, etc)
- Text decoration
- Controlling page layout

---

## Ways to Apply Style

### External Style Sheet
- external file from HTML doc
- Name structure: filename.css
- Reference through the `link` element in the HEAD

```html
<!doctype html>
<html>
  <head>
    <title>CSS Example</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
    <!-- HTML here -->
  </body>
</html>
```

```css
/* styles.css */
p { color: black; }
```

### Internal Style Sheet
- Styles are located in the HEAD of the document in the `style` tag
- Only good for if you have a one-page website...why?

```html
<!doctype html>
<html>
  <head>
    <title>CSS Example</title>
    <style>
      /* use CSS in here */
      p { color: black; }
    </style>
  </head>
  <body>
    <!-- HTML here -->
  </body>
</html>
```

### Local Styles
- DON'T USE THIS. Why is this bad?
- Separation of concerns, reusability, not as maintainable/easy to perform updates
- Applies styles directly to an element in the HTML
- No brackets
- Heavy-handed approach
- Only mentioning because you might see it on older websites

```html
<p style="color:red; background:blue;"></p>
```

---

## CSS Selectors
The selector allows you to target specific elements on a page for styling.

- Universal selector: `* { }` - targets all elements on a page
- Type selector: `h1 { }` - matches the element name
- Class selector: `.note { }`, `p.note { }` - targets an element with a class of "note"
- ID selector: `#id { }` - targets
- See Duckett, page 238 for a fuller list
- See Duckett, page 292 for a list of attribute selectors

---

## The Cascade
- Rules can be overwritten (cascade down)
- Last one of two identical rules will take precedence
- If one rule is more specific than another, the more specific will take place
- Write generic rules that apply to most elements, and then be more specific

```css
/* which will apply? */
* { color: red; }

h1 { color: green; }

p {
  color: red; 
  color: green; 
  color: blue; 
}
```

### Colors
- to set the foreground color, use `color` property
- to set the background color, use `background-color` property
- multiple ways to set: RGB value, hex codes, color names, HSL (hue-saturation-lightness)
- [CSS Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
- watch contrast!

```css
h1 {
  color: red;
  background-color: blue;
}

h1 {
  color: rgb(255,0,0);
  background-color: rgb(0,0,255);
}

h1 {
  color: #ff0000; /* can be shortened to #f00 */
  background-color: #0000ff; /* can be shortened to: #00f */
}
```

### Text
- properties allow you to control of appearance of text
- formatting of text affects the readibility of your pages
- typeface terminology: serif, sans-serif,  monospace
- use sans-serif for body text on the screen - lower resolution than print
- weights: light, medium, bold, black
- style: normal, italic, oblique
- font-family, font-size, font-weight, font-style, text-transform, text-decoration, etc
- style your links!

---

## Summary
- Cascading Style Sheets are used to alter the appearance of your HTML pages
- Three (two acceptable) ways to include CSS: external, internal, local
- Various ways to select elements
- Did not cover all of Chp. 11 Color or Chp. 12 Text but know this!
- Devtools are helpful!
- https://estelle.github.io/CSS/

---

## In Class Exercises

### Exercise 1: Getting Familiar
1. Copy and paste this HTML document into a new file called `exercise1.html`.

```html
<!doctype html>
<html>
  <head>
    <title>Exercise 1 | Lecture 10</title>
  </head>
  <body>
    <h1>Welcome to my Page</h1>
    <h2>It's beautiful.</h2>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
    <p class="final">This is a final paragraph.</p>
  </body>
</html>
```

1. Add a `style` tag.
1. Add CSS to make all of the paragraphs red.
1. Make *only* the last paragraph blue and underlined.
1. Change the background of the HTML Body section to be yellow.
1. Make the background of the H1 green, with a 50% opacity, and a font size of 150%.
1. Make the H2 italicized and all caps.
1. Play around with some other stuff. Change colors, font sizes, styles, fonts.

### Exercise 2: External Style Sheet
1. Make a new HTML document called `exercise2.html`.
2. Add the normal HTML sections that we know and love.
3. Add this content to the body:

```html
<h1>Exercise 2</h1>
<div id="intro">
  <h2>Some robot speak</h2>
  <p>
    AFK exit nodes virus rootkit network website fsociety data center. Data
    dump backup fsociety rootkit decrypt. Terminal cyber security off the
    grid nodes. Operating system off the grid connect, code website routing
    protocol traffic <span class="highlighted">terminal</span> boot up offline system files dat file RUDY
    attack sys admin. Disconnect worm compromised, dat file traffic wipe
    Wi-Fi. Two-step verification virus malware.
  </p>
</div>
<div>
  <h2>The robot continues...</h2>
  <p>
    Protocol virus offline backup. Data dump emails anonymous website
    Wi-Fi <span class="highlighted">log file reboot</span> offline virus protocol network. Breach system
    files fiber connection DNS RUDY attack. Password malware Tor emails
    rootkit wipe exit nodes. Sys admin wipe IP dat file. Routing protocol
    code log file IRC off the grid, virus bonsoir data center. Tor system
    protocol IP data dump operating <span class="highlighted">system log</span> file anonymous disconnect
    offline worm RUDY attack code. 
  </p>
  <p>
    Password intercepting traffic bonsoir. Code timing out cyber security
    password website. Wipe RUDY attack traffic computer offline system.
    Intercepting traffic disconnect virus boot up. Brute-force data dump
    RUDY attack breach, <span>nodes</span> operating system fsociety routing protocol
    delete.
  </p>
</div>
```

4. Add a link to an external style sheet called `styles.css`.
5. Without touching the HTML file, add CSS to the styles.css stylesheet to make it look like the following image (as much as you can):
![Screenshot of exercise 2 web page](../../../images/lec10ex2.png)
6. Show me when you're done! Be sure to check the following: serif vs sans-serif fonts, colors, font weights, background colors, etc...

### Exercise 3: Try it out!
1. Take any of the exercises we did in a previous class or homework.
1. Add an external CSS file and try to change the appearance. The goal is to get familiar with the syntax!
1. When you feel confident with setting colors, font sizing, styling, and anything else in chapters 10-12, you're free to go.

---

## Resources
1. [CSS Tips and Tricks](https://www.heartinternet.uk/blog/16-devtools-tips-and-tricks-every-css-developer-need-to-know/)
1. [2019 State of CSS](https://2019.stateofcss.com/)
1. [CSS Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
1. https://estelle.github.io/CSS