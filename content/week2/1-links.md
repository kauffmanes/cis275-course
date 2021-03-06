---
title: "All About Hyperlinks"
metaTitle: "Hyperlinks"
metaDescription: "Hyperlinks"
---

# Getting Started
Read Duckett, Chp. 4 on Links before continuing.  

`youtube:qlf4KZzcGcc`

# Types of Hyperlinks
You'll commonly see the following types of links:
  - links from **one website** to **another**
  - links from **one page** to **another on the same website**
  - links from **one part of a a web page** to **another part of the same page**
  - links that open in a **new browser window/tab**
  - links that **start your email program** and address a new email to someone

## Writing Links
```html
<a href="https://emilykauffman.com">Emily Kauffman</a>
<a href="https://emilykauffman.com/contact.html">Contact Page</a>
<a href="https://emilykauffman.com/contact">Contact Page</a>
```
**Displays as:**
[Emily Kauffman](https://emilykauffman.com)

## Linking to other sites
```html
<!-- from emilykauffman.com-->
<a href="http://samfee.net/courses.html">Fee's Site</a>
```

```html
<!-- from emilykauffman.com-->
<a href="courses.html">Fee's Site</a>
```
Why won't this second example work? What type of link is this? If I'm on emilykauffman.com, where will this link go?

## Linking to other pages on the same site
When linking to a page on the same site, you **don't** need to use an absolute URL.
```html
<!-- from emilykauffman.com-->
<a href="contact.html"></a>
```

Navigation example:
```html
<ul>
  <li><a href="index.html">Home</a></li>
  <li><a href="about-us.html">About</a></li>
  <li><a href="contact.html">Contact</a></li>
</ul>
```

**Displays as:**
- [Home](index.html)
- [About](about-us.html)
- [Contact](contact.html)

# Directory Structure
- On larger websites - organize your code by placing the pages for each different section of the site into a new folder.
- Folders on a website are sometimes referred to as directories.
- Every page and every image on the web has a URL composed of the domain name (ex. cis275.emilykauffman.com) and a path to the page or image (/syllabus)
- This is an **absolute URL** - you can get to it from anywhere by typing it in address bar

![directory structure of a web page](https://kauffeem-public.s3.amazonaws.com/cis275/directory.png)

## Relative URLs
- if all of your website files are in one folder, simply use the name of the file
- if your site is organized into subdirectories, you have to tell the browser how to get from the page it is *currently* on
to the page that you are *linking to*
- Duckett, page 84 for examples

## Email Links
Clicking an email link opens your mail application and populates the email address.
```html
<a href="mailto:ekauffman@washjeff.edu">Email me</a>
```
**Displays as:**
<a href="mailto:ekauffman@washjeff.edu">Email me</a>

## Opening Links in a new window
- Anchor tags (`<a>`) have an attribute called `target` that can control how the link opens
- In general, avoid this.
- If you do, can be a good practice to indicate that a tab will open in a new window
<!-- It's not the default behavior - might confuse users -->
<!-- Browsers can give you the option of opening a tab in a new user, so you don't necessarily have to force them to -->
- Good reason - if the user clicking a link would cause them to lose what they're doing on that page
- If you do do it, include the `rel="noopener" attribute`. [Why?](https://mathiasbynens.github.io/rel-noopener/)

```html
<a href="https://cis275.emilykauffman.com/syllabus" target="_blank" rel="noopener">Class Syllabus</a>
```

## Link to specific part of the same page
- Why would you do this? User doesn't have to scroll to find stuff.
- How to do this? Use the `id` attribute!
- Only use letters (or _)
- IDs have to be unique
- Can be used on any HTML element

```html
<h1 id="top">My site!</h2>
<ul>
  <li><a href="#browser">Browser</a></li>
  <li><a href="#html">HTML</a></li>
  <li><a href="#css">CSS</a></li>
</ul>
<h2 id="browser">Browser</h2>
<p>A browser is a software application used to locate, retrieve and display content on the World Wide Web, including webpages, images, video and other files<p>
<h2 id="html">HTML</h2>
<p>Stands for hypertext markup language<p>
<h2 id="css">CSS</h2>
<p>Stands for cascading stylesheets<p>
<p><a href="#top">Top<a/></p>
```
