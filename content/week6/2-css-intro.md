---
title: "Intro to CSS"
metaTitle: "Intro to CSS"
metaDescription: "Intro to CSS"
---

So far, we've done a deep dive into HTML and we've started talking about design and the CRAP principles. Our next goal is to start writing some CSS and making our sites a lot more interesting!

Before continuing, read **Duckett, Chps. 10-12**.

`youtube:xgOj_8yVPAo`

# Goals
1. Learn what CSS does
1. Learn how CSS works

# What is it?
- Cascading Style Sheets
- CSS is the code *associated with* an *HTML* file that allows you to create rules that specify how the content of an element should appear.
- HTML: structure, CSS: appearance
- Once you have learned how to write a CSS rule, learning CSS mostly involves learning the different properties you can use.

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
**Displays as:**
<div>
  <h1>Potatoes</h1>
  <p>The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself, a perennial in the family Solanaceae.</p>
  <p>Wild potato species can be found throughout the Americas, from the United States to southern Chile. The potato was originally believed to have been domesticated by indigenous peoples of the Americas independently in multiple locations, but later genetic testing of the wide variety of cultivars and wild species traced a single origin for potatoes.</p>
  <p>In the area of present-day southern Peru and <em>extreme</em> northwestern Bolivia, from a species in the Solanum brevicaule complex, potatoes were domesticated approximately 7,000–10,000 years ago. In the Andes region of South America, where the species is indigenous, some close relatives of the potato are cultivated.</p>
</div>

**And with lines added:**
<div style="border: solid 5px red">
  <h1 style="border: solid 5px blue">Potatoes</h1>
  <p style="border: solid 5px green">The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself, a perennial in the family Solanaceae.</p>
  <p style="border: solid 5px green">Wild potato species can be found throughout the Americas, from the United States to southern Chile. The potato was originally believed to have been domesticated by indigenous peoples of the Americas independently in multiple locations, but later genetic testing of the wide variety of cultivars and wild species traced a single origin for potatoes.</p>
  <p style="border: solid 5px green">In the area of present-day southern Peru and <em style="border: solid 5px pink">extreme</em> northwestern Bolivia, from a species in the Solanum brevicaule complex, potatoes were domesticated approximately 7,000–10,000 years ago. In the Andes region of South America, where the species is indigenous, some close relatives of the potato are cultivated.</p>
</div>

# Statement Construction (Syntax)
- Works by associating rules with HTML elements
- Style sheets are made up of **statements** (CSS rules) which consist of **selectors** and **declaration**.
- Selectors indicate which element the rule applies to.

```css
h1 {
  color: red;
}
```

- `h1` is the selector
- `{ color: red; }` is the declaration
- Declarations must exist in `{}`
- Declarations are made up of a **property** (`color`) and **value** (`red`)
- Each property/value must conclude with a semi-colon

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

## Syntax Points to Remember
- Every statement must have a selector and declaration
- Declarations are set off by curly braces
- Properties and values must be separated by a colon
- Semi-colons must separate each property/value pair
- White space can make your style sheet easier to read
- You can comment style sheets: `/* this is a CSS comment */`

# Uses for Styles
- Typography
- Colors
- Indentation
- Spacing
- Alignment
- Link pseudo-class (link mannerisms on hover-over, etc)
- Text decoration
- Controlling page layout

# Ways to Apply Style

## External Style Sheet
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

## Internal Style Sheet
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

## Local Styles
- DON'T USE THIS. Why is this bad?
- Separation of concerns, reusability, not as maintainable/easy to perform updates
- Applies styles directly to an element in the HTML
- No brackets
- Heavy-handed approach
- Only mentioning because you might see it on older websites

```html
<p style="color:red; background:blue;"></p>
```

# CSS Selectors
The selector allows you to target specific elements on a page for styling.

- Universal selector: `* { }` - targets all elements on a page
- Type selector: `h1 { }` - matches the element name
- Class selector: `.note { }`, `p.note { }` - targets an element with a class of "note"
- ID selector: `#id { }` - targets one specific element
- See Duckett, page 238 for a fuller list
- See Duckett, page 292 for a list of attribute selectors

# The Cascade 
- Rules can be overwritten (cascade down)
- **LAST RULE** - Last one of two identical rules will take precedence
- **SPECIFICITY** - If one rule is more specific than another, the more specific will take place
    - h1 is more specific than *
    - p#intro is more specific than p
- **IMPORTANT** - You can add `!important` after any property value to indicate that it should be considered more important than other rules that apply to the same element (AVOID!!)
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

## Inheritance
- Some attributes will be inherited from their parent (ex. font-size)
- Some will not (ex. border)
- Can force children to inherit by using `inherit`

```css
body { padding: 10px; }
p { padding: inherit; }
```


## Colors
- to set the foreground color, use `color` property
- to set the background color, use `background-color` property
- multiple ways to set: RGB value, hex codes, color names, HSL (hue-saturation-lightness)
- [CSS Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
- Watch contrast!

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

## Text
- properties allow you to control of appearance of text
- formatting of text affects the readibility of your pages
- typeface terminology: serif, sans-serif,  monospace
- use sans-serif for body text on the screen - lower resolution than print
- weights: light, medium, bold, black
- style: normal, italic, oblique
- font-family, font-size, font-weight, font-style, text-transform, text-decoration, etc
- style your links!

# Summary
- Cascading Style Sheets are used to alter the appearance of your HTML pages
- Three (two acceptable) ways to include CSS: external, internal, local
- Various ways to select elements
- Did not cover all of Chp. 11 Color or Chp. 12 Text but know this!
- Devtools are helpful!
- https://estelle.github.io/CSS/

# Resources
1. [CSS Tips and Tricks](https://www.heartinternet.uk/blog/16-devtools-tips-and-tricks-every-css-developer-need-to-know/)
1. [2019 State of CSS](https://2019.stateofcss.com/)
1. [CSS Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
1. https://estelle.github.io/CSS