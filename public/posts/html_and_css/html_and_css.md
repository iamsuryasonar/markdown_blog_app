---
title: Html and CSS prep
published: true
slug: html_and_css
date: '2024-02-16'
description: Html and CSS notes
categories:
  - Tech
  - Programming
  - Html/CSS
toc: |
    - [Q. Ways to center a div?](#q-ways-to-center-a-div)
    - [Q. Media queries?](#q-media-queries)
    - [Q. CSS Box model?](#q-css-box-model)
    - [Q. Position?](#q-position)
    - [Q. flexbox?](#q-flexbox)
    - [Q. grid?](#q-grid)
---


# HTML and CSS

### Q. doctype

Doctype is an instruction to the browser to inform about the version of html document and how browser should render it.

It ensures how element should be displayed on the page by most of the browser. And it also makes browser's life easier. otherwise, browser will guess.

```html
<!DOCTYPE html>
<meta charset="UTF-8">
```

> Note: this is the first tag of html file, don't need a closing tag and not case sensitive.

### Q. data-*

Allows you to store extra information/data in the DOM. Ypu can write valid html with embedded private data. You can easily access data attribute by using javascript.

```html
<div id="myDiv" data-theme="light"></div>
```

### Q. Ways to center a div?

 
* Using Flexbox (for both horizontal and vertical centering):

```css
.container {
  display: flex;
  justify-content: center; /* Horizontal centering */
  align-items: center; /* Vertical centering */
}
```


* Using CSS Grid (for both horizontal and vertical centering):

```css
.container {
  display: grid;
  place-items: center;
}
```


* Using absolute positioning and transform:

```css
.container {
  position: relative;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```


* Using margin: auto (for horizontal centering only):

```css
.container {
  width: 50%;
  margin: 0 auto;
}
```


* Using table-cell and vertical-align (for both horizontal and vertical centering):

```css
.container {
  display: table-cell;
  text-align: center; /* Horizontal centering */
  vertical-align: middle; /* Vertical centering */
}
```


* Using grid with justify-items and align-items (for both horizontal and vertical centering):

```css
.container {
  display: grid;
  justify-items: center; /* Horizontal centering */
  align-items: center; /* Vertical centering */
}
```




### Q. Media queries?

 Media queries are a fundamental component of responsive web design, allowing you to apply different styles to a webpage based on various characteristics of the user's device, such as screen size, orientation, and resolution. They enable you to create a consistent and user-friendly experience across different devices and screen sizes.

Media queries are commonly used in CSS to apply different styles based on the following criteria:



* Screen size: You can define specific styles for different screen widths to ensure that your website looks good on various devices, including desktops, tablets, and smartphones.

```css
@media screen and (max-width: 600px) {
  /* Styles for screens smaller than 600px */
}
```
* Device orientation: You can apply different styles based on the orientation of the device, allowing your layout to adapt to both landscape and portrait modes.

```css
@media (orientation: landscape) {
  /* Styles for landscape orientation */
}
```


* Device resolution: You can target specific device resolutions to ensure that your design looks crisp and well-defined on high-resolution screens.

```css
@media screen and (min-resolution: 300dpi) {
  /* Styles for high-resolution screens */
}
```



By using media queries, you can create a responsive and adaptive layout that provides an optimal viewing experience for users across different devices and screen sizes. Media queries are a crucial tool for modern web development, helping you build websites that are accessible and user-friendly on a wide range of devices and platforms.


### Q. CSS Box model?

 The CSS box model is a fundamental concept in web design that describes the structure of an HTML element as a rectangular box. It consists of several properties that define the content, padding, border, and margin of an element, determining its overall dimensions and layout within the web page. The CSS box model includes the following components:



* Content: It represents the actual content of the element, such as text, images, or other HTML elements.
* Padding: Padding is the space between the content and the element's border. It provides additional space inside the element, separating the content from the border.
* Border: The border is a line that surrounds the padding and content of the element. It can be customised with various styles, colors, and widths.
* Margin: Margin is the space outside the border, providing clearance between the element and other elements in the layout.

The overall size of an element in the CSS box model can be calculated as follows:


```
Total element width = width + (left padding) + (right padding) + (left border) + (right border) + (left margin) + (right margin)
Total element height = height + (top padding) + (bottom padding) + (top border) + (bottom border) + (top margin) + (bottom margin)
```


Understanding the CSS box model is essential for designing and laying out web pages effectively. By properly managing the content, padding, border, and margin properties of elements, you can create visually appealing and well-structured layouts that provide a consistent and intuitive user experience.


### Q. Position?

 The position property is used to specify the positioning behaviour of an element within its containing element or the viewport. The position property can take several values, each of which controls how the element is positioned and interacts with other elements on the page. The different values for the position property are:



* Static: This is the default value. Elements with position: static are positioned according to the normal flow of the document. Top, right, bottom, left, and z-index properties have no effect on statically positioned elements.
* Relative: Elements with position: relative are positioned relative to their normal position. Using the offset properties (top, right, bottom, left) will move the element from its normal position, but the space it originally occupied will still be reserved.
* Absolute: Elements with position: absolute are positioned relative to the nearest positioned ancestor (an ancestor with a position value of anything other than static) or to the containing block. If there is no positioned ancestor, it is positioned relative to the initial containing block (viewport).
* Fixed: Elements with position: fixed are positioned relative to the viewport, meaning they will remain fixed in their position even when the page is scrolled.
* Sticky: Elements with position: sticky are positioned based on the user's scroll position. It behaves like position: relative until the element reaches a specified threshold, at which point it becomes position: fixed.


### Q. flexbox?

 Flexbox (Flexible Box) is a layout model that provides an efficient way to distribute space among items in a container, even when their size is unknown or dynamic. Flexbox is designed to simplify the process of creating flexible and responsive layouts without using float or positioning properties. It offers a more effective way to align, distribute, and reorder elements within a container.

To use Flexbox, you apply the display: flex property to the container (parent) element. This allows the child elements to become flexible items that can be easily manipulated using various Flexbox properties. Some of the key properties used in Flexbox include:


* flex-direction: Defines the direction in which the flex items are placed in the flex container. It can be set to row, row-reverse, column, or column-reverse.
  
* justify-content: Aligns flex items along the main axis of the flex container. It can be set to flex-start, flex-end, center, space-between, space-around, or space-evenly.
  
* align-items: Aligns flex items along the cross axis of the flex container. It can be set to stretch, flex-start, flex-end, center, or baseline.
  
* flex-wrap: Specifies whether flex items should wrap or not if they can't fit in the container along the main axis. It can be set to nowrap, wrap, or wrap-reverse.
  
* align-content: Aligns multiple lines of flex items along the cross axis. It is similar to align-items but it aligns lines of items instead of individual items.


### Q. grid?

 CSS Grid Layout, often referred to as CSS Grid, is a two-dimensional layout system that allows you to create complex grid-based layouts in CSS. It provides a powerful and intuitive way to design web layouts by dividing a webpage into rows and columns, making it easier to position and align elements within the grid.

Key features of CSS Grid include:



* Grid Container and Grid Items: CSS Grid involves two main components - the grid container and grid items. The grid container is the parent element that holds the grid items, which are the children elements that are positioned within the grid.
* Grid Lines and Tracks: Grid lines are the horizontal and vertical lines that divide the grid into rows and columns. Tracks are the spaces between the grid lines where grid items are placed.
* Grid Areas: Grid areas are rectangular spaces within the grid layout that can contain one or more grid items. They can be defined using the grid-template-areas property.
* Explicit and Implicit Grids: CSS Grid allows you to create both explicit and implicit grids. Explicit grids are defined explicitly using the grid-template-rows and grid-template-columns properties, while implicit grids are generated automatically based on the content.
* Alignment and Distribution: CSS Grid provides various properties for aligning and distributing grid items, such as justify-items, align-items, justify-content, and align-content.

