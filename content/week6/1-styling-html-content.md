---
title: "HTML5 Structural Elements"
---

<article class="highlighted">
  <h2>Goals</h2>
  <ol>
    <li>Learn HTML5 structural elements</li>
    <li>Review for CSS test</li>
    <li>Practice</li>
  </ol>
</article>

## HTML5 Structural Elements
- HTML5 structural elements are basically specific *types* of DIVs
- Makes HTML elements more meaningful
- You'd more than likely have these elements on your page already...
- We'll cover this more after spring break! Just know what each of these do for now...
- `<header>` - the header, contains site title (not `<title>`)
- `<nav>` - navigation links
- `<main>` - primary content area
- `<section>` - thematic grouping of content, generic section, usually associated with a heading (h1-h6)
- `<aside>` - section outside of the primary page content
- `<footer>` - ...the footer
- `<article>` - page section that could be standalone (ex. blog post, comment, forum post)
- `<div>` - we can still use these when none of the above make sense!

```html
<!-- old way -->
<body>
  <div id="page">
    <div id="header">
      <div id="navigation">
        <ul>
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </div><!-- /navigation -->
    </div><!-- /header -->
    <div id="content">
      <div class="article">Some content</div>
      <div class="article">Some more content</div>
    </div><!-- /content -->
    <div id="sidebar">
      <p>Some content goes in the sidebar...</p>
    </div>
    <div id="footer"></div>
  </div><!-- /page -->
</body>
```

```html
<!-- new way -->
<body>
  <div id="page">
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    <div id="content">
      <article>Some content</article>
      <article>Some more content</article>
    </div><!-- /content -->
    <aside>
      <p>Some content goes in the sidebar...</p>
    </aside>
    <footer>footer content</footer>
  </div><!-- /page -->
</body>
```
