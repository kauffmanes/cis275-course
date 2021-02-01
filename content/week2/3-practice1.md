---
title: "Links and Images Practice"
metaTitle: "Links and Images Practice"
metaDescription: "Links and Images Practice"
---

**Scenario**: you've decided that you want to make a website to hold some of your favorite writing, including outside sources and your own. When doing the exercises, *avoid copying and pasting HTML code from old exercises or the web* since it makes learning it harder. Soon, it'll become muscle memory.

## Exercise 1: Home Page
1. Create a folder to hold your topic 1 activities.
1. Create a new web page labeled `index.html`. In the HEAD section, make sure you have the charset and title defined. The title should read 'Home | Week 2'.
1. Add author and description meta tags.
1. In the body, add content to the document so that you have a level one (main) heading that says 'Welcome to my Writing Website!'.
1. Find a poem online that has at least twenty lines. Copy and paste it into your index.html and mark it up so it can be viewed in the browser. Add the title of the poem as a level two heading. *Note - sometimes when you copy and paste from a browser, it can include special characters that you don't want. If this happens, copy and paste into a basic text editor like Notepad and then copy and paste into your HTML.*
1. Paragraphs should be displayed as paragraphs and line breaks should be present where displayed.
1. At the bottom, add another paragraph that says who the poem was written by. *Emphasize* the author's name.

## Exercise 2: Accessibility Write Up
### Part A:
1. Take your accessibily writeup from week 1 and put it in your Week 2 folder. Rename it `accessibility.html` and make sure that you can view it in the browser.
1. Set the title to 'Accessibility | Week 2'.
1. If your `accessibility.html` page doesn't have one already, add a level one heading that labels your writing response.
1. In your index.html, add an unordered list before the poem section. Add a list item that contains a hyperlink to your accessibility page. When you click on the hyperlink, it should take you to your new page.
1. In your accessibility.html page, make another unordered list at the top of the page (same thing as the previous step), but make the hyperlink take you to the home page (your index.html).
1. At the bottom of the accessibility page, add a paragraph that includes a link to the article that you read for the assignment. Give it descriptive link text. When clicked, it should open in a **new tab**.
1. Below the article link, add another paragraph that contains a link that scrolls you to the top of the accessibility page (*hint* - if you get stuck, check out the code examples in the Links lecture).

### Part B:
1. Add a new page called `contact.html` that includes all of the normal HTML page set up tags (doctype, html, head, etc). Set the title to 'Contact | Week 2'.
1. Add a level one heading that says 'Contact Me'.
1. Add an email link that, when clicked, opens an email client with the "To" field populated.
1. In your index.html and accessibility.html pages, add another link in the unordered list that links to the contact.html page.
1. In the contact.html page, add an unordered list that contains links to the accessibility.html and index.html pages.

Basically, at this point, you should be able to link to all other site HTML pages from the one you're on.

## Exercise 3: Images
1. In your contact page, add a paragraph with a short description about yourself.
1. Find a picture of yourself (download from social media, email it to yourself from your phone and then download, etc). If you don't want to use a picture of yourself, use a picture of a celebrity that you like.
1. Place the image in your week 2 folder.
1. Add an image tag to your contact.html page before the description paragraph. Be sure to include alt text. The `src` attribute should point to your image.
1. Find a second image online that depicts an activity that you enjoy. Get the **absolute link** to this file (to do this on Chrome, you right click on the image and copy the image location. Let me know if you get hung up on other browsers).
1. Make another image tag after the photo of yourself. Set the `src` attribute to the copied absolute link from the previous step.
1. Test in the browser and make sure that both images display.