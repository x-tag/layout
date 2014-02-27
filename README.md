
=======
layout
====

A simple layout element that automatically stretches content to fill the parent element, with optional toggleable header and footer elements. 

Essentially a simple flexbox-based component used to fill a screen or other parent element.

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

If set, the `maxcontent` attribute specifies that any header/footer in the layout should be minimized to give the main content full screen space.

## ___hide-trigger___

Activate various ways to hide/show the header and footer

Valid options:

* `tap` - a click on the section element (touch where appropriate) toggles showing or hiding of the header and footer
* `hover` - when the user hovers over the x-layout element the header and footer element are shown 
* `scroll` - the header and footer element hide when the user scrolls down, they show when scrolled back up beyond a buffered amount from the last scroll position    