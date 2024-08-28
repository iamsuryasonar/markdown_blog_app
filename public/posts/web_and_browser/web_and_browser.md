---
title: Web and Browser
published: true
slug: web-and-browser
date: '2024-04-27'
description: things about web and browser
categories:
  - Tech
  - Programming
toc: |
    - [defer vs async](#q-defer-vs-async)
    - [Q. localstorage, session storage, cookie and index db?](#q-localstorage-session-storage-cookie-and-index-db)
    - [Browser API's](#browser-apis)
      - [DOM](#dom)
        - [DOM Events](#dom-events)
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
    - [Web security](#web-security)
      - [Cross-Site Scripting (XSS)](#cross-site-scripting-xss)
        - [How the Attack Works:](#how-the-attack-works)
        - [Consequences of XSS Attacks](#consequences-of-xss-attacks)
        - [Mitigation Techniques](#mitigation-techniques)
      - [Content Security Policy (CSP)](#content-security-policy-csp)
      - [Cross-Site Request Forgery (CSRF)](#cross-site-request-forgery-csrf)
        - [How CSRF Works](#how-csrf-works)
        - [Mitigation Techniques for CSRF](#mitigation-techniques-for-csrf)
      - [Cross-Origin Resource Sharing (CORS)](#cross-origin-resource-sharing-cors)
        - [The Same-Origin Policy](#the-same-origin-policy)
        - [Scenario Without CORS:](#scenario-without-cors)
        - [How CORS Works](#how-cors-works)
 
---

### Q. defer vs async?
**normal (default behavior)**
```html
<script src="script.js"></script>
```
When no defer or async attribute is specified, scripts are fetched and executed in the order they appear in the HTML document. The browser will pause rendering the page while the script is being fetched and executed.
Use Case: Use this when you need the script to execute in a specific sequence and must block page rendering until the script is executed.

**defer**
```html
<script src="script.js" defer></script>
```
The `defer` attribute indicates that the script should be executed after the HTML document has been fully parsed. Scripts with the defer attribute are downloaded asynchronously (in parallel with the HTML parsing) but are executed in the order they appear in the document after the parsing is complete.
Use Case: Use defer for scripts that need to access or manipulate the DOM after it has been fully constructed. This is suitable for scripts that rely on the HTML being completely parsed before they run.

**async**
```html
<script src="script.js" async></script>
```
The `async` attribute indicates that the script should be executed as soon as it is downloaded, without waiting for the HTML parsing to complete. Scripts with the async attribute are downloaded asynchronously and executed as soon as they are ready. This means they can execute out of order relative to their position in the document.
Use Case: Use async for scripts that are independent of other scripts and do not rely on the document being fully parsed. This is useful for analytics or ads scripts that do not affect the page content directly.

![image](../../images/asyncVsDefer.jpg)


### Q. localstorage, session storage, cookie and index db?

* localStorage:
    * Stores data with no expiration date.
    * The data persists even when the browser is closed and reopened.
    * Accessed via the localStorage object in the browser.
* sessionStorage:
    * Stores data for a single session, meaning the data is lost when the tab or window is closed.
    * Accessed via the sessionStorage object in the browser.
    * Useful for storing temporary data that should be cleared when the session ends.
* Cookies:
    * Small pieces of data stored in the browser.
    * Typically used for session management, user personalization, and tracking.
    * Can be set to expire after a specific period or when the browser is closed.
* IndexedDB:
    * A low-level API for client-side storage of significant amounts of structured data.
    * Provides a more powerful and flexible way to store data than localStorage or cookies.
    * Ideal for applications that require complex data querying and indexing.

Each of these storage mechanisms has its strengths and limitations, and the choice of which one to use depends on the specific requirements of the application. It's important to consider factors such as data size, data persistence, data structure, and security when selecting the appropriate storage solution for your web application.

## Browser API's
---
### DOM Manipulation

The DOM is a programming interface that allows you to access and manipulate the content of the web page.

- The DOM is a tree of nodes.
- Each node has a tag name, attributes, and child nodes.
- The root node is the `<html>` tag.

Let's look at the following HTML code:

```html
<html>
<head>
<title>Hello World!</title>
</head>
<body>
<h1>Hello World!</h1>
</body>
</html>
```

In the example above:

- The `<head>` tag contains the `<title>` tag.
- The `<body>` tag contains the `<h1>` tag.
- The `<h1>` tag contains the text `Hello World!`.

Now let us modify some properties of the `<h1>` tag using JavaScript:

```javascript
var h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.fontSize = "50px";
h1.style.textAlign = "center";
```

### DOM Events

- `click` - Triggered when a user clicks on an element.
- `change` - Triggered when a user changes the value of an element.
- `mouseenter` - Triggered when the mouse pointer enters an element.
- `mouseleave` - Triggered when the mouse pointer leaves an element.
- `mousedown` - Triggered when the user presses a mouse button over an element.
- `mouseup` - Triggered when the user releases a mouse button over an element.
- `keydown` - Triggered when a user presses a keyboard key.
- `keyup` - Triggered when a user releases a keyboard key.

Let's add an event listener to the button with id `button`:

```javascript
var button = document.getElementById("button");
button.addEventListener("click", function() {
	alert("The button was clicked!");
});


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

### Height and width

**height from top of the document**
```javascript
let scrollTop = document.documentElement.scrollTop
```
**height of the document viewport**
```javascript
let clientHeight = document.documentElement.clientHeight
```
**total height of the document**
```javascript
let scrollHeight = document.documentElement.scrollHeight
```
**scroll percentage**
```javascript
const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100
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
# Web security

## Cross-Site Scripting (XSS)

Cross-Site Scripting (XSS) is a type of security vulnerability that allows an attacker to inject malicious scripts into webpages viewed by other users. These scripts are typically written in JavaScript but could also include HTML or other types of code. When an unsuspecting user visits the compromised page, the malicious script executes in their browser, potentially leading to data theft, session hijacking, or other malicious activities.

**Example**

Consider a scenario where an attacker submits a malicious script through a form input field on a vulnerable website. The malicious script looks like this:

```html
<script>alert('XSS Attack!');</script>
```

### How the Attack Works:

1. **Form Submission:**
    - The attacker enters the above script into a form input field (e.g., a search box or a comment field) and submits it.
2. **Server Processing:**
    - The server receives the input and, without properly sanitizing it, includes the input directly in the HTML of the response page.
3. **Client-Side Execution:**
    - When the response is sent back to the user's browser, the unsanitized input is rendered as part of the HTML.
    - The browser interprets the `<script>` tag as a legitimate script and executes the code inside it.
4. **Result:**
    - An alert box with the message "XSS Attack!" is displayed to the user. This is a simple demonstration, but in a real attack, the script could perform more harmful actions, like stealing session cookies or redirecting the user to a malicious site.

### Consequences of XSS Attacks

- **Session Hijacking:** The attacker can steal session cookies, allowing them to impersonate the victim.
- **Data Theft:** The attacker can read sensitive data displayed on the page or submitted via forms.
- **Defacement:** The attacker can modify the content of the page, potentially defacing it.
- **Malware Distribution:** The attacker can redirect users to malicious websites or download harmful files.

### Mitigation Techniques

- **Input Validation and Sanitization:** Always validate and sanitize user inputs on both the client and server sides.
- **Output Encoding:** Encode data before displaying it on the webpage (e.g., HTML, JavaScript, URL encoding).
- **Use Content Security Policy (CSP):** CSP can help prevent the execution of malicious scripts by restricting the sources of content.
- **Avoid Inline JavaScript:** Avoid the use of inline scripts and event handlers.
- **Sanitize User Inputs:** Use libraries or frameworks that automatically escape potentially dangerous characters.

## Content Security Policy (CSP)

Content Security Policy (CSP) is a security standard that helps prevent various types of attacks, including Cross-Site Scripting (XSS), Clickjacking, and other code injection attacks. CSP allows web developers to control the resources that a webpage can load and execute, effectively reducing the risk of malicious content being executed on the user's browser.

CSP is implemented by adding a `Content-Security-Policy` header to your HTTP responses. This header contains directives that define the sources from which various types of content can be loaded. CSP can control the following types of resources:

- **Scripts**: JavaScript files and inline scripts.
- **Styles**: CSS files and inline styles.
- **Images**: Image files like PNG, JPG, SVG, etc.
- **Fonts**: Web fonts like WOFF, WOFF2, etc.
- **Frames**: Content loaded into `<iframe>` elements.
- **Media**: Audio and video files.

**Basic CSP Header**

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; style-src 'self' https://cdn.example.com; img-src 'self' https://cdn.example.com;
```

**Explanation:**

- `default-src 'self'`: This is the default policy that applies to all resource types not explicitly mentioned. `'self'` means that only resources from the same origin (i.e., the same domain) are allowed.
- `script-src 'self' https://cdn.example.com`: JavaScript can only be loaded from the same origin or from `https://cdn.example.com`.
- `style-src 'self' https://cdn.example.com`: CSS can only be loaded from the same origin or from `https://cdn.example.com`.
- `img-src 'self' https://cdn.example.com`: Images can only be loaded from the same origin or from `https://cdn.example.com`.

---

## Cross-Site Request Forgery (CSRF)

Cross-Site Request Forgery (CSRF) is a type of security vulnerability where an attacker tricks a user into performing actions on a web application in which they are authenticated, without the user's knowledge or consent. CSRF exploits the trust that a web application has in the user’s browser, causing the browser to send requests that the user did not intend to make.

Basically, Attacker makes request to the server on your behalf, without your consent.

### How CSRF Works

1. **User Authentication:**
    - A user logs into a website (e.g., a banking site) and receives a session cookie to authenticate further requests.
2. **Attacker’s Malicious Request:**
    - The attacker crafts a malicious request that performs some action on the authenticated website, such as transferring money.
    - The attacker tricks the user into making this request by embedding it in a malicious website, email, or even a link.
3. **Execution of the Malicious Request:**
    - When the user, who is still logged into the banking site, visits the attacker’s malicious site or clicks the crafted link, their browser automatically sends the request to the banking site, including the session cookie.
    - The banking site processes the request because it appears to come from the authenticated user, without knowing that the user did not intend to make that request.

### Mitigation Techniques for CSRF

1. **CSRF Tokens:**
    - Include a unique, unpredictable token with every form or request that modifies state. The server checks that this token is present and valid before processing the request. Since the attacker cannot know the user's token, they cannot craft a valid request.
    
    Example:
    
```html
<form action="https://www.bank.com/transfer" method="POST">     
<input type="hidden" name="amount" value="1000">     
<input type="hidden" name="to_account" value="1234567890">     
<input type="hidden" name="csrf_token" value="random_token_here">     
<input type="submit" value="Transfer"> </form>`
```

2. **SameSite Cookie Attribute:**
    - Use the `SameSite` attribute on cookies to prevent them from being sent along with cross-site requests. This helps prevent CSRF by ensuring that the cookies are only sent when the request originates from the same site.
    
    Example:
    
```http
 Set-Cookie: sessionid=abc123; SameSite=Strict;
```
    
3. **Checking the Referer Header:**
    - Validate the `Referer` header to ensure that the request is coming from the same origin. If the `Referer` is not from your site, the request can be rejected.
    
4. **Use of CAPTCHA:**
    - Implement CAPTCHA on forms that perform sensitive actions. This ensures that a human is interacting with the form and not an automated request sent by an attacker.

## Cross-Origin Resource Sharing (CORS)

Cross-Origin Resource Sharing (CORS) is a security feature implemented in web browsers that allows or restricts web pages from making requests to a different domain (origin) than the one that served the web page. CORS is a mechanism that helps protect against certain types of attacks by controlling how resources on a web server can be accessed by external web pages.

### The Same-Origin Policy

Before understanding CORS, it's important to know about the **Same-Origin Policy (SOP)**, a security concept that restricts web pages from making requests to a domain different from the one that served the original web page. For example, a script running on `https://example.com` cannot make requests to `https://anotherdomain.com`.

However, there are legitimate reasons why a web page might need to request resources from another domain (like fetching data from a third-party API). CORS provides a controlled way to relax the same-origin policy and allow these cross-origin requests.

Vulnerability that CORS Solves: Cross-Origin Data Leakage

CORS is designed to prevent a type of vulnerability known as **cross-origin data leakage**. Without CORS, any web page could make unauthorized requests to another domain, potentially stealing sensitive data from responses that are intended to be accessed only by trusted clients.

### Scenario Without CORS:

1. **Unauthorized Access to Sensitive Data:**
    - Imagine a banking application hosted at `https://bank.com`. This application might have a REST API that returns sensitive user information when accessed via an authenticated session.
    - An attacker could create a malicious website at `https://malicious.com` and trick users into visiting it. This website could have a script that makes a request to `https://bank.com/api/userinfo`.
    - If browsers did not enforce the same-origin policy or CORS, the script on `https://malicious.com` could access the user's sensitive data from the response, assuming the user is logged into `https://bank.com`.
    
1. **CORS Prevents This:**
    - With CORS, `https://bank.com` can specify who is allowed to access its resources by setting the appropriate CORS headers.
    - For example, the server at `https://bank.com` might send the following CORS headers:
        
        `Access-Control-Allow-Origin: https://trustedwebsite.com`
        
    - This header tells the browser that only requests from `https://trustedwebsite.com` are allowed to access the resources on `https://bank.com`. If a request is made from any other origin, such as `https://malicious.com`, the browser will block the response from being accessible by the script.

### How CORS Works

1. **Preflight Request (OPTIONS):**
    
    - For certain types of requests, the browser sends a "preflight" request using the HTTP `OPTIONS` method to determine whether the actual request is safe to send.
    - The server responds with CORS headers specifying whether the actual request from the origin is allowed.
    - Example:

```
OPTIONS /api/userinfo HTTP/1.1 Host: bank.com Origin: https://trustedwebsite.com Access-Control-Request-Method: GET
```

- The server might respond:
    
```
HTTP/1.1 200 OK Access-Control-Allow-Origin: https://trustedwebsite.com Access-Control-Allow-Methods: GET, POST
```

2. **Simple Requests:**

- For simple requests (e.g., GET requests), the browser includes the `Origin` header automatically in the request.
- The server responds with the `Access-Control-Allow-Origin` header if the request is allowed, and the browser determines whether to allow the response to be read based on this header.