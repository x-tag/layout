
=======
layout
====

A simple layout element that automatically stretches content to fill the parent element, with optional toggleable header and footer elements. 

Essentially a simple flexboxed component used to fill a screen or other parent element.

# Usage

```
<x-layout>
    <header>I'm the header!</header>
    <section>I'm the content!</section>
    <footer>I'm the footer!</footer>
</x-layout>
```

# Attributes

## ___maxcontent___

If set, the maxcontent attribute specifies that any header/footer in the layout should be minimized to give the main content full screen space.