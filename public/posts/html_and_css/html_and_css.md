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
    - [Ways to center a div?](#q-ways-to-center-a-div)
    - [Media queries?](#q-media-queries)
    - [CSS Box model?](#q-css-box-model)
    - [Position?](#q-position)
    - [flexbox?](#q-flexbox)
    - [grid?](#q-grid)
    - [Does style1.css have to be downloaded and parsed before style2.css can be fetched?](#q-does-style1css-have-to-be-downloaded-and-parsed-before-style2css-can-be-fetched)
    - [What is the difference between span and div?](#q-what-is-the-difference-between-span-and-div)
    - [What is semantic HTML?](#q-what-is-semantic-html)
    - [display vs visibility](#q-display-vs-visibility)
    - [DOM reflow?](#q-dom-reflow)
    - [Inline, block and inline-block?](#q-inline-block-and-inline-block)
    - [What is specificity? How do u calculate specificity?](#q-what-is-specificity-how-do-u-calculate-specificity)
    - [What are the reasons to use preprocessor?](#q-what-are-the-reasons-to-use-preprocessor)
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

### Q. Does style1.css have to be downloaded and parsed before style2.css can be fetched?

```html
<head>
    <link href="style1.css" rel="stylesheet">
    <link href="style2.css" rel="stylesheet">
</head>
```

No, style1.css does not have to be downloaded and parsed before style2.css can be fetched.

The browser can initiate the download of both style1.css and style2.css in parallel as soon as it encounters the `<link>` tags. However, the order in which these stylesheets are applied depends on the order they are listed in the HTML. style1.css will be applied first, and then style2.css, which can override or build upon the styles defined in style1.css.

So, while they can be downloaded simultaneously, the browser will apply them in the order they are listed.

### Q. What is the difference between span and div?

div is a block element and span is inline element.
It is illegal to put block element inside inline element. div can have a p tag and a p tag can have a span. However, span can't have a div or p tag inside.

### Q. What is semantic HTML?

Semantic HTML refers to the use of HTML elements that convey meaning about the content they contain, rather than just defining how it looks. These elements provide context to both the browser and developers, making the content more accessible, easier to read, and better understood by search engines.

**Key Points about Semantic HTML:**
  - Improved Accessibility: Semantic elements are better recognized by screen readers, which helps improve accessibility for users with disabilities.
  - Better SEO: Search engines can more easily interpret the content of a web page when semantic tags are used, which can improve search engine rankings.
  - Code Readability: Semantic HTML makes the code easier to read and maintain by clearly describing the role of each section of content.
  - Standardized Structure: It encourages a consistent structure across web pages, which is particularly useful in larger projects or when multiple developers are involved.

Examples of Semantic HTML Elements:  
  - `<header>`: Represents the introductory content or a group of navigational links.  
  - `<nav>`: Defines a set of navigation links.  
  - `<article>`: Specifies independent, self-contained content.  
  - `<section>`: Groups related content together, typically with a heading.  
  - `<aside>`: Contains content that is tangentially related to the main content, such as sidebars or pull quotes.  
  - `<footer>`: Represents the footer of a document or section, often containing metadata or links.  
  - `<main>`: Represents the main content of the document, excluding sidebars, footers, etc.   
  - `<figure>`: Encapsulates media such as images, diagrams, or code snippets, along with an optional `<figcaption>`.  

Non-Semantic Elements:  
  - `<div>`: A generic container with no specific meaning.  
  - `<span>`: A generic inline container with no specific meaning.  


### Q. display vs visibility
`display: none` removes the element from the normal layout flow and allow other elements to fill in.    
`visibility: hidden` tag is rendered, it takes space in the normal flow but doesn't show it.    
`display: none` causes DOM reflow where is `visibility: hidden` doesn't.   

### Q. DOM reflow?
DOM reflow is a process in web browsers where the layout of the web page is recalculated to reflect changes in the Document Object Model (DOM). When the content, structure, or styling of a page changes, the browser may need to compute the positions, dimensions, and visibility of elements all over again to ensure that everything is displayed correctly. This process is called reflow.

**When Does Reflow Occur?**
Reflow can be triggered by various changes in the DOM or CSS, such as:
  - Adding or removing elements: Inserting or deleting elements in the DOM can trigger a reflow, as the browser needs to re-calculate the layout to accommodate these changes.
  - Changing an element’s size: Adjusting the width, height, padding, margin, or border of an element can cause a reflow.
  - Changing font size or content: Modifying the font size, line height, or text content of an element can trigger a reflow because the browser needs to adjust the layout based on the new text size or length.
  - Changing the window size: Resizing the browser window will often cause a reflow as the layout needs to adjust to the new viewport dimensions.
  - CSS changes: Modifying certain CSS properties like display, position, float, or overflow can lead to reflow.
  - Using JavaScript: Operations like element.style changes, manipulating the DOM (e.g., appendChild, removeChild), or querying layout properties (e.g., offsetWidth, offsetHeight) in JavaScript can trigger a reflow.

### Q. Inline, block and inline-block? 
`inline` 
  - The element does not start on a new line and only takes up as much width as necessary.
  - The element’s width and height cannot be manually set; they are dictated by the content inside.
  - Padding, margin, and border can be applied, but only the left and right margins and padding will push other elements; top and bottom padding, margins, and borders will not affect the surrounding content layout.
  - Commonly used for elements like `<span>`, `<a>`, and `<strong>`.
  
`block`
  - The element starts on a new line, taking up the full width available (by default).
  - The element’s width and height can be set manually.
  - Padding, margin, and border are respected on all sides.
  - Commonly used for elements like `<div>`, `<p>`, `<h1>` to `<h6>`, and `<section>`.
  
`inline-block`
  - The element does not start on a new line (like inline).
  - The element’s width and height can be set manually (like block).
  - Padding, margin, and border are respected on all sides.
  - Allows elements to sit next to each other, similar to inline, but with the ability to set dimensions and control layout, similar to block.
  - Commonly used for buttons, images, and other elements where precise sizing and layout control are needed while keeping them on the same line.

### Q. What is specificity? How do u calculate specificity?
Specificity is a process of determining which css rule will be applied to an element. It actually determines which rules will take precedence.
inline style usually wins then id then class value (or pseudo-class or attribute selector), universal selector (*) has no specificity.

### Q. What are the reasons to use preprocessor?
Allows you write css in high level with some special syntax (declaring variable, nested syntax, mathematical operations, etc.) and that is compiled to css. Preprocessor helps you to speed up develop, maintain, ensure best practices and also confirms concatenation, compression, etc.