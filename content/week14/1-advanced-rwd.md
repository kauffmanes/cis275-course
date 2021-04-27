---
title: "Responsive Layouts"
metaTitle: "Responsive Layouts"
metaDescription: "Responsive Layouts"
---

## RWD: Workflows
`youtube:QSUPPHsxCd0`

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

<!-- ## Fun CSS
`youtube: https://youtu.be/thYpa64cLwg`
 -->

## Practice Exercises
Answer in the Week 14 channel:
1. Why might we want to take a mobile first approach?
1. What's the difference between progressive enhancement and graceful degradation? Why might you use one over the other?
1. Do you think that the *mobile first* philosophy is more similar to progressive enhancement or gradeful degradation? Why?