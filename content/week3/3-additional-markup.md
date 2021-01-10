---
title: 'Additional Markup'
---

<article class="highlighted">
	<h2>Goals</h2>
	<ol>
		<li>Learn some new tags</li>
		<li>Review</li>
	</ol>
</article>

## Comments
- comments are not visible in the browser
- so why might you use them?
- help you to remember why you did something
- can be used to mark the end of long sections

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
- everyone element can have `id` and/or `class` attributes (global attributes)
- IDs - must be unique
- class - can be applied to multiple elements
- will be more useful when we do CSS - allows you to style elements a certain way
- class attribute should describe the class it belongs to
- elements can have multiple classes

```html
<div id="intro"></div>
<div class="section"></div>
<div class="section last-section"></div>
```

## Block Elements
- elements that start on a new line
- examples: `<p>`, `<h1>`, `<ul>`, `<div>` 

## Inline Elements
 elements that continue on the same line as their neighbors
- examples: `<a>`, `<img>`, `<span>`, `<em>`

## Divs
- allows you to group a set of elements together
- creates a section on a webpage
- block element
- using an ID or class on a div means that you can specify what it looks like with CSS
- can make code look cleaner
- vital for layout
- ex: https://emilykauffman.com/teaching

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
- like a div, but inline
- use when there are no semantically better elements that fit
- use case: say you want an element that is always highlighted with a yellow background

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
- contains information about the web page
- not visible to users, but used by browser

```html
<meta name="author" content="Emily Kauffman" />
<meta name="robots" content="nofollow" />
<meta name="description" content="description of the website" />
```
