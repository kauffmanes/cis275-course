---
title: "Filenames and URLs"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---

# What do you need to know to begin?
- Web pages are the rendering of coded text and script with other associated media types (graphics, video, audio, etc.)
- Three main components: the text content, the referenced content, and the markup
- Learn by looking at the source code of existing websites (Chrome devtools)
- <a target="_blank" href="http://samfee.net">samfee.net</a>

---

# Filenames and URLs
An HTML document is just a text document and you save it in the same way you'd save a Notepad text file.

- Home page HTML document naming convention: **index.html**
- Web is case-sensitive: filenames should be lowercase, exclude special characters, including spaces
- URLs can be **relative** or **absolute** - What's the difference?
- Browser knows if it's relative or absolute

<!-- so if I type an absolute URL into the address bar, it should go to the exact resource. if I type a relative, it won't. but if I type it relative to anothr site, it will -->


```html
<!-- Assuming current URL is emilykauffman.com/teaching/cis-275 -->
<html>
  <body>
    <a href="https://emilykauffman.com/teaching/cis-275/syllabus">
    <a href="/syllabus">
  </body>
</html>
```