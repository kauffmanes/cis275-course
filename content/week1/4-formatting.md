---
title: "Code Formatting"
metaTitle: "Code Formatting"
metaDescription: "Code Formatting"
---

# Why indent your code?
- shows hierarchy
- readability
- can tell where tags start and end easier
- shared codebase

## Bad:

```html
<div><p>this is a test</p><div>hi</div></div>
```

## Better, but also bad:
```html
<div>
<p>this is a test</p>
<div>hi</div>
</div>
```

## Best:
```html
<div>
  <p>this is a test</p>
  <div>hi</div>
</div>
```