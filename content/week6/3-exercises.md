---
title: "Exercises"
metaTitle: "Week 6 Exercises"
metaDescription: "Week 6 Exercises"
---

import { quiz } from './6-quiz';

# Knowledge Check
<Quiz quiz={quiz} shuffle={true} />

# Exercises
## Exercise 1: Getting Familiar
1. Copy and paste this HTML document into a new file called `exercise1.html`.

```html
<!doctype html>
<html>
  <head>
    <title>Exercise 1 | Week 6</title>
  </head>
  <body>
    <h1>Welcome to my Page</h1>
    <h2>It's beautiful.</h2>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
    <p class="final">This is a final paragraph.</p>
  </body>
</html>
```

1. Add a `style` tag.
1. Add CSS to make all of the paragraphs red.
1. Make *only* the last paragraph blue and underlined.
1. Change the background of the HTML Body section to be yellow.
1. Make the background of the H1 green, with a 50% opacity, and a font size of 150%.
1. Make the H2 italicized and all caps.
1. Play around with some other stuff. Change colors, font sizes, styles, fonts.

# Exercise 2: External Style Sheet
1. Make a new HTML document called `exercise2.html`.
2. Add the normal HTML sections that we know and love.
3. Add this content to the body:

```html
<h1>Exercise 2</h1>
<div id="intro">
  <h2>Some robot speak</h2>
  <p>
    AFK exit nodes virus rootkit network website fsociety data center. Data
    dump backup fsociety rootkit decrypt. Terminal cyber security off the
    grid nodes. Operating system off the grid connect, code website routing
    protocol traffic <span class="highlighted">terminal</span> boot up offline system files dat file RUDY
    attack sys admin. Disconnect worm compromised, dat file traffic wipe
    Wi-Fi. Two-step verification virus malware.
  </p>
</div>
<div>
  <h2>The robot continues...</h2>
  <p>
    Protocol virus offline backup. Data dump emails anonymous website
    Wi-Fi <span class="highlighted">log file reboot</span> offline virus protocol network. Breach system
    files fiber connection DNS RUDY attack. Password malware Tor emails
    rootkit wipe exit nodes. Sys admin wipe IP dat file. Routing protocol
    code log file IRC off the grid, virus bonsoir data center. Tor system
    protocol IP data dump operating <span class="highlighted">system log</span> file anonymous disconnect
    offline worm RUDY attack code. 
  </p>
  <p>
    Password intercepting traffic bonsoir. Code timing out cyber security
    password website. Wipe RUDY attack traffic computer offline system.
    Intercepting traffic disconnect virus boot up. Brute-force data dump
    RUDY attack breach, <span>nodes</span> operating system fsociety routing protocol
    delete.
  </p>
</div>
```

4. Add a link to an external style sheet called `styles.css`.
5. Without touching the HTML file, add CSS to the styles.css stylesheet to make it look like the following image (as much as you can):
![Screenshot of exercise 2 web page](https://kauffeem-public.s3.amazonaws.com/cis275/lec10ex2.png)
6. Be sure to check the following: serif vs sans-serif fonts, colors, font weights, background colors, etc...

## Exercise 3: Try it out!
1. Take any of the exercises we did in a previous class or homework.
1. Add an external CSS file and try to change the appearance. The goal is to get familiar with the syntax!
1. When you feel confident with setting colors, font sizing, styling, and anything else in chapters 10-12, you're done! Have some fun with it.

## Exercise 4: Analysis
Find a website that you use often. Briefly analyze it in terms of the CRAP principles. How does it use (or not use) them? Post a paragrah or two in the week 6 chat on Teams.

When you've completed the following exercises (minus Exercise 4), make a zip (Week2-FirstNameLastName) and email it to me. These will be graded on "best effort".