---
title: "More on Site Design"
metaTitle: "More on Site Design"
metaDescription: "More on Site Design"
---

First, go read Duckett, Chps. 15-17! Some of this will be review.

# Review of Concepts

## Box Model: Block vs Inline
- Concept where you consider every element on a page to be in a box
- Box is made up of content surrounded by padding, border, and margin
- Boxes can contain any number of other boxes, allowing for nesting of content
- Inline vs block elements act differently in the box model
- Block elements - the whole block acts as the containing box
- Inline elements - they don't force a line break, so the box is inline and exists immediately around the content
- Review Duckett book for a more thorough explanation

## Positioning
Chris Coyier is a really great CSS developer who maintains the CSS Tricks site. I'm sure it's come up as a search result when Googling anything relating to CSS. He does a great overview of positioning in CSS to expand on what we've learned in class. Watch this as a refresher on positioning!

`youtube: https://www.youtube.com/watch?v=gKvxlYCzJXw`

- Deals with manipulating the location of an element
- Multiple modes, but normal, float, and absolute are the most common
- Normal is default (applied to anything that does not specify a position)
- Read: https://css-tricks.com/almanac/properties/p/position/

# Page Design
`youtube:123`

- Keep the CRAP principles in mind always
- Use other websites for inspiration, but remember, you're the designer!
- We're going to look at specific elements of effective page design.

## Understanding Design
- Web vs Print
- Completely different media = different concerns
- Problematic ideal of final, "finished" product
- Web pages are NOT the same as print pages
- They're dynamic and interactive

## Page Design Concepts
- **Visual Hierarchy** - emphasis on important information, logical organization
- **Visual balance** - overall balance between text/visuals, contrast/organization
- Consistency
- **CRAP**: Contrast, Repetition, Alignment, Proximity
- Typography
- Color theory

## Pragmatic Practicalities
- Headers = site identity
- Footers = information about the site or organization
- Navigation structures - keep these limited
- Interface elements
- Watch page lengths

# Page Layout with HTML
- Use HTML5 structural elements!
- Everything else goes in a `DIV`
- Using container divs can make layout easier
- Changing the page window can break content without setting container widths

## Page Layout Issues
- Keep line lengths short - improves legibility!
- Margins create white space - contrast, alignment, content organization
- **Gutters** - prevent columns from running together
- Way to create layout - adjusting margin and padding of divs (and other structural elements)

## Typography
- You never know how text will look on a user's screen - they have the control
- Not all users will have access to the fonts you want
- Use CSS to specify font families
- *Typically* in print you use sans-serif headers and serif body text.
- *Typically* you invert this for the web. *Typically*
- Keep it simple! Remember which fonts are common to multiple platforms.
- https://www.w3schools.com/cssref/css_websafe_fonts.asp

## Finally...mobile!
- Websites are no longer just for computers with large screens! They have to work on mobile devices...
- Responsive Web Design to come!