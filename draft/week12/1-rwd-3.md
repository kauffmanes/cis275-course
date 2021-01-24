---
title: "CIS 275 Lecture 24: Responsive Layouts"
date: "2020-04-28"
path: /teaching/cis-275/responsive-layouts
tags: cis-275
---

<article class="highlighted">
  <h2>Goals</h2>
  <ol>
    <li>Responsive web design workflows</li>
    <li>Browser compatibility issues and testing</li>
  </ol>
</article>

## RWD: Workflows
`youtube: https://youtu.be/octNNGr3dss`

- Ask yourself: really *how* is the site going to be used?
- Know the user's context - does their priority change when their context changes?
- RWD is more than just making it look good on all devices and browsers: what does the user *need* from each context?
- Read: [What is Mobile First Design](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00)
- Progressive Enhancement vs. Graceful Degradation

```css
/* Boston Globe CSS Example, taken from Responsive Web Design by Ethan Marcotte */
/* Default, linear layout */
.page {
 margin: 0 auto;
 max-width: 700px;
 background: #fff;
 position: relative;
}

/* Small screen! */

@media screen and (min-width: 480px) { … }
@media screen and (min-width: 620px) { … }
@media screen and (min-width: 810px) { … }
@media screen and (min-width: 1400px) { … }
```

## Fun CSS
`youtube: https://youtu.be/thYpa64cLwg`

Here are some fun CSS links if you're looking to expand your CSS knowledge!
- https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- https://designshack.net/articles/css/new-css-techniques/
- https://css-tricks.com/almanac/properties/a/animation/
- https://css-art.com/

## In Class Exercises
Answer in the Lecture 24 channel:
1. Why might we want to take a mobile first approach?
1. What's the difference between progressive enhancement and graceful degradation? Why might you use one over the other?
1. Do you think that the *mobile first* philosophy is more similar to progressive enhancement or gradeful degradation? Why?

## Next Class
**Read**: Krug, Chps. 9-10

We're going to hold our usability study during our normal class time. This means that you should log in at 9 AM! You should let me know if this time doesn't work for you ASAP. The goal here is to show your website to your group members. They'll load it on their computers and review it. I made a Teams channel for each group, and I'll be dropping by each of them to ask questions and help facilitate the discussion. Please let me know if you can't access your channel.

**Partners:**
- Caity and Spencer
- Kate, Brie, and Anna
- Tyler and Aaron
- Brenna and Brooke
- Gretchen and Carly
- Gracy, Ty, and Easton
- Zach and Alex
