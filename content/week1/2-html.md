---
title: "Hypertext Markup Language"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---

# Goals
1. Understand HTML structure
1. Learn about markup
1. Setup a development environment and write some code
1. Read Duckett, Chps. 1-3 before continuing

`youtube:TArOjyddBoM`

# Website Technologies
- **HTML** - hypertext markup language; describes the structure of web pages
- **CSS** - cascading stylesheets; Addresses appearance of web content, layout
- **JavaScript** - Used for additional interactions, a layer of behavior on your website
- **Tools** - browsers, editors, terminal, version control, etc
- **Backend** - server and server code, responsible for sending and receiving information that can be displayed on a website
- **Content Management System**

## Let's Build a House
In order to make websites, you'll have to learn three languages: **HTML**, **CSS**, and **JavaScript**. Why three languages?

![A pencil drawn house basic house](http://www.yedraw.com/buildings/house-5.jpg)

1. Tools - code editor, browsers, terminal
1. Materials/Structure - HTML

   <!-- We'll use the act of building a house as a metaphor. In order to build a house, you need tools (code editor, web browsers, command line, etc). After you have your tools, you need the building materials, such as the drywall, windows, doors...all of the items you'd need to assemble in order to build the house. This is the Hypertext Markup Language, or HTML. You can build a website using just HTML, but it won't be functional or pretty. -->

1. Styling, Decoration, Appearance - CSS

   <!-- In order to make the house beautiful, you need to style it! You'd come up with a number of rules to do so, such as "if a room is a bathroom, it gets tiled flooring", or "all of the walls in the living room are painted green". This is our second language, Cascading Stylesheets, or CSS. CSS is a stylesheet language used to describe the presentation of the HTML. It's a series of rules that describe how a piece of HTML should look if it matches a specified condition. For example, if an image appears in the footer of a website, it must have a blue border, or all buttons should have white text and an orange background. -->

1. Behavior - JavaScript

   <!-- Now that we have a beautiful and structurally sound house, we want to add some cool stuff to it, like a thermostat that kicks on the heat when the temperature drops below 70 degrees. Maybe we want a coffee pot that turns on every day at 6am. These are behaviors that you can add to your house to enhance your living experience. This is JavaScript! It adds a layer of behavior to your website. Maybe you want a banner to pop up on your website saying something along the lines of "we store your cookies" with an Accept button (anyone see more of these lately and understand why?). Another common website element that you might see is a slideshow of images that automatically cycles through images. This uses JavaScript. -->

1. Outside requests - backend
   <!-- Now say you want to order pizza. To do this, you'd pick up the phone and call your local pizza place. You'd give them your order and credit card information and then half an hour later, a pizza will arrive at your door. The pizza place is the backend server in this metaphor. You make a request to it for data and it returns a response. For example, when you log into Instagram, the website makes a request to an Instagram server somewhere asking for all of your users's data, and it returns the contents of your newsfeed (images, text, number of likes, etc). Many users can request data to the same backend and it can handle many responses, just like many hungry people can call the same pizza place and have it delivered. -->

## Content Management Systems
A content management systems (CMS) is software that allows a user to manage and edit a website without necessarily knowing how to code. Popular CMS's include Wordpress, Drupal, and Joomla.

![The Wordpress admin dashboard](https://ps.w.org/admin-page-framework/assets/screenshot-4.png?rev=996350)
**Fun facts:**

- In 2019, Wordpress powered 35% of the web
- Of all CMS-built sites, Wordpress makes up 60%
- Nearly 28% of all eCommerce sites use WooCommerce

In other words, if you're a web developer, you'll probably run into one at some point.

## Recap:
- The **HTML** is the structure. It contains the text, the images, and describes that makes up your website.
- The **CSS** is a set of rules that describe how the HTML should appear, like the color, font size, and arrangement on the page
- The **JavaScript** is the behavior layer and can change the appearance of the website when prompted (ex. clicking a button opening a modal).
- The **backend code** interacts with the website, responding to requests for data or handling data that the website sends to it, like when you upload a photo to Instagram.
- A **CMS** allows you to manage and edit a website with minimal or zero coding experience.

In this course, we will focus on HTML and CSS only, but it's important to understand how all of the components work together.

# Anatomy of HTML
Below is a basic example of a webpage. Don't worry too much about what it means - we'll dive into it soon.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>This is the title of the site!</title>
  </head>
  <body>
    <h1>This is the Main Heading</h1>
    <p>This text might be an introduction to the rest of
    the page. And if the page is a long one it might
    be split up into several sub-headings.<p>
    <h2>This is a Sub-Heading</h2>
    <p>Many long articles have sub-headings so to help
    you follow the structure of what is being written.
    There may even be sub-sub-headings (or lower-level
    headings).</p>
    <h2>Another Sub-Heading</h2>
    <p>Here you can see another sub-heading.</p>
  </body>
</html>
```

# Anatomy of an HTML element
HTML is composed of elements. The elements create the components of the page (the structure) and define the contents.

Most elements have a starting and ending tag like the `<p>` element above. There are a few that don't, which we refer to as **empty** elements. For example, `<br/>`. Empty elements can also be written like `<br>`.

![Breakdown of an HTML element's components](https://media.prod.mdn.mozit.cloud/attachments/2014/11/14/9347/c07aa313dbdd667585430f4eca354dbd/grumpy-cat-small.png)

```html
<img src="image.jpg" width="500" height="600" />
```

Elements can also have attributes with values.

```html
<!-- Elements can be nested: -->
<p>I am a <em>paragraph!</em></p>
```

Elements can be nested. When they are, the nested element is said to be the _child_ of the _parent_ element. In the example below, the `em` element is a child of the `p`. There can be many levels of nested elements (grandchildren, siblings, etc). This relationship between elements is known as the hierarchy.


# The HTML Element
The `<html>` element indicates that anything between it and the closing tag is HTML code. It contains everything except the doctype.

```html
<!doctype html>
<html>
  everything in here is html!
</html>
```

# The HEAD Element
The HTML Head is the contents of the `<head>` element. It contains information (metadata) about the page and unlike the HTML body, does not display when the page is rendered in a browser.

_Note_ - don't use any element in your page unless you know what it does and can explain it.

```html
<!-- Example HTML Head -->
<head>
  <meta charset="utf-8" />
  <title>My Website</title>
  <meta name="description" content="A cool website" />
  <meta name="author" content="Emily Kauffman" />
  <meta name="keywords" content="emily, kauffman, web design, web development, cis 275, washjeff" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./styles.css" />
</head>
```

- `<title>` - displays in the browser bar; auto-fills when bookmarking a page
- Meta tags - for SEO, additional functionality on mobile sites
- `link` - links to external scripts and CSS files
- Contains any internal styles and scripts
- <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag" target="_blank">More on the viewport meta tag</a>


# The BODY element
Everything in this element will display in the browser.

```html
<html>
  <body>
    All the displayed content goes here!
  </body>
</html>
```

# Headings
```html
<h1>This is a main heading</h1>
<h2>This is a level two heading</h2>
<h3>This is a level three heading</h3>
...
<h6>This is a level six heading</h6>
```
<!-- **Displays as:**
<h1>This is a main heading</h1>
<h2>This is a level two heading</h2>
<h3>This is a level three heading</h3>
<h4>This is a level three heading</h4>
<h5>This is a level three heading</h5>
<h6>This is a level six heading</h6> -->

# Paragraphs
```html
<p>I am a paragraph!</p>
```

# Don't Use!
CSS was created to help us separate our content from our styling. Don't use `<b>` or `<i>`, even though they're in the book. Instead, use `<strong>` and `<em>`.

# White space collapsing
The browser displays two or more spaces, as well as line breaks, as one space.
```html
<p>I am a sentence in a paragraph element.       I am a sentence in a paragraph element. 
      I am a sentence in a paragraph element.   I am a sentence in a paragraph element. I am a sentence in a paragraph element. 
I am a sentence in a paragraph element.</p>
```

<!-- **Displays as:**<br/>
I am a sentence in a paragraph element.       I am a sentence in a paragraph element. 
      I am a sentence in a paragraph element.   I am a sentence in a paragraph element. I am a sentence in a paragraph element. 
I am a sentence in a paragraph element. -->

# Lists
```html
<ol>
  <li>One!</li>
  <li>Two!</li>
  <li>Three!</li>
</ol>
```
<!-- **Displays as:**
<ol>
  <li>One!</li>
  <li>Two!</li>
  <li>Three!</li>
</ol> -->

```html
<ul>
  <li>One!</li>
  <li>Two!</li>
  <li>Three!</li>
</ul>
```
<!-- **Displays as:**
<ul>
  <li>One!</li>
  <li>Two!</li>
  <li>Three!</li>
</ul> -->

# What do you need to know to begin?
- Web pages are the rendering of coded text and script with other associated media types (graphics, video, audio, etc.)
- Three main components: the text content, the referenced content, and the markup
- Learn by looking at the source code of existing websites (Chrome devtools)
- <a target="_blank" href="http://samfee.net">samfee.net</a>

# Resources
1. [House Metaphor](https://btholt.github.io/intro-to-web-dev-v2/overview)
1. _Duckett, John. Html &amp; CSS: Design and Build Websites. John Wiley and Sons, 2014._
1. [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
1. [Wordpress Statistics](https://hostingtribunal.com/blog/wordpress-statistics/#gref)