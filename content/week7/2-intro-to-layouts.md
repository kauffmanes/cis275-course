---
title: "Layouts and Positioning"
metaTitle: "Layouts and Positioning"
metaDescription: "Layouts and Positioning"
---

`youtube:mL6XAzDWSxQ`

## Intro
- If a block level element sits inside another block-level element, the outer box is known as the parent, or containing element
- CSS has a number of positioning schemes that allow you to control the flow of the page: **normal**, **relative**, **absolute**, **fixed**, and **floating**.
- Ducket pg. 364 for an in-depth explanation

## Normal flow
- Every block element appears on a new line
- Even if you set a height/width of a block element, another block element will still go to the next line
- This is how it works by default!

## Relative
- This moves an element from the position that it would normally appear
- Shift left, right, up, down
- Does not affect elements near it
```html
	<p>
		I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph.<br/>
		I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. 
	</p>
	<p class="shifted">
		I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph.<br/>
		I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. 
	</p>
```
```css
	.shifted {
		color: red;
		display: relative;
		left: 200px;
		top: -120px;
	}
```

<div>
	<p>
		I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph.<br/>
		I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. 
	</p>
	<p style="color: red;position:relative;left:250px;top:-120px;">
		I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph.<br/>
		I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. 
	</p>
</div>

## Absolute
- This moves an element to a position in relation to its containing element.
- It moves the element out of normal flow

## Fixed
- This is similar to absolute positioning, but instead of being relative to the container, it's relative to the browser window
- When you scroll, it doesn't move from the position
- Useful: sticky headers, top buttons that are always displayed on the page

## Floating
- Floating an element lets you take it out of normal flow and position it to the far left or right of the containing box.
- Other content can flow around it
- This can be used for making layouts (pg. 371)
- Issue: Parents of floated elements, solution: `overflow: auto; width: 100%`