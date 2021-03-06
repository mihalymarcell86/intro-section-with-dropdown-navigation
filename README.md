# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshots/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/mihalymarcell86/intro-section-with-dropdown-navigation](https://github.com/mihalymarcell86/intro-section-with-dropdown-navigation)
- Live Site URL: [https://mihalymarcell86.github.io/intro-section-with-dropdown-navigation/](https://mihalymarcell86.github.io/intro-section-with-dropdown-navigation/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS using BEM
- Vanilla JavaScript
- Mobile-first workflow

### What I learned

I used this project to experiment with the "checkbox-hack". I found that this technique has more limitations than advantages:

- Form controls are not used as intended, hence they break the semantics of the HTML.
- Form controls' functionality is too restricted to solve more complex issues, _e.g._, radio buttons cannot be unselected, checkboxes cannot be configured so that only one of a group can be checked, etc.
- The overcomplicated CSS selectors jumble up specificity and thus defeat one of the key benefits of using BEM.

The menu behavior was ultimately configured in vanilla JS.

---

I was debating with myself whether the navbar interaction should be hover or click. I did some research and found some useful articles (see below) that broadened my understanding. I decided to implement click-driven dropdowns.

---

I realized, how the `min()` / `max()` / `clamp()` functions can be used to reduce the amount of media queries in CSS, I used them composed with my `lerp()` function to effect liquid layout.

---

I learned that the `<svg>` element can't take the `hidden` attribute. An alternative could be setting `visibility="invisible"` on the `path` attribute instead, or using `display: none`.

---

Transitions will not work on indefinite dimensions, like `auto`, `min-content`. I researched some workarounds, which see below.

### Useful resources

- [Navigation drop-downs. Should they be hover or click?](https://www.liquidlight.co.uk/blog/navigation-drop-downs-should-they-be-hover-or-click/) - Usability issues of hover dropdowns
- [Hover vs. Click Navigation](https://medium.com/ashleycrutcher/hover-vs-click-navigation-a260a8d51d81) - Polls on UI preferences and their conclusions.
- [Using CSS transitions on auto dimensions](https://css-tricks.com/using-css-transitions-auto-dimensions/)

## Author

Marcell Mih??ly

- Frontend Mentor - [@mihalymarcell86](https://www.frontendmentor.io/profile/mihalymarcell86)
