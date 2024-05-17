---
title: Vanilla apis
slug: vanilla_apis
date: '2024-04-27'
description: Vanilla api's that a web developer should know
categories:
  - Tech
  - Programming
toc: |
    - [DOM Manipulation](#dom-manipulation)
      - [Traversal](#traversal)
      - [Manipulation](#manipulation)
      - [Attributes](#attributes)
      - [Content](#content)
      - [Style](#style)
    - [Local Storage](#local-storage)
    - [Fetching Data](#fetching-data)
    - [Clipboard](#clipboard)
    - [URL Manipulation](#url-manipulation)
    - [Web Workers](#web-workers)
    - [WebSockets](#websockets)
    - [Notifications](#notifications)
    - [File and Blob Handling](#file-and-blob-handling)
    - [Media and Streams](#media-and-streams)
    - [Geolocation](#geolocation)
    - [Performance Monitoring](#performance-monitoring)
    - [Animation](#animation)
    - [Drag and Drop API](#drag-and-drop-api)
    - [History API](#history-api)
    - [Fullscreen API](#fullscreen-api)
    - [Visibility API](#visibility-api)
    - [Canvas API](#canvas-api)
    - [Web Audio API](#web-audio-api)
    - [IndexedDB](#indexeddb)
    - [WebGL](#webgl)
    - [Service Workers](#service-workers)
    - [Push API](#push-api)
---

## DOM Manipulation

### Traversal  
`parentNode.childNodes`
Returns a live NodeList containing all child nodes of the given parent node.

```javascript
const parent = document.getElementById('parentElement');
const children = parent.childNodes;
element.firstChild, element.lastChild
```
Returns the first or last child node of the given parent node.
```javascript
const firstChild = parent.firstChild;
const lastChild = parent.lastChild;
element.nextElementSibling, element.previousElementSibling
```
Returns the next or previous sibling element of the given element.

```javascript
const nextElement = element.nextElementSibling;
const prevElement = element.previousElementSibling;
```
###  Manipulation  
`element.appendChild()`
Appends a node as the last child of the specified element.

```javascript

const newElement = document.createElement('div');
parent.appendChild(newElement);
element.removeChild()
Removes a child node from the DOM.
```
```javascript

parent.removeChild(childElement);
element.replaceChild()
```
Replaces one child node of the specified parent node with another.

```javascript
parent.replaceChild(newChild, oldChild);
```
### Attributes
`element.getAttribute(), element.setAttribute()`
Get or set the value of an attribute on the specified element.

```javascript

const attrValue = element.getAttribute('id');
element.setAttribute('class', 'newClass');
element.classList
Provides methods to manipulate the class attributes of an element.
```
```javascript
element.classList.add('newClass');
element.classList.remove('oldClass');
element.classList.toggle('active');
```
### Content  
`element.innerHTML`
Gets or sets the HTML content of an element.

```javascript
element.innerHTML = '<p>New content</p>';
const htmlContent = element.innerHTML;
element.textContent
```
Gets or sets the text content of an element.

```javascript
element.textContent = 'New text content';
const textContent = element.textContent;
```
### Style  
`element.style`
Accesses the inline CSS styles of an element.

```javascript
element.style.color = 'red';
element.style.backgroundColor = '#f0f0f0';
getComputedStyle()
```
Gets the computed style of an element.

```javascript
const computedStyle = window.getComputedStyle(element);
const backgroundColor = computedStyle.backgroundColor;
```
## Local Storage
localStorage.setItem(key, value)
Stores a value in localStorage.

```javascript
localStorage.setItem('username', 'JohnDoe');
localStorage.getItem(key)
```
Retrieves a value from localStorage.

```javascript
const username = localStorage.getItem('username');
```
## Fetching Data
fetch()
Performs a network request.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
  ```
## Clipboard
navigator.clipboard.writeText(text)
Writes text to the clipboard.

```javascript
navigator.clipboard.writeText('Hello, world!')
  .then(() => console.log('Text copied to clipboard'));
  ```
## URL Manipulation
URLSearchParams
Work with the query string of a URL.

```javascript
const params = new URLSearchParams(window.location.search);
console.log(params.get('query')); // Assuming URL is "example.com?query=test"
```
## Web Workers
new Worker()
Creates a new Web Worker.

```javascript
const myWorker = new Worker('worker.js');
myWorker.postMessage('Hello, world!');
```
## WebSockets
new WebSocket(url)
Creates a WebSocket connection.

```javascript
const socket = new WebSocket('wss://example.com/socketserver');
socket.onmessage = (event) => {
  console.log(`Data received: ${event.data}`);
};
```
## Notifications
Notification.requestPermission()
Asks the user for permission to show notifications.

```javascript
Notification.requestPermission().then(permission => {
  if (permission === "granted") {
    new Notification("Hello, world!");
  }
});
```
## File and Blob Handling
URL.createObjectURL(blob)
Creates a URL for the specified object.

```javascript
const url = URL.createObjectURL(file);
```
## Media and Streams
navigator.mediaDevices.getUserMedia(constraints)
Requests access to media devices.

```javascript
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    const video = document.querySelector('video');
    video.srcObject = stream;
  });
  ```
## Geolocation
navigator.geolocation.getCurrentPosition(success, error)
Gets the current position.

```javascript
navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude, position.coords.longitude);
});
```
## Performance Monitoring
window.performance.now()
Returns a high-resolution timestamp.

```javascript
console.log(window.performance.now());
```
## Animation
requestAnimationFrame(callback)
Requests that an animation frame be called.

```javascript
function step(timestamp) {
  // Animation code goes here
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
```
## Drag and Drop API
Enables interactive drag-and-drop interfaces.

```html
<div id="drag-target" draggable="true">Drag me!</div>
```
```javascript
document.getElementById('drag-target').addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', 'This text is being dragged');
});
```
## History API
Manipulate the browser session history (the pages visited in the tab or frame that the current page is loaded in).

```javascript
// Go back one page
window.history.back();

// Go forward one page
window.history.forward();

// Push a new entry onto the history stack
window.history.pushState({page: 1}, "title 1", "?page=1");
```
## Fullscreen API
Programmatically control the fullscreen mode of the browser.

```javascript
// Enter fullscreen
document.documentElement.requestFullscreen();

// Exit fullscreen
document.exitFullscreen();
```
## Visibility API
Detect when the user minimizes the window or switches to another tab.

```javascript
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('Tab is active');
  } else {
    console.log('Tab is inactive');
  }
});
```
## Canvas API
Provides a means to draw graphics via JavaScript and the HTML `<canvas>` element.

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```
```javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#FF0000';
ctx.fillRect(0, 0, 150, 75);
```
## Web Audio API
Allows you to manipulate audio in the browser.

```javascript
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = audioCtx.createOscillator();
oscillator.type = 'square';
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();
```
## IndexedDB
A low-level API for client-side storage of significant amounts of structured data.

```javascript
const request = indexedDB.open("MyTestDatabase");
request.onerror = function(event) {
  // Handle errors.
};
request.onsuccess = function(event) {
  const db = event.target.result;
  // Use the database for operations
};
```
## WebGL
A JavaScript API for rendering high-performance interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins.

```html
<canvas id="myCanvas"></canvas>
```
```javascript
const canvas = document.getElementById('myCanvas');
const gl = canvas.getContext('webgl');

// Clear to black
gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
```
## Service Workers
Scripts that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction.

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
```
## Push API
Allows web applications to receive messages pushed to them from a server, whether or not the web app is in the foreground, or even currently loaded, on a user agent.

```javascript
navigator.serviceWorker.ready.then(function(registration) {
  registration.pushManager.subscribe({userVisibleOnly: true}).then(function(subscription) {
    console.log('User is subscribed.');
  });
});
```
