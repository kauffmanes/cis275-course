---
title: "Exercises"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---

## In Class Exercises
<p id="exercises">Today we're going to write some code with fewer explicit instructions. Additionally, we've been doing a lot of coding in class, but we're going to add in some validation!</p>

**Scenario:**
You and a friend decide to start a web development business called **DubJay Designs**. Your friend comes up with a design for your marketing website, and you've agreed to code it.

**Some questions to ask yourself when you think you're done with each part:**
1. Does it validate?
1. Are child elements indented?
1. Are my images accessible?
1. Do all of my tags have an opening and ending tag?
1. Are element choices semantically correct?
1. Is my text formatted correctly (strong, emphasized)?

### Exercise 1: Home Page
Based on the image below (also called a "mockup"), create an HTML page called `index.html`. It should be HTML compliant and all formatting (line breaks, text formatting, paragraphs, images) should match. Set the title to "Home | Lecture 5". Once completed, validate your code using the <a target="_blank" href="http://validator.w3.org/#validate_by_input">W3 Validator</a>. Show me when you're done! The logo image to use is available for download below.

---

![Mockup of Dubjay Designs home page](../../../images/exercise1.png)

---

Logo to download and use:
<div class="left-img">
  <img style="width: initial" src="../../../images/dubjaydesignlogo.png" alt="DubJay Designs logo" />
</div>

---

### Exercise 2: Tables
Potential clients have been asking you about how much everything costs. Based on the image below, create a new HTML page called `pricing.html`. Set the title to "Pricing | Lecture 5". Include the same logo above the heading like you did in Exercise 1. Once completed, validate your code using the <a target="_blank" href="http://validator.w3.org/#validate_by_input">W3 Validator</a>. Show me when you're done!

![Mockup of Dubjay Designs pricing table](../../../images/exercise2.png)

### Exercise 3: Links
On the index.html page, add a link at the bottom of the page that links to the Pricing Page. On the pricing page, add a link to the bottom that says "Back to home" and takes you back to the index.html page.

### Exercise 4: Debugging
Copy and paste the following code into a file. Find and fix the syntax errors. When you think you're done, use the HTML validator to check.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>HTML debugging examples</title>
  </head>

  <body>
    <h1>HTML debugging examples</h1>
    <p>What causes errors in HTML?
    <ul>
      <li>Unclosed elements: If an element is <strong>not closed properly, then its effect can spread to areas you didn't intend
      <li>Badly nested elements: Nesting elements properly is also very important for code behaving correctly. <strong>strong <em>strong emphasised?</strong> what is this?</em>
      <li>Unclosed attributes: Another common source of HTML problems. Let's look at an example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a>
    </ul>
  </body>
</html>
```
---

## Homework
**Due**: Feb 11<br/>

This exercise gives you the opportunity to examine if you are keeping up with the additional content we’ve been covering in class. In addition to the items addressed in Homework #1, you should now be able to:
1. Understand where your files are located
1. Comprehend the differences between relative and absolute paths
1. Add hyperlinks to your html documents
1. Add imagery into your html documents
1. Build a table using html

There isn’t a grade for this. This exercise is simply a tool to indicate whether you are learning or not. We will use it as part of our next in-class exercises, so please do it! I may collect it to assess where the class is to help me adjust our schedule if needed.

Generate a small web site of four pages. For content, make three of the pages written assignments from other classes. In other words, take three assignments from earlier classes and mark them up as you did with your response to Exercise 1. Sprinkle in some additional links to relevant material and add in some images as well. Finally, link out to all of these files from the home page and create a table on that home page the includes the title of the work, the course it was written for, and the grade you think you should have received for it. The web site should include:
1. A home page with links out to three additional documents that you’ve marked up
1. Hyperlinks with both relative and absolute syntax
1. Some images that are at least tangentially related to the content
1. A table on the home page

In the end, you should end up with four html files. If you load them into a browser they should render correctly. Your hyperlinks should take you back and forth between the pages and/or sections of content. All of this depends on what content you are using – so everyone’s work and code will be a little different. 

All markup for this project should be in accordance with the HTML5 specification. Run it through the HTML validator to confirm.

---

## Next Class
- **Read**: Duckett, Chps. 7
- **Extra credit**: Visit a PAL tutor during hours. Have them sign a piece of paper with their name and date. Write down what they helped you with. Give it to me for a bonus point toward something.
- **Homework**: Finish in class exercises, Homework #2
- **Optional practice**: Make a codecademy.com account (free) and start the HTML track.

---

## Resources
1. _Duckett, John. Html &amp; CSS: Design and Build Websites. John Wiley and Sons, 2014._
1. Debugging Code - https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html
1. Assignment text taken from <a target="_blank" href="http://samefee.net">Sam Fee</a>
