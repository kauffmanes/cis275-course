---
title: "Code Formatting"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---

Why indent your code?
- shows hierarchy
- readibility
- can tell where tags start and end easier
- shared codebase

### Bad:

```html
<div><p>this is a test</p><div>hi</div></div>
```

### Better, but also bad:
```html
<div>
<p>this is a test</p>
<div>hi</div>
</div>
```

### Best:
```html
<div>
  <p>this is a test</p>
  <div>hi</div>
</div>
```