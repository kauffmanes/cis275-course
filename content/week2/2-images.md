---
title: "Images"
metaTitle: "Intro to Images"
metaDescription: "Intro to Images"
---

Read **Duckett, Chp. 5** on Images before continuing.

- Why use images?
- Remember accessibility
- Online images are subject to copyright
- Good practice: use images folder to hold all images

## Adding Images
```html
<!-- image is in same directory as html file -->
<img src="cat.png" alt="my cat sitting on a couch" />

<!-- image is in an images folder -->
<img src="images/myimage.png" alt="my cat sitting on a couch" />
```

If an image is decorative and has one meaning (such as a graphic dividing line), include the `alt` attribute but make the value an empty string ("").

## Height and Width
You can specifiy height and width so when the page loads, it leaves room for the image. This is often overwritten in CSS.
```html
<img src="images/myimage.png" alt="my cat sitting on a couch" height="300" width="400"/>
```

### Placement
- HTML images display *inline*, as opposed to *block*
- They can be placed before paragraphs, inside paragraphs but before text, or in a paragraph in the middle of some text.
- See Duckett, pg. 101

## Creating Images
**Three rules:**

1. Save images in the right format
1. Save images at the right size
1. Use correct resolution - book says 72dpi. This is old! Use 150dpi for now.

![Bugs bunny and Daffy arguing over the pronunciation of GIF](https://www.thesun.co.uk/wp-content/uploads/2017/06/jif-or-gif.gif)

## Transparency
- "see-through"
- straight edges and 100% transparent - GIF
- curved/rounded edges, partially opaque - PNG

# Figure and Figcaption
If your image has a caption, use `<figure>` and `<figcaption>`.
```html
<figure>
  <img src="images/capecod.jpg" alt="birds flying by the sea" />
  <br />
  <figcaption>This cat was rescued from the streets of Pittsburgh and now lives in a house downtown.</figcaption>
</figure>
```

Things are getting more complicated... don't try to memorize every detail! Use your book as a reference. Practicing often will cause you to learn them.

<!-- 
# Recap
Things are getting more complicated... don't try to memorize every detail! Use your book as a reference. Practicing often will cause you to learn them.
- hyperlinks - link pages together
- can link to the page you're on or another page, start emails, etc
- images - format, sizing, resolution -->

<!-- # Knowledge Check
1. What's the difference between an absolute and relative URL?
1. What does the `href` of an email link look like?
1. What are the three different image formats we discussed? Why would you choose one over another?
1. Why set a height/width on an image tag?
1. What's the difference between an **inline** element and a **block** element? -->

<!-- ## In Class Exercises
**Scenario**: you've decided that you want to make a website to hold some of your favorite writing, including outside sources and your own.

*When doing the exercises, avoid copying and pasting HTML code from old exercises or the web since it makes learning it harder. You have the class time to make this become muscle memory.*

### Exercise 1: Home Page
1. Create a folder to hold your lecture 4 activities.
1. Create a new web page labeled `index.html`. In the HEAD section, make sure you have the charset and title defined. The title should read 'Home | Lecture 4'.
1. Add author and description meta tags.
1. In the body, add content to the document so that you have a level one (main) heading that says 'Welcome to my Writing Website!'.
1. Find a poem online that has at least twenty lines. Copy and paste it into your index.html and mark it up so it can be viewed in the browser. Add the title of the poem as a level two heading. *Note - sometimes when you copy and paste from a browser, it can include special characters that you don't want. If this happens, copy and paste into a basic text editor like Notepad and then copy and paste into your HTML.*
1. Paragraphs should be displayed as paragraphs and line breaks should be present where displayed.
1. At the bottom, add another paragraph that says who the poem was written by. Emphasize the author's name.

### Exercise 2: Accessibility Write Up
#### Part A:
1. Take your homework HTML page that was due today and put it into your Lecture 4 folder. Rename it `accessibility.html` and make sure that you can view it in the browser.
1. Set the title to 'Accessibility | Lecture 4'.
1. If your accessibility.html page doesn't have one already, add a level one heading that labels your writing response.
1. In your index.html, add an unordered list before the poem section. Add a list item that contains a hyperlink to your accessibility page. When you click on the hyperlink, it should take you to your new page.
1. In your accessibility.html page, make another unordered list at the top of the page (same thing as the previous step), but make the hyperlink take you to the home page (your index.html).
1. At the bottom of the accessibility page, add a paragraph that includes a link to the article that you read for the assignment. Give it descriptive link text. When clicked, it should open in a **new tab**.
1. Below the article link, add another paragraph that contains a link that scrolls you to the top of the accessibility page (*hint* - if you get stuck, check out today's code examples).

#### Part B:
1. Add a new page called `contact.html` that includes all of the normal HTML page set up tags (doctype, html, head, etc). Set the title to 'Contact | Lecture 4'.
1. Add a level one heading that says 'Contact Me'.
1. Add an email link that, when clicked, opens an email client with the "To" field populated.
1. In your index.html and accessibility.html pages, add another link in the unordered list that links to the contact.html page.
1. In the contact.html page, add an unordered list that contains links to the accessibility.html and index.html pages.

Basically, at this point, you should be able to link to all other site HTML pages from the one you're on. -->

<!-- ### Exercise 3: Images
1. In your contact page, add a paragraph with a short description about yourself.
1. Find a picture of yourself (download from social media, email it to yourself from your phone and then download, etc). If you don't want to use a picture of yourself, use a picture of a celebrity that you like.
1. Place the image in your lecture 4 folder.
1. Add an image tag to your contact.html page before the description paragraph. Be sure to include alt text. The `src` attribute should point to your image.
1. Find a second image online that depicts an activity that you enjoy. Get the **absolute link** to this file (to do this on Chrome, you right click on the image and copy the image location. Let me know if you get hung up on other browsers).
1. Make another image tag after the photo of yourself. Set the `src` attribute to the copied absolute link from the previous step.
1. Test in the browser and make sure that both images display.
1. Show me when you're done. -->

## Resources
1. _Duckett, John. Html &amp; CSS: Design and Build Websites. John Wiley and Sons, 2014._
1. [Link Targets](https://adrianroselli.com/2020/02/link-targets-and-3-2-5.html)
1. [Complete Guide to Links and Buttons](https://css-tricks.com/a-complete-guide-to-links-and-buttons/)