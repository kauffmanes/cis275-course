---
title: "Advanced CSS"
metaTitle: "Advanced CSS"
metaDescription: "Advanced CSS"
---

Before continuing, read **Duckett, Chps. 13-15**.

`youtube:Ean77n4-MG8`

# Goals
1. Get more CSS practice
1. Box model
1. Lists, tables, and forms

# Review of Selectors
- An **id** is a unique identifier for a **specific** element
- A **class** can be associated with a **group** of elements

# Box Model
- Remember how I said to pretend every element is in a box?
- We can make changes to that box!
- We can control dimensions, create borders, set **margin** and **padding**, and show/hide boxes.
- After you can control the appearance of the boxes, we can create layouts.

## Box Dimensions
- By default, a box is sized just big enough to hold its contents
- You can specify dimensions using: *pixels*, *percentages*, or *ems*.
- When you use %'s, the size is relative to the browser window
- If a box is inside another box, it's relative to the size of its container
- Min/max-widths/heights

<iframe height="265" style="width: 100%;" scrolling="no" title="Lec11 Boxes" src="https://codepen.io/kauffmanes/embed/JjdWKMz?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/kauffmanes/pen/JjdWKMz'>Lec11 Boxes</a> by Emily
  (<a href='https://codepen.io/kauffmanes'>@kauffmanes</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Box Model
![Box Model](https://miro.medium.com/max/1474/1*gq1B7v2_gDEi3jkAwAvZNQ.png)

## Block, inline, inline-block
- The `display` property lets you turn block elements into inline elements and vice-versa
- You can also set it to `inline-block`, which makes the element appear inline but keeps some of the block-level features
- https://css-tricks.com/almanac/properties/d/display/
- Common use case:
<iframe height="265" style="width: 100%;" scrolling="no" title="GRJWLyv" src="https://codepen.io/kauffmanes/embed/GRJWLyv?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/kauffmanes/pen/GRJWLyv'>GRJWLyv</a> by Emily
  (<a href='https://codepen.io/kauffmanes'>@kauffmanes</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

# Styling Lists, Tables, and Forms
We aren't covering this in class since the book does a great job of explaining this and giving examples. You'll get some practice here on the homework.
