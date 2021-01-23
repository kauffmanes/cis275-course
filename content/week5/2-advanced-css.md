---
title: "Advanced CSS"
---

<article class="highlighted">
  <h2>Goals</h2>
  <ol>
    <li>Practice CSS!</li>
    <li>Boxes</li>
    <li>Lists, Tables, and Forms</li>
    <li>Intro to layout</li>
  </ol>
</article>

## Review of Selectors
- An **id** is a unique identifier for a **specific** element
- A **class** can be associated with a **group** of elements

<iframe height="265" style="width: 100%;" scrolling="no" title="xxGqOze" src="https://codepen.io/kauffmanes/embed/xxGqOze?height=265&referer=emilykauffman.com&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/kauffmanes/pen/xxGqOze'>xxGqOze</a> by Emily
  (<a href='https://codepen.io/kauffmanes'>@kauffmanes</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Boxes
- Remember how I said to pretend every element is in a box?
- We can make changes to that box!
- We can control dimensions, create borders, set **margin** and **padding**, and show/hide boxes.
- After you can control the appearance of the boxes, we can create layouts.

### Box Dimensions
- By default, a box is sized just big enough to hold its contents
- You can specify dimensions using: *pixels*, *percentages*, or *ems*.
- When you use %'s, the size is relative to the browser window
- If a box is inside another box, it's relative to the size of its container
- Min/max-widths/heights

<iframe height="265" style="width: 100%;" scrolling="no" title="Lec11 Boxes" src="https://codepen.io/kauffmanes/embed/JjdWKMz?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/kauffmanes/pen/JjdWKMz'>Lec11 Boxes</a> by Emily
  (<a href='https://codepen.io/kauffmanes'>@kauffmanes</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Box Model
![Box Model](https://miro.medium.com/max/1474/1*gq1B7v2_gDEi3jkAwAvZNQ.png)

### Block, inline, inline-block
- The `display` property lets you turn block elements into inline elements and vice-versa
- You can also set it to `inline-block`, which makes the element appear inline but keeps some of the block-level features
- https://css-tricks.com/almanac/properties/d/display/
- Common use case:
<iframe height="265" style="width: 100%;" scrolling="no" title="GRJWLyv" src="https://codepen.io/kauffmanes/embed/GRJWLyv?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/kauffmanes/pen/GRJWLyv'>GRJWLyv</a> by Emily
  (<a href='https://codepen.io/kauffmanes'>@kauffmanes</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## Styling Lists, Tables, and Forms
We aren't covering this in class since the book does a great job of explaining this and giving examples. You'll get some practice here on the homework.

---

## Layouts and Positioning
- If a block level element sits inside another block-level element, the outer box is known as the parent, or containing element
- CSS has a number of positioning schemes that allow you to control the flow of the page: **normal**, **relative**, **absolute**, **fixed**, and **floating**.
- Ducket pg. 364 for an in-depth explanation

### Normal flow
- Every block element appears on a new line
- Even if you set a height/width of a block element, another block element will still go to the next line
- This is how it works by default!

### Relative
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

### Absolute
- This moves an element to a position in relation to its containing element.
- It moves the element out of normal flow

### Fixed
- This is similar to absolute positioning, but instead of being relative to the container, it's relative to the browser window
- When you scroll, it doesn't move from the position
- Useful: sticky headers, top buttons that are always displayed on the page

### Floating
- Floating an element lets you take it out of normal flow and position it to the far left or right of the containing box.
- Other content can flow around it
- This can be used for making layouts (pg. 371)
- Issue: Parents of floated elements, solution: `overflow: auto; width: 100%`

---

## Other Stuff
- Some CSS rules can be written using shorthand.
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
- Tricks for centering elements
```css
	p {
		width: 100%;
		padding: 24px;
		border: solid 2px blue;
		margin: 0 
	}
```

---

## In Class Exercises
A few weeks ago, we <a href="/teaching/cis-275/troubleshooting-and-tables#exercises">started a website</a> to advertise our new web company, DubJay Designs. We want to revisit this with our new-found CSS knowledge!

### Exercise 1: HTML
Create a new HTML document called `index.html` with all of the typical HTML structural elements. Create a CSS file called `styles.css`. Include the CSS file as an external stylesheet in your `index.html`. Using <a href="https://examples.emilykauffman.com/11-advanced-css/exercise1/index.html">this website</a>, write the HTML to mock up the content. Based on the appearance, try to think about which elements you'll need.

### Exercise 2: CSS
1. After creating all of the HTML elements, add CSS to create the website. Feel free to change the content or colors, but keep the general page sections. If you need more HTMl elements, add them!
1. Check out this page for some font families to choose from: https://www.w3schools.com/cssref/css_websafe_fonts.asp. Choose a sans-serif set for the main content, and a serif set for the headings.


### Exercise 3: Styling Links
1. Add a navigation section to the header of your website. Include a Home, About, and Contact links. They don't have to point to actual pages (i.e. just leave the href blank). 
1. Style the links using all of the `<a>` pseudo-tags. Take care to apply them in the correct order (pg. 290).

It should look something like this: https://examples.emilykauffman.com/11-advanced-css/exercise2/index.html

### Exercise 4: Looking at Code
You now have the skills to make most websites designs. Find a few websites that you like. Why do you like them? Check out their code via the inspect element tool. Look at how they've arranged their CSS and HTML. If you see something that interests you, try it out in your code from today.


Examples: sticky headers, stick "back to top" button, color schemes, changing typography

---

## Homework
**Due**: March 03<br/>

This exercise gives you the opportunity to hook some CSS into the HTML Boilerplate that you created in Exercise 3. Through this exercise, you’ll develop the ability to actually modify the appearance of the web content you are building. To successfully complete this task you should be able to exhibit mastery of the objectives from Homeworks 1-3, and you should also be able to:
1. Determine the best way to implement styles in your coding work
1. Construct effective and efficient CSS statements
1. Generate carefully edited HTML and CSS with absolutely no errors
1. Incorporate the HTML5 structural elements as well as DIVs

Completing this work will inform you of your preparedness for the upcoming CSS and Mastery Exams. It will also set you up nicely to be ready to address the upcoming layout exercise. The more markup practice you engage with, the better your understandings and competence will be.

**Here's what you should do:**
Take your beautiful and efficiently-coded HTML5 template and style all the major elements. Create some additional pages to reflect the navigation scheme you generated in Exercise 3. Make sure there are absolutely no errors in your HTML or your CSS.

You should make sure your work includes:
1. Multiple HTML pages.
1. Many of the HTML5 structural elements.
1. All the necessary styling for the appearance of the major elements on all pages.
1. Appropriate commenting for all your code in both HTML and CSS.
1. Filler content so that you can observe coding changes. If you are not familiar with the lorem ipsum text generator, now is a good time to Google it.

If you are struggling with any of this, you might want to make sure that you take a look at the code from public websites using the dev console – remember that you can access the CSS from that site also for example code (the process differs form browser to browser). A good example of this is <a href="http://samfee.net">samfee.net</a>. You might also try the exercises in your text which also lay out some of the code for you as well.

**All markup for this project should be in accordance with the HTML5 and CSS3 specifications.**

---

## Resources
1. https://ishadeed.com/article/same-html-different-css/
1. http://engineering.khanacademy.org/posts/windows-high-contrast-mode.htm
1. https://www.freecodecamp.org/news/4-reasons-your-z-index-isnt-working-and-how-to-fix-it-coder-coder-6bc05f103e6c/?ref=ewebdesign.com