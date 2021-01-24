---
title: "Intro to Responsive Web Design"
---

<article class="highlighted">
  <h2>Goals</h2>
  <ol>
    <li>Gain an understanding of Responsive Web Design</li>
    <li>Understand the flexible grid</li>
  </ol>
</article>

## Responsive Web Design: What is it? Why do we care?
`youtube: https://youtu.be/T-rheePd54o`
[Slides](https://docs.google.com/presentation/d/1raO-flSpagWhIFQzOgMjl_2ZXvJhWCCshcsfuxsw9kg/edit?usp=sharing)

### Flexible Grid: Intro
`youtube: https://youtu.be/U_kVPpRfP44`
- Fixed (`px`) to flexible (`em`'s)
- Formula: `target / context = result`
- https://github.com/kauffmanes/rwd-intro

### Flexible Grids
`youtube: https://youtu.be/VWoFaMO96-Q`
- Turning a layout into something flexible
- Use the formula!

## In Class Exercises
We're going to take an inflexible, fixed layout and convert it into a flexible, fluid layout using the `target / context = result` formula. **there's no need to hand this in. This is for practice! You'll need to have a flexible layout for your final project.**

### Setup
1. Set up a new project to hold today's exercises.
2. Create an index page and add the following as the body:

```html
<body>
    <div class="container">
    <header>
      <h1>I'm an inflexible layout</h1>
    </header>
    <main>
      <p>lorem ipsum main content</p>
      <p>lorem ipsum main content</p>
      <p>lorem ipsum main content</p>
      <p>lorem ipsum main content</p>
      <p>lorem ipsum main content</p>
      </main>
    <aside>
      <p>sidebar content</p>
      <p>sidebar content</p>
      <p>sidebar content</p>
      <p>sidebar content</p>
      <p>sidebar content</p>
    </aside>
    <footer>
      <p>footer content</p>
      <p>footer content</p>
      <p>footer content</p>
    </footer>
    </div><!-- /container -->
</body>
```
3. Add a stylesheet and add the following:

```css
.container {
	width: 960px;
	margin: 0 auto;
}

header {
	background: #ccc;
}

main {
	width: 600px;
	float: left;
	background: firebrick;
}

aside {
	width: 360px;
	float: right;
	background: cornflowerblue;
}

footer {
	clear: both;
	background: forestgreen;
}
```

4. Download/copy and paste Eric Meyer's reset stylesheet and add it to your site.
5. When you open the site, it should be a basic inflexible (fixed layout).

### Change to Flexible
1. Get rid of the 960 pixel page width on the .container. Set it to some % of the browser window. This will be the container for all of our content.
1. Use the formula to convert the `main` column into a proportional percentage.
1. Use the formula to convert the `aside` column into a proportional percentage.

### Feedback
I threw a lot of information at you today. If you need more examples or a further explanation, please let me know. Comment in the Lecture 22 channel:
1. One thing you've learned or found interesting.
1. One question or confusion that you have.

## Next Class
Ingredient #2: Responsive media/images, media queries