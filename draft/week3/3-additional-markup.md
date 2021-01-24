---
title: 'Additional Markup'
---

## Comments
- Comments are not visible in the browser
- So why might you use them?
- Help you to remember why you did something
- Can be used to mark the end of long sections

```html
<div id="container">
	<div id="section1">
		some code
	</div><!-- end of section1 -->
	<div id="section2">
		some more code
	</div><!-- end of section2 -->
</div><!-- end of container -->
```

## ID and Class Attribute
- Everyone element can have `id` and/or `class` attributes (global attributes)
- `id` - must be unique
- `class` - can be applied to multiple elements
- Will be more useful when we do CSS - allows you to style elements a certain way
- Class attribute should describe the class it belongs to
- Elements can have multiple classes

```html
<div id="intro"></div>
<div class="section"></div>
<div class="section last-section"></div>
```

## Block Elements
- Elements that start on a new line
- Examples: `<p>`, `<h1>`, `<ul>`, `<div>` 

## Inline Elements
- Elements that continue on the same line as their neighbors
- Examples: `<a>`, `<img>`, `<span>`, `<em>`

## Divs
- Allows you to group a set of elements together
- Creates a section on a webpage
- Block element
- Using an ID or class on a div means that you can specify what it looks like with CSS
- Can make code look cleaner
- Vital for layout
- Ex: https://emilykauffman.com/teaching

```html
<!-- without divs -->
<h1>Information about Earth</h1>
<p>some info about geography</p>
<p>some more info about geography</p>
<h1>History</h1>
<p>some info about the history</p>
<p>some info about the geology</p>
<p>some more info</p>
```

```html
<!-- with divs -->
<div>
    <h1>Information about Earth</h1>
    <p>some info about geography</p>
    <p>some more info about geography</p>
</div>
<div>
    <h1>History</h1>
    <p>some info about the history</p>
    <p>some info about the geology</p>
    <p>some more info</p>
</div>
```

## Span
- Like a div, but inline
- Use when there are no semantically better elements that fit
- Use case: say you want an element that is always highlighted with a yellow background

```html
<!-- requires some CSS -->
<p>Here is how to make something <span class="highlighted">highlighted</span>
```
```css
/* CSS uses the class to target the element and apply styles */
.highlighted {
	background-color: yellow;
}
```

## Meta tags
- Contains information about the web page
- Not visible to users, but used by browser

```html
<meta name="author" content="Emily Kauffman" />
<meta name="robots" content="nofollow" />
<meta name="description" content="description of the website" />
```
