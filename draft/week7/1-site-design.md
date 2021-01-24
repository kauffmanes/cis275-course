---
title: "More on Site Design"
---

<article class="highlighted">
  <h2>Goals</h2>
  <ol>
    <li>Review Page Design</li>
    <li>Review types of layouts</li>
    <li>Introduce CSS Tricks</li>
  </ol>
</article>

---

## Intro to Remote CIS 275
`youtube: https://youtu.be/kV80r40AQKU`
See the Teams General channel for more detailed information on this.

---

## Review of Concepts

### Box Model: Block vs Inline
`youtube: https://youtu.be/9gXtfLTie2c`

- Concept where you consider every element on a page to be in a box
- Box is made up of content surrounded by padding, border, and margin
- Boxes can contain any number of other boxes, allowing for nesting of content
- Inline vs block elements act differently in the box model
- Block elements - the whole block acts as the containing box
- Inline elements - they don't force a line break, so the box is inline and exists immediately around the content
- Review Duckett book for a more thorough explanation

### Positioning
Chris Coyier is a really great CSS developer who maintains the CSS Tricks site. I'm sure it's come up as a search result when Googling anything relating to CSS. He does a great overview of positioning in CSS to expand on what we've learned in class. Watch this as a refresher on positioning!

`youtube: https://www.youtube.com/watch?v=gKvxlYCzJXw`

- Deals with manipulating the location of an element
- Multiple modes, but normal, float, and absolute are the most common
- Normal is default (applied to anything that does not specify a position)
- Read: https://css-tricks.com/almanac/properties/p/position/

---

## Page Design
`youtube: https://youtu.be/cRxrmwHTfyA`
- Keep the CRAP principles in mind always
- Use other websites for inspiration, but remember, you're the designer!
- We're going to look at specific elements of effective page design.

### Understanding Design
- Web vs Print
- Completely different media = different concerns
- Problematic ideal of final, "finished" product
- Web pages are NOT the same as print pages
- They're dynamic and interactive

### Page Design Concepts
- Visual Hierarchy - emphasis on important information, logical organization
- Visual balance - overall balance between text/visuals, contrast/organization
- Consistency
- CRAP: Contrast, Repetition, Alignment, Proximity
- Typography
- Color theory

### Pragmatic Practicalities
- Headers = site identity
- Footers = information about the site or organization
- Navigation structures - keep these limited
- Interface elements
- Watch page lengths

### Page Layout with HTML
- Use HTML5 structural elements!
- Everything else goes in a `DIV`
- Using container divs can make layout easier
- Changing the page window can break content without setting container widths
- Always test your design on multiple browsers and devices

### Page Layout Issues
- Keep line lengths short - improves legibility!
- Margins create white space - contrast, alignment, content organization
- Gutters - prevent columns from running together
- Way to create layout - adjusting margin and padding of divs (and other structural elements)

### Typography
- You never know how text will look on a user's screen - they have the control
- Not all users will have access to the fonts you want
- Use CSS to specify font families
- *Typically* in print you use sans-serif headers and serif body text.
- *Typically* you invert this for the web. *Typically*
- Keep it simple! Remember which fonts are common to multiple platforms.
- https://www.w3schools.com/cssref/css_websafe_fonts.asp

### Finally...mobile!
- Websites are no longer just for computers with large screens! They have to work on mobile devices...
- Responsive Web Design to come!

---

## Fixed Width Layouts
- Fixed width layouts do not change size as the user increases or decreases the the size of their browser window
- Measurements tend to be given in pixels
- Example on pg. Duckett 383

### Advantages
- Pixel values are accurate at controlling size/position
- Designer has greater control over layouts

### Disadvantages
- On big screens, you can end up with big gaps on either side
- If a user has a high res screen, it can look too small
- If user increases font size, it may not fit properly in the fixed width

---

## Liquid (fluid) Layouts
- Liquid layouts stretch and contract as a user increases or decreases the browser window
- Measurements tend to be given using percentages
- Example on pg. Duckett 385

### Advantages
- Pages expand to fill the entire browser window so there are no spaces around the page on a large screen
- If the user has a small window, the page can contract to fit it without the user having to scroll to the side.
- The design is tolerant of users setting font sizes larger than the designer intended (because the page can stretch).

### Disadvantages
- If you do not control the width of sections of the page then the design can look very different than you intended, with unexpected gaps around certain elements or items squashed together.
- If the user has a wide window, lines of text can become very long, which makes them harder to read.
- If the user has a very narrow window, words may be squashed and you can end up with few words on each line.

