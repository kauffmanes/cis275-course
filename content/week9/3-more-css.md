---
title: "More CSS"
metaTitle: "More CSS"
metaDescription: "More CSS"
---

# Pseudoclasses
- Sometimes we want to change how elements look based on certain events that happen. One of the more common ones is the hover event.
- Remember `a:hover`? This is an example... but it can be applied to other elements.
- See many examples here: [Pseudo Class Selectors](https://css-tricks.com/pseudo-class-selectors/)

<iframe height="265" style="width: 100%;" scrolling="no" title="Pseudoclasses" src="https://codepen.io/kauffmanes/embed/rNVdMwV?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/kauffmanes/pen/rNVdMwV'>Pseudoclasses</a> by Emily
  (<a href='https://codepen.io/kauffmanes'>@kauffmanes</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

# Box Sizing
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

# Clearing Default Padding/Margin
- The browser applies a lot of styling by default
- You might not want this...especially the margins and paddings.
- Some people use **reset** or **normalize** stylesheets to get rid of this.
- Be careful though - you don't want to remove built in accessibility styling.
- To just get rid of the default padding/margins, you can do this:

```css
* { margin: 0; padding: 0; }
```
- Your elements will no longer have defaults set, so you'll need to do them explicitly where you want them.

# Centering Elements
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

Try it out!