---
title: "CSS Tricks"
metaTitle: "CSS Tricks"
metaDescription: "CSS Tricks"
---

This page contains a few CSS tricks and further explanations. If you feel good on a particular section, skip it, otherwise check out the code snippets or readings for each.

# Shorthand
Some CSS rules can be written using shorthand.

```css
	/* BORDER RULES */
	p {
		border-width: 2px;
		border-style: dashed;
		border-color: red;
		margin-left: 12px;
		margin-top: 6px;
		margin-right: 3px;
		margin-bottom: 6px;
	}

	/* SHORTHAND */
	p {
		border: dashed 2px red;
		margin: 6px 3px 6px 12px; /* top, right, bottom, left */
	}
```

# Centering Elements
```css
	p {
		width: 100%;
		padding: 24px;
		border: solid 2px blue;
		margin: 0;
	}
```

# CSS Overflow
Read <a target="_blank" href="https://www.w3schools.com/css/css_overflow.asp">CSS Overflow</a>.

# CSS Combinators
CSS combinators were already covered in the book on the chapter on selectors, but it's good to have a refresher! Remember that you can target your elements in a multiude of ways.

Read https://www.w3schools.com/css/css_combinators.asp.

# CSS Units
I'm including this because someone asked about different CSS units. We are going to cover some of these in the next few weeks with responsive web design, but if you're curious, read these two (short) articles.
1. Read https://www.w3schools.com/css/css_units.asp
1. Read https://andy-carter.com/blog/using-scalable-css-units-for-font-sizes

# Opacity and Transparency
This article deals with changing the opacity of elements on your page. This one could be helpful for future projects.

Read https://www.w3schools.com/css/css_image_transparency.asp