---

## More CSS

### Pseudoclasses
- Sometimes we want to change how elements look based on certain events that happen. One of the more common ones is the hover event.
- Remember `a:hover`? This is an example... but it can be applied to other elements.
- See many examples here: [Pseudo Class Selectors](https://css-tricks.com/pseudo-class-selectors/)

<iframe height="265" style="width: 100%;" scrolling="no" title="Pseudoclasses" src="https://codepen.io/kauffmanes/embed/rNVdMwV?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/kauffmanes/pen/rNVdMwV'>Pseudoclasses</a> by Emily
  (<a href='https://codepen.io/kauffmanes'>@kauffmanes</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Box Sizing
Look at this example:
```css
div.example {
    border: solid 1px red;
    padding: 5px;
    margin: 25px;
}

```

What is the height/width of the `div`? It's not explicitly set - it will take 100% of the width of the container and the height of the content inside. What if I set the width to 200px? *What* specifically is 200px wide?

The answer: it depends!

By default, when you set the width of an element, it only applies to the content, excluding the border thickness and the padding. This can make sizing layouts **really** annoying and difficult. But you can change this! Normally you want to avoid applying styles to every element, but here's an exception:

```css
/* sets everything to border-box */
html {
  box-sizing: border-box;
}

/* allows you to still set elements to context box if you want*/
*, *:before, *:after {
  box-sizing: inherit;
}
```

This changes that default (default is `content-box`) so that the padding and border are included in the width. I include this line in every css stylesheet that I make.

In depth explanation: [Box Sizing Best Practices](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

### Clearing Default Padding/Margin
- The browser applies a lot of styling by default
- You might not want this...especially the margins and paddings.
- Some people use **reset** or **normalize** stylesheets to get rid of this.
- Be careful though - you don't want to remove built in accessibility styling.
- To just get rid of the default padding/margins, you can do this:

```css
* { margin: 0; padding: 0; }
```
- Your elements will no longer have defaults set, so you'll need to do them explicitly where you want them.

---

### Centering Elements
To center an element in the middle of another:

```css
div {
  width: 100%;
  margin: 0 auto;
  clear: both;
}
```

You can use this to center a website in the browser.

```html
<div class="wrapper">
  <section>
    the main content
  </section>
</div>
```

```css
/* both of these wrapper styles default to these settings if it's a div */
.wrapper {
  width: 100%;
  display: block; 
}

section {
  width: 900px;
  margin: 0 auto;
  clear: both;
}
```

Try it out in the homework!

---

## Lecture Exercises
**Due**: Sunday, 11:59 PM, March 29<br/>

Through this exercise you’ll develop the ability to create basic layouts for web pages by using CSS for positioning. To successfully complete this task you should be able to exhibit mastery of the objectives from Homeworks 1 - 4, and you should also be able to:
1. Full understand the box model
1. Comprehend *why* you need to understand the Box Model
1. Research and understand the five modes of positioning
1. Generate carefully edited HTML and CSS with absolutely no errors (validate!)
1. Understand the differences between fixed and fluid layouts

Here's what you should do:
Generate two web pages using DIVs, HTML5 structural elements, and **internal** CSS for controlling layout and appearance.

You should make sure your work includes:
1. Two separate files – a fixed layout at 960px, and a fluid layout at 80%.
1. All the necessary styling for both appearance and layout.
1. Appropriate comments for all your code in both HTML and CSS.
1. Lorem ipsum filler text (traditional, or a fun one).
1. Any imagery you deem appropriate.

This represents the minimum you should do to successfully complete the exercise. You should feel free to go further – such practice will only improve your skills. All markup for this project should be in accordance with the HTML5 and CSS3 specifications. A super-simple fixed layout example might look like this:

![Fixed Layout Example](../../../images/fixedlayout.png)

---

## Next Class
- **Reading**: [All About Floats](https://css-tricks.com/all-about-floats)
- **Optional**: If you're still feeling confused about positioning in CSS, check this out: [CSS Positioning](https://css-tricks.com/almanac/properties/p/position/)

---

## Resources
1. <p id="feecite" style="font-style:italic">Fee, Sam. Timeline Update. Computing & Information Studies, Washington & Jefferson College.</p>
1. http://dabblet.com/
1. https://css-tricks.com/almanac/properties/p/position/
1. https://www.w3schools.com/cssref/css_websafe_fonts.asp
1. [Positioning Video](https://www.youtube.com/watch?v=gKvxlYCzJXw)
 