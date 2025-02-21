---
title: React interview prep
published: true
slug: react
date: '2024-02-16'
description: React notes
categories:
  - Tech
  - Programming
  - React
  - Html/css/javascript
toc: |
  - [React  questions and answers](#react--questions-and-answers)
      - [Q. SPA?](#q-spa)
      - [Q. Bundler(webpack and parcel)](#q-bundlerwebpack-and-parcel)
      - [Q.JSX?](#qjsx)
      - [Q. Phases of react.](#q-phases-of-react)
      - [Q. working of dom in react (reconciliation in react)](#q-working-of-dom-in-react-reconciliation-in-react)
      - [Q. React fiber?](#q-react-fiber)
      - [Q. What is Fiber tree and how is it different from stack based reconciliation?](#q-what-is-fiber-tree-and-how-is-it-different-from-stack-based-reconciliation)
      - [Q. ReactDOM.render()?](#q-reactdomrender)
      - [Q. Components?](#q-components)
      - [Q. Stateful and Stateless component?](#q-stateful-and-stateless-component)
      - [Q. Controlled components?](#q-controlled-components)
      - [Q. Uncontrolled Components?](#q-uncontrolled-components)
      - [Q. What is equivalent of the following using React.createElement?](#q-what-is-equivalent-of-the-following-using-reactcreateelement)
      - [Q. Synthetic Event?](#q-synthetic-event)
      - [Q. props?](#q-props)
      - [Q. What is the difference between state and props?](#q-what-is-the-difference-between-state-and-props)
      - [Q. Why we need to copy state before updating?](#q-why-we-need-to-copy-state-before-updating)
      - [Q. Reactive values?](#q-reactive-values)
      - [Q. Reactivity in React?](#q-reactivity-in-react)
      - [Q. Props drilling?](#q-props-drilling)
      - [Q. Fragment?](#q-fragment)
      - [Q. Component lifecycle?](#q-component-lifecycle)
      - [Q. Phases of a React component's lifecycle](#q-phases-of-a-react-components-lifecycle)
      - [Q. Difference between Mounting and rendering?](#q-difference-between-mounting-and-rendering)
      - [Q. Elements vs component?](#q-elements-vs-component)
      - [Q. Contextual rendering](#q-contextual-rendering)
      - [Q. Class component vs functional component?](#q-class-component-vs-functional-component)
      - [Q. How do we send data from child to parent in react js](#q-how-do-we-send-data-from-child-to-parent-in-react-js)
      - [Q. Use of key in react](#q-use-of-key-in-react)
      - [Q. Does react re render child components when parent component re renders?](#q-does-react-re-render-child-components-when-parent-component-re-renders)
      - [Q. Pure components?](#q-pure-components)
      - [Q. React.memo(Component, arePropsEqual?)](#q-reactmemocomponent-arepropsequal)
      - [Q. Hooks?](#q-hooks)
        - [Q. useState()](#q-usestate)
        - [Q. useEffect()](#q-useeffect)
        - [Q. useContext()](#q-usecontext)
        - [Q. useMemo()](#q-usememo)
        - [Q. useRef()](#q-useref)
        - [Q. useCallback()](#q-usecallback)
      - [Q. Using function as ref](#q-using-function-as-ref)
      - [Q. Higher-order component?](#q-higher-order-component)
      - [Q. Render-prop?](#q-render-prop)
      - [Q. Custom Hooks?](#q-custom-hooks)
      - [Q. forwardRef?](#q-forwardref)
      - [Q. Context api?](#q-context-api)
      - [Q. How do setTimeout react in the useEffect hook?](#q-how-do-settimeout-react-in-the-useeffect-hook)
      - [Q. startTransition](#q-starttransition)
      - [Q. Code splitting?](#q-code-splitting)
      - [Q. Lazy-loading components and Suspense](#q-lazy-loading-components-and-suspense)
      - [Q. `<StrictMode>`](#q-strictmode)
      - [Q. Pagination?](#q-pagination)
      - [Q. Infinite Scroll pagination](#q-infinite-scroll-pagination)
      - [Q. preventDefault()](#q-preventdefault)
      - [Q. Dangerously setting the inner HTML?](#q-dangerously-setting-the-inner-html)
      - [Q. Three important react patterns.](#q-three-important-react-patterns)
      - [Q. Build a counter app?](#q-build-a-counter-app)
      - [Q. Add and remove fruit app?](#q-add-and-remove-fruit-app)
      - [Q. Error boundaries](#q-error-boundaries)
      - [Q. Security](#q-security)
  - [Redux](#redux)
      - [Q. Describe basic flow if redux.](#q-describe-basic-flow-if-redux)
      - [Q. Redux set up](#q-redux-set-up)
      - [Q. Implementation syntax of React redux](#q-implementation-syntax-of-react-redux)
      - [Q. Action creators?](#q-action-creators)
      - [Q. How the reducer function is invoked after action creator is dispatched?](#q-how-the-reducer-function-is-invoked-after-action-creator-is-dispatched)
      - [Q. What is a redux middleware?](#q-what-is-a-redux-middleware)
      - [Q. Why redux?](#q-why-redux)
      - [Q. Thunk](#q-thunk)
      - [Q. Redux Toolkit](#q-redux-toolkit)
        - [Redux Slices](#redux-slices)
        - [Creating Slice Reducers and Actions](#creating-slice-reducers-and-actions)
        - [But what about action creators?](#but-what-about-action-creators)
        - [Thunk?](#thunk)
        - [Reading Data with useSelector](#reading-data-with-useselector)
        - [extraReducers?](#extrareducers)
  - [Problems](#problems)
      - [Q. Why do React component names have to start with capital letters?](#q-why-do-react-component-names-have-to-start-with-capital-letters)
      - [Q. What is the difference between npx and npm?](#q-what-is-the-difference-between-npx-and-npm)
      - [Q. How to programmatically navigate using latest React Router version?](#q-how-to-programmatically-navigate-using-latest-react-router-version)
      - [Q. How to pass data between sibling components using React router?](#q-how-to-pass-data-between-sibling-components-using-react-router)
      - [Q. How to set focus on an input field after component mounts on UI?](#q-how-to-set-focus-on-an-input-field-after-component-mounts-on-ui)
      - [Q. Why virtual DOM is faster to update than real DOM?](#q-why-virtual-dom-is-faster-to-update-than-real-dom)
      - [Q. How to access the latest value of a text input field in a React component using the 'useRef' hook?](#q-how-to-access-the-latest-value-of-a-text-input-field-in-a-react-component-using-the-useref-hook)
      - [Q. Create a React component that renders a nested list from a given array of objects.](#q-create-a-react-component-that-renders-a-nested-list-from-a-given-array-of-objects)
      - [Q. What is the difference between useEffect and useLayoutEffect?](#q-what-is-the-difference-between-useeffect-and-uselayouteffect)
      - [Q. Write a custom hook which can be used to debounce user's input.](#q-write-a-custom-hook-which-can-be-used-to-debounce-users-input)
      - [Q. Write a custom hook to copy text to clipboard.](#q-write-a-custom-hook-to-copy-text-to-clipboard)
      - [Q. How to Use the 'useId' Hook to generate unique ids.](#q-how-to-use-the-useid-hook-to-generate-unique-ids)
      - [Q. Why React's useDeferredValue hook is useful?](#q-why-reacts-usedeferredvalue-hook-is-useful)
      - [Q. How to detect 'click' outside React component?](#q-how-to-detect-click-outside-react-component)
      - [Q. 3 ways to solve functions, arrays, objects recreated on every render.](#q-3-ways-to-solve-functions-arrays-objects-recreated-on-every-render)
    - [Extra question to prepare-](#extra-question-to-prepare-)
  - [Resources](#resources)
  - [Interview tips -](#interview-tips--)
  - [Git](#git)
  - [React terms and concepts](#react-terms-and-concepts)
  - [React practice problem](#react-practice-problem)

---

# React  questions and answers  

### Q. SPA?

 SPA stands for Single Page Application. It is a type of web application that operates within a single HTML page where the content is dynamically updated as the user interacts with the application. In an SPA, the entire page does not reload during use, providing a more fluid user experience similar to that of a desktop application.

Key features of SPAs include:



1. Dynamic Updates: SPAs use JavaScript to dynamically update the content of the web page in response to user actions, eliminating the need for full page reloads.
2. Smooth User Experience: By avoiding full page reloads, SPAs can provide a more seamless and responsive user experience, reducing latency and enhancing interactivity.
3. Client-Side Rendering: SPAs often perform rendering on the client side, utilising JavaScript frameworks like React, Angular, or Vue.js to manage the UI and handle data updates.
4. RESTful APIs: SPAs commonly interact with backend servers through RESTful APIs, enabling data retrieval and manipulation without requiring full page refreshes.
5. URL Routing: SPAs can use client-side routing to update the URL without triggering a server request. This allows users to bookmark and share specific application states.
6. Fast Performance: SPAs can offer improved performance as they do not need to reload the entire page, reducing the amount of data transferred and minimising server requests.


### Q. Bundler(webpack and parcel)

 Bundlers such as Webpack and Parcel are essential tools in modern web development, used to manage and optimise the deployment of web applications by bundling various assets like JavaScript, CSS, and images. They help streamline the development process by handling tasks such as code transformation, module bundling, and asset optimization. Here's a brief overview of both Webpack and Parcel:



* Webpack:

Webpack is a powerful and popular open-source JavaScript module bundler that enables developers to build and bundle assets for the web. It offers extensive configuration options, allowing users to define custom build processes and handle complex workflows. Webpack can handle various types of assets, including JavaScript, CSS, and images, and it has a robust plugin system that enables integration with various tools and frameworks.



* Parcel:

Parcel is another open-source web application bundler that aims to simplify the development process by providing zero-configuration and out-of-the-box support for various file types. It offers a fast and easy setup, making it a popular choice for quick prototyping and simple web projects. Parcel supports various asset types, including JavaScript, CSS, HTML, and more, and it automatically resolves dependencies and optimises the build process without the need for extensive configuration.

Both Webpack and Parcel are widely used in the JavaScript ecosystem, with each offering its unique set of features and advantages. Webpack is favoured for its extensive customization options and robust plugin ecosystem, making it suitable for complex and large-scale projects. On the other hand, Parcel is known for its simplicity and quick setup, making it an excellent choice for small to medium-sized projects and rapid prototyping.


### Q.JSX?

 JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It provides a way to describe the structure of the UI in a more declarative and intuitive manner, making it easier to work with and visualise complex UI components.

Here are some key features of JSX:


1. HTML-like Syntax: JSX resembles HTML syntax and allows you to write elements and components in a format that closely resembles HTML, making it more intuitive and familiar for web developers.
2. Embedding Expressions: JSX allows you to embed JavaScript expressions within curly braces {}. This enables dynamic content rendering, variable interpolation, and conditional rendering directly within the JSX code.
3. Component Rendering: JSX allows you to define and render React components in a straightforward and concise manner. You can use custom components alongside built-in HTML elements to create complex UIs.
4. Attribute Syntax: JSX uses a familiar attribute syntax similar to HTML, making it easy to set element attributes, event handlers, and other properties directly within the JSX code.

   
Each JSX element is just syntactic sugar for calling 
```javascript
React.createElement(component, props, ...children)
```
So, anything you can do with JSX can also be done with just plain JavaScript.

For example, this code written with JSX:
```javascript
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello toWhat="World" />);
```
can be compiled to this code that does not use JSX:

```javascript
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Hello, {toWhat: 'World'}, null));
```
Babel compiler is used to convert jsx to javascript.

### Q. Phases of react.

Conceptually, React does work in two phases:
- Render phase and
- Commit phase

 - The render phase determines what changes  need to be made to e.g. the DOM. During this phase, React calls render and then compares the result to the previous render.
 - The commit phase is when React applies any changes. (In the case of React DOM, this is when React inserts, updates, and removes DOM nodes.) React also calls lifecycles like componentDidMount and componentDidUpdate during this phase.

RENDER PHASE:
“Rendering” is React calling your components.

- On initial render, React will call the root component.
- For subsequent renders, React will call the function component whose state update triggered the render.
  
This process is recursive: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.

- During the initial render, React will create the DOM nodes for every elements.
- During a re-render, React will calculate which of their properties, if any, have changed since the previous render. It won’t do anything with that information until the next step, the commit phase.

COMMIT PHASE:
After rendering (calling) your components, React will modify the DOM.

- For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
- For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.
  
React only changes the DOM nodes if there’s a difference between renders. 

After rendering is done and React updated the DOM, the browser will repaint the screen. Although this process is known as “browser rendering”.


Summary- When the state or props of a component change, React takes that part of the DOM (this is the second Virtual DOM) and updates it with the new state or props value. Then, it compares it with the previous Virtual DOM. This process is called reconciliation. It updates the previous Virtual DOM with the new changes. Then, in the commit phase, the minimum changes that were found during reconciliation are performed (appended, removed, prepended, like good old vanilla JS) to the actual DOM. But what if the root (the top-most) component needs to be rerendered? The whole tree will be reconstructed.

### Q. Working of dom in react (reconciliation in react)

 In React, the virtual DOM and the process of reconciliation play a crucial role in efficiently updating and rendering the actual DOM. Understanding how React handles the DOM is essential for building performant and responsive web applications.

Here's an overview of the working of the DOM and the reconciliation process in React:



1. Virtual DOM:

    React maintains a lightweight representation of the actual DOM known as the virtual DOM. Any time there is a change in the state or props of a component, React first updates the virtual DOM, which is a JavaScript object representing the desired structure of the UI.

2. Reconciliation:

    When the virtual DOM is updated, React performs a process called reconciliation, where it calculates the most efficient way to update the actual DOM. During reconciliation, React compares the new virtual DOM with the previous one and identifies the minimal set of changes required to update the actual DOM.


    FIBRE is ground up rewrite of reconciliation algorithm.

3. Diffing Algorithm:

    React uses a diffing algorithm during reconciliation to efficiently update the DOM. It compares the new virtual DOM with the previous one and identifies the differences between them. This process optimises the performance by minimising the number of updates needed to reflect the changes in the UI.

4. Updating the DOM:

    After completing the reconciliation process, React updates the actual DOM to reflect the changes in the virtual DOM. It only applies the necessary changes to the real DOM, avoiding unnecessary re-renders and improving the overall performance of the application.


By leveraging the virtual DOM and the reconciliation process, React efficiently updates the UI in response to changes in the application state or props. This approach allows developers to build complex and dynamic user interfaces while maintaining high performance and responsiveness.

### Q. React fiber?

  React Fiber is an internal reimplementation of the React reconciliation algorithm. It was introduced in React version 16 to enable more flexibility and improve the performance of React applications, especially for larger and more complex component trees.

The primary goals of React Fiber include:

Incremental Rendering: Fiber enables React to split the rendering work into smaller chunks, allowing the browser to handle other tasks like user input and keeping the application responsive during rendering.

Prioritization and Scheduling: Fiber introduces the concept of priority levels to determine which updates are more important and should be processed first. This helps in providing smoother user experiences, especially in interactive applications.

Error Boundaries: Fiber improves the error handling mechanism in React, allowing components to capture and handle errors in their subtree, preventing the entire application from crashing due to a single error.

Improved Support for Asynchronous Rendering: Fiber facilitates the ability to pause, abort, or resume rendering, making it easier to handle asynchronous data fetching, animations, and other time-consuming tasks without blocking the main thread.

While React Fiber introduced significant changes under the hood, it did not alter the public API of React, meaning that developers can continue using React as they did before. The primary purpose of React Fiber is to improve the performance and responsiveness of React applications, especially for complex UIs and heavy workloads, without requiring developers to rewrite their existing code.

The introduction of React Fiber represents React's commitment to providing a more robust and efficient framework for building modern web applications, while maintaining the simplicity and declarative nature that has made React popular among developers.

**How Does React Fiber Work?**

React Fiber has two main phases:

- Render Phase (Reconciliation):
    React determines what changes need to be made to the UI by comparing the current and new Virtual DOM. This process can be paused and resumed.
- Commit Phase:
    Once React determines the necessary updates, it applies them to the DOM. This phase is synchronous and cannot be interrupted.

### Q. What is Fiber tree and how is it different from stack based reconciliation?

React Fiber introduced a fiber tree that is significantly different from the stack-based reconciliation algorithm used in older versions of React.

 - Fiber Reconciliation (React 16+) uses a fiber tree, which is a linked list-like structure. Each node (fiber) represents a React component and contains pointers to its parent, first child and next sibling. This structure allows React to pause, resume, or abort rendering tasks. React can pause work on low-priority tasks (like updating non-visible components) to handle high-priority tasks (like user input or animations). This enables features like time slicing.

 -  Stack Reconciliation (Pre-React 16) used the call stack to traverse the Virtual DOM tree. Once rendering began, it couldn't pause until the entire tree was processed, leading to potential performance issues for large or deeply nested trees. The rendering process was synchronous and could not be interrupted. For large trees, this could lead to noticeable frame drops or frozen UIs.

### Q. ReactDOM.render()?

 This method is used to render React elements into the DOM. It takes a React element and a DOM container as arguments and renders the element into the specified container in the DOM.



```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, world!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```




### Q. Components?

 Components are the building blocks of user interfaces. They allow you to break down the user interface into small, reusable pieces, making it easier to manage and maintain your code. React components can be thought of as self-contained units that encapsulate specific functionality and UI elements. 


### Q. Stateful and Stateless component?





* Stateful:

     A stateful component, also known as a container component, is a type of component in React that manages its own state. It is typically implemented as a class component, although with the introduction of React hooks in recent versions of React, stateful logic can also be implemented in functional components using the useState hook. Stateful components maintain their own internal state, which can be modified over time in response to user actions, lifecycle events, or data changes.

* Stateless:

    Stateless component is a component that can receive data and render it, but does not manage or track changes to that data.

### Q. Controlled components?
In HTML, form elements such as ```<input>```, ```<textarea>```, and ```<select>``` typically maintain their own state and update it based on user input. When a user submits a form the values from the mentioned elements are sent with the form. With React it works differently. The component containing the form will keep track of the value of the input in it's state and will re-render the component each time the callback function e.g. onChange is fired as the state will be updated. An input form element whose value is controlled by React in this way is called a controlled component.

The underlying principles of controlled components:

- Using state to store form values: Every time a user interacts with a form element, like typing into an input field, the value is stored in the component’s local state.
- Using setState or the useState hook: To update the stored values in the state, one would traditionally use the setState method in class components. With the introduction of React hooks, the useState hook provides a more concise way to manage state in functional components.
- Passing state as props to child components: This allows child components to receive and display the data, ensuring a single source of truth and a consistent data flow.

```javascript
import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={handleChange} />
      </label>
    </form>
  );
}
```

### Q. Uncontrolled Components?
 An uncontrolled component in React is one that stores its own state internally and does not control its value through the React state mechanism. Instead of being managed by React’s state system, it relies directly on the DOM to provide its current value.

Uncontrolled components have a few defining characteristics:
- Using ref to get values directly from the DOM: Instead of using an event handler to read the input’s value, you can obtain the value directly through ref.
- Reduced reliance on React’s state: Since these components don’t synchronize their state with React’s state mechanism, they might feel more familiar to developers who’ve worked with vanilla JavaScript.
  
```javascript
  import React, { useRef } from "react";

function LoginForm() {
  const usernameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("A username was submitted: " + usernameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

```

### Q. What is equivalent of the following using React.createElement?
```javascript
const element = <h1 className="greeting">Hello, world!</h1>;
```

```javascript
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

### Q. Synthetic Event?

  The event object we use in react is an imitation but not actually same as the Event object in the browsers' Document Object Model (DOM).

In React, synthetic events are wrappers around the browser's native events that behave identically across different browsers. React implements its own event system to ensure consistent behaviour, regardless of the user's browser. These synthetic events mimic the behaviour of native events and are instances of SyntheticEvent.

When working with React's event system, you'll often come across synthetic events for various user interactions, such as onClick, onChange, onSubmit, onFocus, and many others. React's synthetic events provide a cross-browser-compatible way to handle user interactions and input.

React's synthetic events work similarly to native events but provide a consistent interface across different browsers, making it easier to work with events in a React application.

### Q. props?

 "props" is short for "properties," and they are a way to pass data from a parent component to a child component. 

### Q. What is the difference between state and props?
 State is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.

Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Callback functions can also be passed in as props.

### Q. Why we need to copy state before updating?
React uses a virtual DOM to efficiently update the UI. When state changes, React compares the previous state with the new state to determine what needs to be updated.  
If you modify the existing state directly, React may not detect the change because it only compares references, not the actual content.  
Libraries like React.memo and useMemo rely on reference equality `===`  to prevent unnecessary renders.

### Q. Reactive values?
 In React, "reactive values" refer to the values declared directly inside the component body that:

Participate in the React data flow, and;
Can trigger a re-render of the component when their value changes.
These values include props, state, and any other variables and functions that are used in the component's rendering logic. Values derived from other reactive values are also reactive. These values can change on a re-render and be recalculated during subsequent renders if they are updated.

Reactive values are tracked by React for changes. When any of these values change, React schedules a re-render of the component so that it can update the output to reflect the new values. For this reason, it's crucial (for hooks that support dependency array) to include all reactive values the hook depends on, in its dependency array. Otherwise, the callback of the hook may not execute when expected.

When using the useEffect() hook for example, you need to specify which reactive values the effect depends on by passing them as an array of dependencies. If any of these dependencies change, the effect will be executed again. If no dependencies are specified, the effect will only be executed once when the component is mounted.

### Q. Reactivity in React?

 React doesn’t have any inbuilt mechanism for COMPLETE reactivity in action such as observe/track the changes in the data model and thereby updating the behavior and view itself. So, we can say React is not Reactive!

The developer should explicitly call state mutation calls to make it sync with the view. If any side effects need to be run, that must be wrapped in useEffect hook. All the side effects get a chance to run on whenever the component renders. Side effects with any dependency will run only if the dependency has any new value compared to the previous one.

All state update requests within an effect, event handlers are batched, and React may update it in a single go asynchronously.

### Q. Props drilling?

 Props drilling is a term used in React to describe the process of passing props through multiple levels of nested components to reach a deeply nested child component that needs access to the props. It often occurs when there are several layers of nested components, and the data needs to be passed down the component tree. While props drilling is a simple and straightforward way to share data between components, it can lead to issues such as reduced code readability, tight coupling between components, and the need to update many components when the data changes.

To mitigate the issues associated with props drilling, you can consider implementing one of the following solutions:



* Use Context API: React's Context API allows you to share data without passing props explicitly at every level. It provides a way to pass data through the component tree without having to pass props down manually at every level.
* State Management Libraries: State management libraries such as Redux, MobX, or Recoil can help manage application state in a centralised store, making it accessible to any component without the need for props drilling.
* Component Composition: Rather than passing props through multiple layers, you can use component composition techniques such as render props or higher-order components to encapsulate the logic and pass data to the components that need it directly.

By implementing one of these solutions, you can reduce the complexity of passing props down multiple levels and create a more maintainable and scalable React application.


### Q. Fragment?

 Use Fragment, or the equivalent `<>...</>` syntax, to group multiple elements together. You can use it to put multiple elements in any place where a single element can go. For example, a component can only return one element, but by using a Fragment you can group multiple elements together and then return them as a group:


```javascript
function Post() {
  return (
    <>
      <PostTitle />
      <PostBody />
    </>
  );
}
```


Fragments are useful because grouping elements with a Fragment has no effect on layout or styles, unlike if you wrapped the elements in another container like a DOM element. Also it can't be seen when inspecting the console.

Rendering a list of Fragments:

Here’s a situation where you need to write Fragment explicitly instead of using the &lt;>&lt;/> syntax. When you render multiple elements in a loop, you need to assign a key to each element. If the elements within the loop are Fragments, you need to use the normal JSX element syntax in order to provide the key attribute:


```javascript
function Blog() {
  return posts.map(post =>
    <Fragment key={post.id}>
      <PostTitle title={post.title} />
      <PostBody body={post.body} />
    </Fragment>
  );
}
```

### Q. Component lifecycle?
- A component mounts when it’s added to the screen.
- A component updates when it receives new props or state, usually in response to an interaction.
- A component unmounts when it’s removed from the screen.

### Q. Phases of a React component's lifecycle

 A React component undergoes three phases in its lifecycle: mounting, updating, and unmounting.



* The mounting phase is when a new component is created and inserted into the DOM or, in other words, when the life of a component begins. This can only happen once, and is often called “initial render.”. (componentDidMount)
* The updating phase is when the component updates or re-renders. This reaction is triggered when the props are updated or when the state is updated or when context updates. This phase can occur multiple times, which is kind of the point of React.(componentDidUpdate)
* The last phase within a component's lifecycle is the unmounting phase, when the component is removed from the DOM.(componentWillUnmount)


### Q. Difference between Mounting and rendering?

 In the context of React components, mounting and rendering are two distinct phases in the component's lifecycle. They represent different stages in the process of creating and displaying components in the user interface.

* Rendering:

Rendering is the process of generating a React element (a virtual representation of a UI component) based on the component's current state and props. It involves creating the virtual DOM elements that represent the component's structure, content, and layout. Rendering is the initial step in presenting the UI on the screen and is performed whenever a component's state or props change.

* Mounting:

Mounting is a specific phase in the lifecycle of a React component that occurs when the component is being initialised and inserted into the DOM for the first time. During the mounting phase, the component is created, constructed, and inserted into the DOM. This phase involves the execution of specific lifecycle methods, such as constructor, render, componentDidMount, and the setup of event listeners or subscriptions.


### Q. Elements vs component?

 In the context of web development, especially in frameworks like React, elements and components are key concepts that play different roles in the construction and rendering of user interfaces.



* Elements:

Elements are the smallest building blocks of React applications. They describe what you want to see on the screen. When a component's render method is called, it returns an element, which is a plain JavaScript object representing a DOM node or another component. Elements are the objects that describe what you want to render on the screen, including their attributes, children, and other details.

Here's an example of a React element:


```javascript
const element = <h1>Hello, world!</h1>;
```




* Components:

Components are reusable, independent, and isolated pieces of UI. They are like JavaScript functions that accept input (props) and return React elements describing what should appear on the screen. Components can be class components or function components. They enable you to split the UI into independent, reusable pieces and abstract complex UI into smaller, more manageable parts.

Here's an example of a simple React functional component:


```javascript
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```



### Q. Contextual rendering

 In the context of React, contextual rendering generally refers to the ability to conditionally render components or UI elements based on specific context or conditions within the application. This is often achieved using conditional statements or by leveraging the power of React's component-based architecture. By applying conditional logic within components, developers can dynamically control what is rendered based on the application's state or other relevant factors.

Here's a simple example of contextual rendering in React using the ternary operator:


```javascript
import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, User!</h1>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
};

export default App;
```


### Q. Class component vs functional component?

 In React, class components and functional components are two types of components used to create user interfaces. Each has its own syntax, features, and use cases. Here's a brief overview of each type:



* Class Components:

Class components are ES6 classes that extend from React.Component. They are the traditional way of creating components in React and have been widely used in the past. Class components have their own local state and lifecycle methods, such as componentDidMount and componentDidUpdate. They are suitable for complex components that require state management, lifecycle methods, and more advanced features.

Example of a class component:


```javascript
import React, { Component } from 'react';

class MyClassComponent extends Component {
  render() {
    return <h1>Hello, I am a class component!</h1>;
  }
}
```


* Functional Components:

Functional components are simpler and more lightweight than class components. They are JavaScript functions that accept props as arguments and return React elements. Functional components did not have their own state or lifecycle methods but were commonly used for presenting UI elements based on props.

With the introduction of React Hooks, functional components can now manage local state and lifecycle aspects as well, making them more powerful and capable of handling complex logic that was previously exclusive to class components. Functional components are preferred for simpler components, while class components are still useful for more complex components that require state management and lifecycle methods.

Example of a functional component:

```javascript
import React from 'react';

const MyFunctionalComponent = (props) => {
  return <h1>Hello, I am a functional component!</h1>;
};
```

### Q. How do we send data from child to parent in react js

 By using callback function in parent component and passing it to the child component

Example :


```javascript
const ChildComponent = ({ callback }) => {
  const result = 22;
  const returndatatoparent = () => {
    callback(result);
  };

  return (
    <button onClick={returndatatoparent}>
      return data to parent component
    </button>
  );
};

const ParentComponent = () => {
  const [marks, setMarks] = useState();
  return (
    <ChildComponent
      callback={(marks) => {
        setMarks(marks);
      }}
    />
  );
};
```


### Q. Use of key in react

 React uses the key to match children in the original dom tree with children in the virtual dom tree. Keys help React identify which items have changed, are added, or are removed. 


### Q. Does react re render child components when parent component re renders?

 In React, when a parent component re-renders, its child components will also re-render by default. This is because when the parent component renders, it may produce new props, state changes, or context updates that can affect the child components. React's reconciliation algorithm ensures that the child components are updated to reflect any changes in the parent component.


### Q. Pure components?

In React, a pure component is a type of component that extends the React.PureComponent class instead of the regular React.Component class. The main difference between the two is that PureComponent implements a shouldComponentUpdate method with a shallow prop and state comparison. This allows the component to re-render only when its props or state have changed, providing a performance optimization by reducing unnecessary re-renders.

The shouldComponentUpdate method in React.PureComponent performs a shallow comparison between the current and next props and state. If there are no changes detected in the shallow comparison, the component does not re-render, preventing unnecessary updates to the component tree and potentially improving the overall performance of the application.

Here is an example of a simple React.PureComponent:


```javascript
import React from 'react';

class MyPureComponent extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
```


In this example, MyPureComponent will only re-render when there are changes in its props or state. If the title and content props remain the same, the component will not re-render even if its parent component re-renders.

In functional components, the concept of a pure component is not directly applicable. However, the concept of a pure component, which aims to minimise unnecessary re-renders, can still be applied to functional components using React.memo higher-order component.


### Q. React.memo(Component, arePropsEqual?) 

 Wrap a component in memo to get a memoized version of that component. This memoized version of your component will usually not be re-rendered when its parent component is re-rendered as long as its props have not changed. But React may still re-render it: memoization is a performance optimization, not a guarantee.
Basically, memo is used to skip re-rendering when props are not changed. React normally re-renders a component whenever its parent re-renders. With memo, we can create a component that React will not re-render when its parent re-renders so long as its new props are the same as the old props. Such a component is said to be memoized.

```javascript
import { memo } from 'react';

const SomeComponent = memo(function SomeComponent(props) {
  // ...
});
```

- memo takes the component that you want to memoize as parameter. The memo does not modify this component, but returns a new memoized component instead. Any valid React component, including functions and forwardRef components, is accepted.

- optionaly meno also takes a function that accepts two arguments: the component’s previous props, and its new props. It should return true if the old and new props are equal: that is, if the component will render the same output and behave in the same way with the new props as with the old. Otherwise it should return false. Usually, you will not specify this function. By default, React will compare each prop with Object.is.

- memo returns a new React component. It behaves the same as the component provided to memo except that React will not always re-render it when its parent is being re-rendered unless its props have changed.

To memoize a component, wrap it in memo and use the value that it returns in place of your original component:


```javascript
const Greeting = memo(function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;
```


A React component should always have pure rendering logic. This means that it must return the same output if its props, state, and context haven’t changed. By using memo, you are telling React that your component complies with this requirement, so React doesn’t need to re-render as long as its props haven’t changed. Even with memo, your component will re-render if its own state changes or if a context that it’s using changes.

**Minimising props changes:**

When you use memo, your component re-renders whenever any prop is not shallowly equal to what it was previously. This means that React compares every prop in your component with its previous value using the Object.is comparison. Note that `Object.is(3, 3)` is true, but `Object.is({}, {})` is false.

To get the most out of memo, minimise the times that the props change. For example, if the prop is an object, prevent the parent component from re-creating that object every time by using useMemo (more on it below):


```javascript
function Page() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  const person = useMemo(
    () => ({ name, age }),
    [name, age]
  );

  return <Profile person={person} />;
}

const Profile = memo(function Profile({ person }) {
  // ...
});
```


> Note: class components can opt into this same behaviour by extending pure component from react


### Q. Hooks?

 Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. 

Hooks are JavaScript functions, but they impose two additional rules:

* Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
* Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks.)

All hooks in react:  
Basic Hooks-
* useState
* useEffect
* useContext  

Additional Hooks-
* useReducer
* useCallback
* useMemo
* useRef
* useImperativeHandle
* useLayoutEffect
* useDebugValue
* useDeferredValue
* useTransition
* useId


#### Q. useState()

 useState is a Hook. We call it inside a function component to add some local state to it. React will preserve this state between re-renders.

```javascript
const [age, setAge] = useState(42);
```


useState returns an array with exactly two items:

- The current state of this state variable, initially set to the initial state you provided.

- The set function that lets you change it to any other value in response to interaction.

To update what’s on the screen, call the set function with some next state:


```javascript
function handleClick() {
  setName('Robin');
}
```


React will store the next state, render your component again with the new values, and update the UI.

The set function returned by useState lets you update the state to a different value and trigger a re-render. 

The set function only updates the state variable for the next render. If you read the state variable after calling the set function, you will still get the old value that was on the screen before your call.

> Note: Calling the set function does not change the current state in the already executing code:


```javascript
function handleClick() {
  setName('Robin');
  console.log(name); // Still "Taylor"!
}
```


It only affects what useState will return starting from the next render.


#### Q. useEffect()

- componentDidMount


```javascript
useEffect(() => {
  //Runs only on the first render
}, []);
```


-componentDidUpdate


```javascript
useEffect(() => {
  //Runs on every render
});
```


and


```javascript
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```


-componentDidUnmount


```javascript
useEffect(() => {
 //Return a cleanup function
return()=>{
//Do the cleanup here
}
}, []);
```


 The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. 

You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short, means operations that are outside the scope of react) because they can affect other components and can’t be done during rendering.

When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — including the first render. Effects may also optionally specify how to “clean up” after them by returning a function.

https://react.dev/learn/lifecycle-of-reactive-effects

#### Q. useContext()

 useContext is a React Hook that lets you read and subscribe to context from your component. 
- Call useContext at the top level of your component.

- useContext is used to pass data deeply into the tree.

- useContext returns the context value for the context you passed. To determine the context value, React searches the component tree and finds the closest context provider above for that particular context. React automatically re-renders components that read some context if it changes.

- If React can’t find any providers of that particular context in the parent tree, the context value returned by useContext() will be equal to the default value that you specified when you created that context.
Specify a fallback default value. This way, if you accidentally render some component without a corresponding provider, it won’t break.
```javascript
const ThemeContext = createContext(null); // not preferred
const ThemeContext = createContext('light'); //prefered
```

Example of useContext:

```javascript
import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext('light');  // creating context while specifying a fallback value

function ContextHook() {
    const [theme, setTheme] = useState('light'); // state to track theme changes

    // passing the theme as well as update function down the tree of components
    return <ThemeContext.Provider value={{ theme, setTheme }}> 
        <div
            style={{
                height: '100svh',
                backgroundColor: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Button />
        </div>
    </ThemeContext.Provider>
}

export default ContextHook;

function Button() {
    const { theme, setTheme } = useContext(ThemeContext) // application of useContext

    return <button
        style={{
            backgroundColor: theme === 'light' ? 'black' : 'white',
            color: theme === 'light' ? 'white' : 'black',
            border: 'none',
            padding: '7px 20px',
        }}
        onClick={() => {
            theme === 'light' ? setTheme('dark') : setTheme('light')
        }}
    >
        Toggle
    </button>
}
```


Refer for more:  [useContext – React](https://react.dev/reference/react/useContext)


#### Q. useMemo()

 useMemo is a React Hook that lets you cache the result of a calculation between re-renders. Call useMemo at the top level of your component.

You need to pass two things to useMemo:
* A calculation function that takes no arguments, like () =>, and returns what you wanted to calculate.
* A list of dependencies including every value within your component that’s used inside your calculation.

On the initial render, the value you’ll get from useMemo will be the result of calling your calculation.

On every subsequent render, React will compare the dependencies with the dependencies you passed during the last render. If none of the dependencies have changed (compared with Object.is), useMemo will return the value you already calculated before. Otherwise, React will re-run your calculation and return the new value.

In other words, useMemo caches a calculation result between re-renders until its dependencies change.

By default, React will re-run the entire body of your component every time that it re-renders. For example, if this TodoList updates its state or receives new props from its parent, the filterTodos function will re-run:


```javascript
function TodoList({ todos, tab, theme }) {
  const visibleTodos = filterTodos(todos, tab);
  // ...
}
```

Usually, this isn’t a problem because most calculations are very fast. However, if you’re filtering or transforming a large array, or doing some expensive computation, you might want to skip doing it again if data hasn’t changed. If both todos and tab are the same as they were during the last render, wrapping the calculation in useMemo like below, lets you reuse visibleTodos you’ve already calculated before.

This type of caching is called memoization.

```javascript
import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  // ...
}
```

Note: You should only rely on useMemo as a performance optimization. If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add useMemo to improve performance.

Refer for more: [useMemo – React](https://react.dev/reference/react/useMemo)


#### Q. useRef()

useRef is a React Hook that lets you reference a value that’s not needed for rendering.


```javascript
const ref = useRef(initialValue)
```

useRef returns a ref object with a single current property initially set to the initial value you provided.

On the next render, useRef will return the same object. You can change its current property to store information and read it later. This might remind you of state, but there is an important difference.

Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component. For example, if you need to store an interval ID and retrieve it later, you can put it in a ref. To update the value inside the ref, you need to manually change its current property.


```javascript
function handleStartClick() {
  const intervalId = setInterval(() => {
    // ...
  }, 1000);
  intervalRef.current = intervalId;
}
```
Later, you can read that interval ID from the ref so that you can call clear that interval:

```javascript
function handleStopClick() {
  const intervalId = intervalRef.current;
  clearInterval(intervalId);
}
```

>Note:  You can mutate the `ref.current` property. Unlike state, `ref.current` is mutable.When you change the `ref.current` property, React does not re-render your component. React is not aware of when you change it because a ref is a plain JavaScript object.

**Manipulating the DOM with a ref:**

It’s particularly common to use a ref to manipulate the DOM. React has built-in support for this.

First, declare a ref object with an initial value of null:

```javascript
import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);
  // ...
```


Then pass your ref object as the ref attribute to the JSX of the DOM node you want to manipulate:


```javascript
  // ...
  return <input ref={inputRef} />;
```


After React creates the DOM node and puts it on the screen, React will set the current property of your ref object to that DOM node. Now you can access the `<input>`’s DOM node and call methods like focus():

 


```javascript
 function handleClick() {
    inputRef.current.focus();
  }
```


React will set the current property back to null when the node is removed from the screen.

#### Q. useCallback()
 useCallback caches a function between re-renders until its dependencies change.

```javascript
import { useCallback } from 'react';

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
```

You need to pass two things to useCallback:

1. A function definition that you want to cache between re-renders.
2. A list of dependencies including every value within your component that’s used inside your function.

On the initial render, the returned function you’ll get from useCallback will be the function you passed.

On the following renders, React will compare the dependencies with the dependencies you passed during the previous render. If none of the dependencies have changed (compared with Object.is), useCallback will return the same function as before. Otherwise, useCallback will return the function you passed on this render.

In other words, useCallback caches a function between re-renders until its dependencies change.

We know that,
By default, when a component re-renders, React re-renders all of its children recursively. 
suppose we have a function that we pass to the child component that is wrapped with memo (which causes it not to render if props are same as previous render).

In JavaScript, a `function () {}` or `() => {}` always creates a different function, similar to how the `{}` object literal always creates a new object. 

Memo optimisation does not work since for every parent component re-render child component will have a new function as prop.

So, to solve this problem, we can use useCallback, which caches the function when dependencies are same as before. 


### Q. Using function as ref


```javascript
import React from "react";  
  
function App() {  

	const setRef = (element) => {  
		if (element) {  
			element.onclick = () => alert("Button clicked!");  
		}  
	};  
	  
	return (  
		<div>  
			<button ref={setRef}>Click Me</button>  
		</div>  
	);  
}  
  
export default App;
```

### Q. Higher-order component?

 A higher-order component is a function that takes a component and returns a new component.

```javascript
function Inner(props) {
  return <span>Inner</span>;
}

function wrapper(Inner, value) {
  function Outer(props) {
    return (
      <div>
        <h3>Outer</h3>
        <Inner {...props} /> <em>{value}</em>
      </div>
    );
  }
  return Outer;
}

const Outer = wrapper(Inner, 'Peace');

function App() {
  return <Outer />;
}
```


### Q. Render-prop?

 The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic. Example:


```javascript
function App() {
  return <Box render={() => <h3>Jack</h3>} />;
}

function Box(props) {
  return (
    <div style={{ width: 100, height: 100, border: '1px solid black' }}>
      {props.render && props.render()}
    </div>
  );
}
```
Another way of doing the same thing

```javascript
function App() {
  return (
    <Box>
      <h3>Jack</h3>
    </Box>
  );
}

function Box(props) {
  return (
    <div style={{ width: 100, height: 100, border: '1px solid black' }}>
      {props.children}
    </div>
  );
}



```

Extra example

```javascript
import React, { useState } from 'react';

// StateProvider functional component
const StateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Render the children and pass the state and function as props
  return children({ count, incrementCount });
};

// Counter functional component that consumes the shared state
const Counter = ({ count, incrementCount }) => (
  <div>
    <h2>Count: {count}</h2>
    <button onClick={incrementCount}>Increment</button>
  </div>
);

// Parent component where state is managed
const App = () => (
  <div>
    <h1>State Sharing Example</h1>
    {/* StateProvider is used as a wrapper around Counter */}
    <StateProvider>
      {({ count, incrementCount }) => (
        <Counter count={count} incrementCount={incrementCount} />
      )}
    </StateProvider>
  </div>
);

export default App;
```

### Q. Custom Hooks?

 a FriendStatus component that calls the useState and useEffect Hooks to subscribe to a friend’s online status. Let’s say we want to reuse this subscription logic in another component. 


```javascript
import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```


It takes friendID as an argument, and returns whether our friend is online.

Now we can use it from both components:


```javascript
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```



```javascript
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```


The state of each component is completely independent. Custom Hooks are a way to reuse stateful logic, not state itself. In fact, each call to a Custom Hook has a completely isolated state — so you can even use the same custom Hook twice in one component.

Custom Hooks are more of a convention than a feature. If a function’s name starts with ”use” and it calls other Hooks, we say it is a custom Hook. 

>Note: We could reuse some stateful logic between components using Higher-order component and render-prop. Custom Hooks also let us do this.

### Q. forwardRef?

 forwardRef lets your component expose a DOM node to the parent component with a ref.


```javascript
const SomeComponent = forwardRef(render)
```


Call forwardRef() to let your component receive a ref and forward it to a child component:


```javascript
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  // ...
});
```

forwardRef takes a function component. React calls this function component with the props and ref that your component should receive from its parent. The JSX you return will be the output of your component.

forwardRef returns a React component that you can render in JSX. Unlike React components defined as plain functions, a component returned by forwardRef is also able to receive a ref prop.

**Usage:**

Exposing a DOM node to the parent component :

By default, each component’s DOM nodes are private. However, sometimes it’s useful to expose a DOM node to the parent—for example, to allow focusing it. To opt in, wrap your component definition into forwardRef():


```javascript
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} />
    </label>
  );
});
```


You will receive a ref as the second argument after props. Pass it to the DOM node that you want to expose:


```javascript
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );
});
```


This lets the parent Form component access the &lt;input> DOM node exposed by MyInput:


```javascript
function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
```


This Form component passes a ref to MyInput. The MyInput component forwards that ref to the `<input>` browser tag. As a result, the Form component can access that `<input>` DOM node and call `focus()` on it.


### Q. Context api?

 The Context API is a feature in React that enables you to share data between components without having to explicitly pass props through every level of the component tree. It provides a way to pass data through the component tree without having to manually pass props down at every level.

The Context API consists of two main parts: the Provider and the Consumer.

The Context API is a feature in React that enables you to share data between components without having to explicitly pass props through every level of the component tree. It provides a way to pass data through the component tree without having to manually pass props down at every level.

The Context API consists of two main parts: the Provider and the Consumer.



1. Provider:

The Provider component allows you to wrap a part of your React component tree and provide a value. This value can then be consumed by components nested within the Provider.

2. Consumer:

The Consumer component allows you to consume the value provided by the Provider in any of the nested components, even if they are deeply nested in the component tree.


```javascript
// Creating a context
const MyContext = React.createContext('default value');

// Using the context - Provider
function MyComponent() {
  return (
    <MyContext.Provider value="Hello from Context!">
      <ChildComponent />
    </MyContext.Provider>
  );
}

// Consumer
function ChildComponent() {
  return (
    <MyContext.Consumer>
      {(value) => <p>{value}</p>}
    </MyContext.Consumer>
  );
}


//or also we can use useContext and directly use the context value

function ChildComponent() {
  const value = useContext(MyContext);
  return <p>{value}</p>;
}
```


### Q. How do setTimeout react in the useEffect hook?

 When you use setTimeout within a useEffect hook in React, it can trigger side effects and component updates after a specific delay. The useEffect hook is used for handling side effects in functional components, and it allows you to perform tasks that cannot be done during rendering, such as data fetching, subscriptions, or manually updating the DOM.

Here's an example of how to use setTimeout within a useEffect hook:


```javascript
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Delayed message after 2000ms');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, []);

  return <div>{message}</div>;
};

export default MyComponent;
```


In this example, the useEffect hook sets up a setTimeout function that updates the message state after 2000 milliseconds. The cleanup function returned by useEffect is used to clear the timer when the component is unmounted or when the dependencies of the useEffect change.

Using setTimeout within the useEffect hook can be useful for handling delayed actions, animations, or any task that needs to be executed after a specific time interval. It's important to handle cleanup properly to avoid memory leaks or unexpected behaviour when the component unmounts or when the dependencies change.

Make sure to handle any necessary cleanup within the useEffect hook to prevent any memory leaks or unintended behaviour, especially if the timer is meant to continue running after the component unmounts.

### Q. startTransition

 startTransition lets you update the state without blocking the UI.

You can mark a state update as a transition by wrapping it in a startTransition call:


```javascript
import { startTransition } from 'react';

function TabContainer() {
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}
```


Transitions let you keep the user interface updates responsive even on slow devices.

With a transition, your UI stays responsive in the middle of a re-render. For example, if the user clicks a tab but then changes their mind and clicks another tab, they can do that without waiting for the first re-render to finish.


### Q. Code splitting?

Code splitting consists of separating the code into several packages or components that can be loaded on demand or in parallel. This means that they are not loaded until they are needed.

The page still loads the same amount of code, but the difference is because the page may not execute all the code it loads.

The benefits of code splitting are:



* The speed at which a website loads and displays content becomes faster.
* The interaction time improves.
* The percentage of users who abandon the web page without interacting with it decreases.

In practice code splitting is done using Lazy-loading.


### Q. Lazy-loading components and Suspense 

 Usually, you import components with the static import declaration:


```javascript
import MarkdownPreview from './MarkdownPreview.js';
```


To defer loading this component’s code until it’s rendered for the first time, replace this import with:


```javascript
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```


This code relies on dynamic import(), which might require support from your bundler or framework. Using this pattern requires that the lazy component you’re importing was exported as the default export.

Now that your component’s code loads on demand, you also need to specify what should be displayed while it is loading. You can do this by wrapping the lazy component or any of its parents into a &lt;Suspense> boundary:


```javascript
<Suspense fallback={<Loading />}>
  <h2>Preview</h2>
  <MarkdownPreview />
 </Suspense>
```


In this example, the code for MarkdownPreview won’t be loaded until you attempt to render it. If MarkdownPreview hasn’t loaded yet, Loading will be shown in its place.

>Note: Do not declare lazy components inside other components:

```javascript
import { lazy } from 'react';

function Editor() {
  // 🔴 Bad: This will cause all state to be reset on re-renders
  const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
  // ...
}
```


Instead, always declare them at the top level of your module:


```javascript
import { lazy } from 'react';

// ✅ Good: Declare lazy components outside of your components
const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

function Editor() {
  // ...
}
```



### Q. `<StrictMode>`

 `<StrictMode>` lets you find common bugs in your components early during development.


```javascript
<StrictMode>
  <App />
</StrictMode>
```


Use StrictMode to enable additional development behaviours and warnings for the component tree inside:


```javascript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```


Strict Mode enables the following development-only behaviours:



* Your components will re-render an extra time to find bugs caused by impure rendering.
* Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
* Your components will be checked for usage of deprecated APIs.

React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs (props, state, and context).

Components breaking this rule behave unpredictably and cause bugs. To help you find accidentally impure code, Strict Mode calls some of your functions (only the ones that should be pure) twice in development.If a function is pure, running it twice does not change its behaviour because a pure function produces the same result every time. However, if a function is impure (for example, it mutates the data it receives), running it twice tends to be noticeable (that’s what makes it impure!) This helps you spot and fix the bug early.

Some bugs like:



* missing cleanup function in a useEffect could be avoided.
* accidental mutation of props could be avoided.


### Q. Pagination?

 Implementing pagination in a React application involves managing and displaying a subset of data at a time, typically in response to user interactions like clicking on next or previous buttons. Here's a simple example of how to create a basic pagination component in React:


```javascript
import React, { useState } from 'react';

const data = [...]; // Your data array to be paginated
const PaginationComponent = () => {
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => handleClick(number)}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PaginationComponent;
```

In this example, we assume you have data that you want to display in paginated form. The data array contains all the items, and the itemsPerPage variable specifies how many items to display per page. The currentPage state variable keeps track of the currently active page.

The slice method is used to extract a subset of data based on the current page and items per page. The pageNumbers array is generated based on the total number of items and items per page, and it is used to display the page numbers for navigation.

Clicking on a page number triggers the handleClick function, which updates the current page. Based on the current page, the component displays the corresponding subset of data along with the page numbers for navigation.

You can integrate this pagination component with your data and UI to implement pagination in your React application.

### Q. Infinite Scroll pagination

```javascript
import React, { useState, useEffect, useRef } from 'react';

function InfinitePagination() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.example.com/data?page=${page}`)
      .then(response => response.json())
      .then(newData => {
        setData(prevData => [...prevData, ...newData]);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    const options = {
      root: null, //This property specifies the element that is used as the viewport for checking visibility of the target. If null, the viewport is the browser's viewport. In this example, root is set to null, which means that the browser's viewport is used as the viewport for checking visibility.
      rootMargin: '0px', // This property specifies a margin around the root element's bounding box. The margin can be specified in pixels or as a percentage of the root element's size. A positive value expands the root element's bounding box, while a negative value shrinks it. In this example, rootMargin is set to '0px', which means that there is no margin around the root element's bounding box.
      threshold: 1.0,//This property specifies the percentage of the target element's visibility that triggers the observer's callback. For example, a value of 1.0 means that the observer's callback is triggered when the target element is fully visible, while a value of 0.5 means that the observer's callback is triggered when at least 50% of the target element is visible. 
    };

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !loading) {
        setPage(prevPage => prevPage + 1);
      }
    }, options);

    if (observer.current) {
      observer.current.observe(document.getElementById('scroll-trigger'));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading]);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      <div id="scroll-trigger" style={{ height: '10px' }}></div>
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default InfinitePagination;
```

### Q. preventDefault()

 In React, you can prevent the default behaviour of an event by calling the `preventDefault()` method on the event object. This is commonly used with event handlers like onClick for links or form submissions to prevent the default action associated with the event, such as navigating to a new page or submitting a form.

Here's an example of how to use preventDefault with an onClick event:


```javascript
import React from 'react';

function MyComponent() {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default behaviour of the <a> element
    // Your custom logic here
    console.log('Link clicked, but default behaviour prevented.');
  };

  return (
    <div>
      <a href="https://example.com" onClick={handleClick}>
        Click me (Prevent Default)
      </a>
    </div>
  );
}

export default MyComponent;
```


In this example, when the link is clicked, the handleClick function is called, and within that function, `e.preventDefault()` is called to prevent the default behaviour of the `<a>` element, which is navigating to the URL specified in the href attribute.

You can apply the same concept to other event handlers, such as onSubmit for forms or onKeyDown for input elements, to prevent their default behaviours as needed. Just make sure to pass the event object (usually named e or event) as a parameter to the event handler function.


### Q. Dangerously setting the inner HTML?

 You can pass a raw HTML string to an element like so:

```javascript
const markup = { __html: '<p>some raw html</p>' };
return <div dangerouslySetInnerHTML={markup}></div> ;
```


dangerouslySetInnerHTML: An object of the form `{ __html:'<p>some html</p>' }` with a raw HTML string inside. Overrides the innerHTML property of the DOM node and displays the passed HTML inside. This should be used with extreme caution! If the HTML inside isn’t trusted (for example, if it’s based on user data), you risk introducing an XSS vulnerability.

### Q. Three important react patterns.

* Higher order components.
* Render prop.
* Custom hooks.



### Q. Build a counter app?


```javascript
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev)=>prev-1);
  };
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
```



### Q. Add and remove fruit app?


```javascript
const Fruit = () => {
  const [fruits, setFruit] = useState([]);
  const [input, setInput] = useState("");

  const addFruit = () => {
    setFruit((prev) => {
      return [...prev, input];
    });
    setInput("");
  };

  const removeFruit = () => {
    if (fruits.length > 0) {
      setFruit((prev) => {
        return prev.slice(0, -1);
      });
    }
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      {fruits.map((item) => {
        return <h1>{item}</h1>;
      })}
      <input onChange={onChangeHandler} value={input}/>
      <br />
      <br />
      <button onClick={addFruit}> Add Fruit </button>
      <button onClick={removeFruit}> Remove Fruit </button>
    </>
  );
};
```


### Q. Error boundaries

In React functional components, error boundaries are implemented differently compared to class components. React functional components do not support the traditional error boundary lifecycle methods (`componentDidCatch` and `getDerivedStateFromError`). However, you can still handle errors in functional components using the `ErrorBoundary` pattern but with a class component.

Here’s how you can implement error boundaries in React using a class component for the boundary and functional components for the rest of your app:

#### Implementing Error Boundaries with Functional Components

1. **Create the Error Boundary Class Component:**
    
    Define an error boundary using a class component. This class component will catch errors in its child components.
    
```javascript

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to render fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details (could send to an error tracking service)
    console.error('Error caught by Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error is caught
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```
 
2. **Use the Error Boundary in Functional Components:**
    
  Wrap your functional components with the `ErrorBoundary` class component. This will catch any errors that occur within those components.
    
```javascript
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

// A functional component that may throw an error
const ProblematicComponent = () => {
  // Simulating an error
  throw new Error('Simulated error');
  return <div>Problematic Component</div>;
};

// Another functional component
const SafeComponent = () => (
  <div>Safe Component</div>
);

const App = () => (
  <ErrorBoundary>
    <SafeComponent />
    <ProblematicComponent />
  </ErrorBoundary>
);

export default App;
```

#### Handling Errors in Functional Components

For handling errors within functional components, you can use `try-catch` blocks inside event handlers and asynchronous operations. However, this does not provide global error handling for rendering errors.

```javascript
import React, { useState } from 'react';

const FunctionalComponentWithErrorHandling = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // Simulate an API call
      throw new Error('Simulated fetch error');
      // const response = await fetch('https://api.example.com/data');
      // const result = await response.json();
      // setData(result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <p>Error: {error}</p>}
      {data && <p>Data: {data}</p>}
    </div>
  );
};

export default FunctionalComponentWithErrorHandling;
```

### Q. Security
Protecting resources comprises two key components:

#### Authentication

Authentication is the process of verifying the identity of a user. In single-page applications (SPAs), the prevalent method of authenticating users is through JSON Web Tokens ([JWT](https://jwt.io/)). When a user logs in or registers, they receive a token that is stored within the application. Subsequently, for each authenticated request, the token is sent in the header or via a cookie along with the request to validate the user's identity and access permissions.

The most secure practice is to store the token in the application state. However, it's important to note that if the user refreshes the application, the token will be reset. That can lead to the loss of the user's authentication status.

That is why tokens need to be are stored in a cookie or `localStorage/sessionStorage`.

**`localStorage` vs cookie for storing tokens**

Storing authentication tokens in localStorage can pose a security risk, especially in the context of Cross-Site Scripting ([XSS](https://owasp.org/www-community/attacks/xss/)) vulnerabilities, potentially leading to token theft by malicious actors.

Opting to store tokens in cookies, configured with the `HttpOnly` attribute, can enhance security as they are inaccessible to client-side JavaScript. In our sample app, we utilize js-cookie for cookie management, assuming the real API would enforce the HttpOnly attribute for enhanced security, and the application does not have access to the cookie from the client side.

==In addition to securely storing tokens, it's crucial to protect the entire application from Cross-Site Scripting (XSS) attacks. One key strategy is to sanitize all user inputs before displaying them in the application. By carefully sanitizing inputs, you can reduce the risk of XSS vulnerabilities, making the application more resilient to malicious attacks and enhancing overall security for users.==

For a full list of security risks, check [OWASP](https://owasp.org/www-project-top-10-client-side-security-risks/).

**Handling user data**

User info should be considered a global piece of state which should be available from anywhere in the application.
If you are already using `react-query`, you can use [react-query-auth](https://github.com/alan2207/react-query-auth) library for handling user state which will handle all the things for you after you provide it some configuration. Otherwise, you can use react context + hooks, or some 3rd party state management library.

User information should be treated as a central piece of data accessible throughout the application. If you are already using `react-query`, consider using it for storing user data as well. Alternatively, you can leverage React context with hooks or opt for a third-party state management library to efficiently manage user state across your application.

The application will assume the user is authenticated if a user object is present.

#### Authorization

Authorization is the process of verifying whether a user has permission to access a specific resource within the application.

**RBAC (Role based access control)**

In a role-based authorization model, access to resources is determined by defining specific roles and associating them with permissions. For example, roles such as `USER` and `ADMIN` can be assigned different levels of access rights within the application. Users are then granted access based on their roles; for instance, restricting certain functionalities to regular users while permitting administrators to access all features and functionalities.

**PBAC (Permission based access control)**

While Role-Based Access Control (RBAC) provides a structured methodology for authorization, there are instances where a more granular approach is necessary. Precision-Based Access Control (PBAC) offers a more flexible solution, particularly in scenarios where access permissions need to be finely tuned based on specific criteria, such as allowing only the owner of a resource to perform certain operations. For example, in the case of a user's comment, PBAC ensures that only the author of the comment has the privilege to delete it, adding a layer of precision and customization to access control mechanisms.



# Redux 

### Q. Describe basic flow if redux.
 
Component dispatches an action(an object with type and payload property), reducer(a function that updates the state) receives it, performs the operation and updates the store, components that are subscribed to the store states are notified.

Redux is a state management library commonly used with React, although it can be used with other frameworks as well. The basic flow of Redux involves actions, reducers, and a store. Here's a simplified overview:

**Actions:**

Actions are plain JavaScript objects that describe events or user interactions.
They have a type field indicating the type of action and may include additional data.
You can think of an action as an event that describes something that happened in the application.

Example:
```javascript
const increment = {

  type: 'INCREMENT',

  payload: 1,

};
```
**Reducers:**

Reducers are functions that specify how the application's state changes in response to actions.
They take the current state and an action, and return a new state.
Reducers should be pure functions without side effects.
You can think of a reducer as an event listener which handles events based on the received action (event) type.

Example:
```javascript
const counterReducer = (state = 0, action) => {

  switch (action.type) {

    case 'INCREMENT':

      return state + action.payload;

    default:

      return state;

  }

};
```
**Store:**

The store holds the application state.
It is created with a root reducer that combines all the reducers.
The store provides methods to dispatch actions, get the current state, and subscribe to changes.

Example:
```javascript
import { createStore } from 'redux';

const store = createStore(counterReducer);
```
**we can break these steps into more detail:**

* Initial setup:
    * A Redux store is created using a root reducer function
    * The store calls the root reducer once, and saves the return value as its initial state
    * When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
* Updates:
    * Something happens in the app, such as a user clicking a button
    * The app code dispatches an action to the Redux store, like `dispatch({type: 'counter/incremented'})`
    * The store runs the reducer function again with the previous state and the current action, and saves the return value as the new state
    * The store notifies all parts of the UI that are subscribed that the store has been updated
    * Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
    * Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen
    * Here's what that data flow looks like visually:

Redux data flow diagram

![alt_text](./images/reduxflow.gif "image_tooltip")

### Q. Redux set up
 
1. Define reducers,
2. Create a store,
3. Create action creators
4. Tie the store to the react views

### Q. Implementation syntax of React redux

* Create a Redux store with configureStore
    * configureStore accepts a reducer function as a named argument
    * configureStore automatically sets up the store with good default settings
* Provide the Redux store to the React application components
    * Put a React Redux `<Provider> component around your `<App />`
    * Pass the Redux store as `<Provider store= {store}>`
* Create a Redux "slice" reducer with createSlice
    * Call createSlice with a string name, an initial state, and named reducer functions
    * Reducer functions may "mutate" the state using Immer
    * Export the generated slice reducer and action creators
* Use the React Redux
* useSelector/useDispatch hooks in React
* components
    * Read data from the store with the useSelector hook
    * Get the dispatch function with the useDispatch hook, and dispatch action needed.
      
### Q. Action creators?
 An action creator is a function that literally creates an action object. In Redux, action creators simply return an action object and pass the argument value if necessary.
changeWheel action creator sample :

```javascript
const changeWheel = (value) => {
  return {
    type: 'CHANGE_WHEEL',
    value
  }
}
```

These action creators are passed to the dispatch function as the result value, and the dispatch is executed.

```javascript
dispatch(changeWheel(size))
```

### Q. How the reducer function is invoked after action creator is dispatched?

Action creator:
```javascript
// actions.js
export const incrementCounter = () => ({
  type: 'INCREMENT_COUNTER',
});
```

Reducer:
```javascript
// reducers.js
const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
```
Store set up:
```javascript
// store.js
import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

export default store;
```
Dispatching action:
```javascript
// Some React component
import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementCounter } from './actions';

const MyComponent = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
```

Dispatch flow:

- When you click the "Increment" button, handleIncrement is called, which in turn dispatches the incrementCounter action.
- The dispatched action flows through the Redux store.
- The store passes the action to the reducer (counterReducer).
- The reducer checks the action type and performs the corresponding state update.
- The state is then updated, triggering a re-render if connected components are subscribed to this part of the state.
- The updated state is available for the component to display or use as needed.

### Q. What is a redux middleware?

 A middleware is a piece of software that provides a way to interact with actions and the state that flows through the Redux application. Middleware sits between the action being dispatched and the moment it reaches the reducer. It allows you to perform additional operations, intercept actions, or modify the behavior of the store.

The basic idea is that middleware can extend the functionality of Redux by providing a layer for handling asynchronous operations, logging, or other side effects.

Middleware provides a third-party extension point between dispatching an action and handing the action off to the reducer:

`[ Action ] < [ Middleware ] < [ Dispatcher ]`

Examples of middleware include logging, crash reporting, routing, handling asynchronous requests, etc.

Middleware sits between the action and the reducer. It can listen for all dispatches and execute code with the details of the actions and the current states.

### Q. Why redux?

when we have multiple components that need to share and use the same state, especially if those components are located in different parts of the application. Sometimes this can be solved by "lifting state up" to parent components, but that doesn't always help.

One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!

By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.

This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.


### Q. Thunk

 It is a middleware that allows us to return function instead of an action, within redux. 

It is a standard way to write async logic inside redux.

### Q. Redux Toolkit
 Creating the Redux Store:

```javascript
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
```
The Redux store is created using the configureStore function from Redux Toolkit. configureStore requires that we pass in a reducer argument.

#### Redux Slices
A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

#### Creating Slice Reducers and Actions

```javascript
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

```
We know that actions are plain objects with a type field, the type field is always a string, and we typically have "action creator" functions that create and return the action objects. So where are those action objects, type strings, and action creators defined?

The answer is we don't have to define it, Redux toolkit does that for us.
Redux Toolkit has a function called createSlice, which takes care of the work of generating action type strings, action creator functions, and action objects. All you have to do is define a name for this slice, write an object that has some reducer functions in it, and it generates the corresponding action code automatically.
The string from the name option is used as the first part of each action type, and the key name of each reducer function is used as the second part. So, the "counter" name + the "increment" reducer function generated an action type of `{type: "counter/increment"}`.

#### But what about action creators?
Well, createSlice automatically generates action creators with the same names as the reducer functions we wrote. 

In Redux, our reducers are never allowed to mutate the original / current state values!

There are several reasons why you must not mutate state in Redux:

- It causes bugs, such as the UI not updating properly to show the latest values
- It makes it harder to understand why and how the state has been updated
- It makes it harder to write tests
- It breaks the ability to use "time-travel debugging" correctly
- It goes against the intended spirit and usage patterns for Redux

Writing immutable update logic by hand is hard, and accidentally mutating state in reducers is the single most common mistake Redux users make.

That's why Redux Toolkit's createSlice function lets you write immutable updates an easier way!

createSlice uses a library called Immer inside. Immer uses a special JS tool called a Proxy to wrap the data you provide, and lets you write code that "mutates" that wrapped data. But, Immer tracks all the changes you've tried to make, and then uses that list of changes to return a safely immutably updated value, as if you'd written all the immutable update logic by hand.

#### Thunk?
A thunk is a specific kind of Redux function that can contain asynchronous logic.

Thunks are written using two functions:

- An inside thunk function, which gets dispatch and getState as arguments
- The outside creator function, which creates and returns the thunk function

Using thunks requires that the redux-thunk middleware (a type of plugin for Redux) be added to the Redux store when it's created. Fortunately, Redux Toolkit's configureStore function already sets that up for us automatically.

When you need to make AJAX calls to fetch data from the server, you can put that call in a thunk. 

```javascript
// the outside "thunk creator" function
const fetchUserById = userId => {
  // the inside "thunk function"
  return async (dispatch, getState) => {
    try {
      // make an async call in the thunk
      const user = await userAPI.fetchById(userId)
      // dispatch an action when we get the response back
      dispatch(userLoaded(user))
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}
```

#### Reading Data with useSelector
The useSelector hook lets our component extract whatever pieces of data it needs from the Redux store state.
Our components can't talk to the Redux store directly, because we're not allowed to import it into component files. But, useSelector takes care of talking to the Redux store behind the scenes for us.

Any time an action has been dispatched and the Redux store has been updated, useSelector will re-run our selector function. If the selector returns a different value than last time, useSelector will make sure our component re-renders with the new value.

Dispatching Actions with useDispatch

useDispatch allows us to dispatch actions using action creators.

```javascript
const dispatch = useDispatch()
```

From there, we can dispatch actions when the user does something like clicking on a button:

```javascript
<button
  className={styles.button}
  aria-label="Increment value"
  onClick={() => dispatch(increment())}
>
  +
</button>
```

How to import the store?

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

#### extraReducers?
There are times when a slice reducer needs to respond to other actions that weren't defined as part of this slice's reducers field. We can do that using the slice extraReducers field. Basically it allows us to create actions outside the slice.

The builder object in extraReducers provides methods that let us define additional case reducers that will run in response to actions defined outside of the slice:

- builder.addCase(actionCreator, reducer): defines a case reducer that handles a single known action type based on either an RTK action creator or a plain action type string
- builder.addMatcher(matcher, reducer): defines a case reducer that can run in response to any action where the matcher function returns true
- builder.addDefaultCase(reducer): defines a case reducer that will run if no other case reducers were executed for this action.
- You can chain these together, like `builder.addCase().addCase().addMatcher().addDefaultCase()`. If multiple matchers match the action, they will run in the order they were defined.

```javascript
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})
```

We'll handle all three action types that could be dispatched by the thunk, based on the Promise we returned:

- When the request starts, we'll set the status enum to 'loading'
- If the request succeeds, we mark the status as 'succeeded', and add the fetched posts to `state.posts`
- If the request fails, we'll mark the status as 'failed', and save any error message into the state so we can display it.

# Problems

### Q. Why do React component names have to start with capital letters?
In JSX, lowercase tag names are considered to be HTML tags. However, lowercase tag names with a dot (property accessor) aren't.

```javascript
<person /> compiles to React.createElement('person') (html tag)
<Person /> compiles to React.createElement(Person)
<obj.person /> compiles to React.createElement(obj.person)
// Wrong! This is a component and should be in uppercase.
function person(props) {
  // Correct! This usage of <div> is correct because div is a valid element.
  return <div>{props.isLearning ? "Great!" : "Call Mom!"}</div>;
}

function App() {
  // Wrong! React thinks <person /> is a HTML tag because it's not capitalized.
  return <person isLearning={true} />;
}

// Correct! This is a component and should be capitalized
function Person(props) {
  // Correct! This usage of <div> is correct because div is a valid element.
  return <div>{props.isLearning ? "Great!" : "Call Mom!"}</div>;
}

function App() {
  // Correct! React knows <Person /> is a component because it's capitalized.
  return <Person isLearning={true} />;
}
```

### Q. What is the difference between npx and npm?
NPM is a package manager and can be used to install node.js packages.
NPX is a tool to execute node.js packages.
It doesn't matter whether you installed that package globally or locally. NPX will temporarily install it and run it. NPM also can run packages if you configure a package.json file.

So if you want to check/run a node package quickly without installing it - use NPX.

'create-react-app' is a npm package that is expected to be run only once in a project's lifecycle. Hence, it is preferred to use npx to install and run it in a single step.

```
npx create-react-app
```

npm - Manager

npx - Execute

### Q. How to programmatically navigate using latest React Router version?

```javascript
//old - v5
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();
  history.push('/some/path here')
};

//new - v6+
import { useNavigate } from "react-router-dom";

function SignupForm() {
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    await submitForm(event.target);
    navigate("../success", { replace: true });
  }

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}

//or
import { redirect } from "react-router-dom";

const loader = async () => {
  const user = await getUser();
  if (!user) {
    return redirect("/login");
  }
};
```

### Q. How to pass data between sibling components using React router?
 Passing data between sibling components of React is possible using React Router useParams hook.

Parent component (usually App.js to define routes)
```javascript
<Route path="/user/:id" element={<User />} />
import { useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();

  useEffect(() => {
    console.log(`/user/${id}`);
  }, []);

  // .....
};
```
### Q. How to set focus on an input field after component mounts on UI?

```javascript
import React, { useEffect, useRef } from "react";

const SearchPage = () => {
  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <div>
      <input ref={textInput} type="text" />
    </div>
  );
};
```

### Q. Why virtual DOM is faster to update than real DOM?
 The virtual DOM is faster to update than the real DOM because React uses a clever technique to minimize the number of updates that need to be made to the real DOM.

When you update the virtual DOM, React will compare the new virtual DOM with the old one, determine which parts have changed, and then update the real DOM accordingly. This means that only the parts of the DOM that actually need to be changed are updated, which is much faster than updating the entire DOM every time there is a change.

Furthermore, the virtual DOM is implemented in JavaScript, which is generally faster to execute than the native code that is used to manipulate the real DOM.

This means that React can perform updates to the virtual DOM quickly, and then use the resulting diff to make efficient updates to the real DOM.

Overall, the use of the virtual DOM allows React to make efficient updates to the UI, which results in a faster and more responsive user experience.

### Q. How to access the latest value of a text input field in a React component using the 'useRef' hook?
 You can access the latest value of a text input field in a React component using the useRef hook as follows:
```javascript
import React, { useRef } from "react";

const InputComponent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Show value </button>
    </div>
  );
};
```

### Q. Create a React component that renders a nested list from a given array of objects. 
Each object can have a name property and a nested children property, which is an array of objects with the same structure.
The depth of nesting is unknown and can vary for different objects.

Implement the React component to render the nested list based on the provided data.

Example Data:
```javascript
const data = [
  {
    name: "Item 1",
    children: [
      {
        name: "Subitem 1.1",
        children: [
          { name: "Subsubitem 1.1.1", children: [] },
          { name: "Subsubitem 1.1.2", children: [] },
        ],
      },
      { name: "Subitem 1.2", children: [] },
    ],
  },
  {
    name: "Item 2",
    children: [
      { name: "Subitem 2.1", children: [] },
      { name: "Subitem 2.2", children: [] },
    ],
  },
];
```
Render the nested list using the provided data.


```javascript
import React from "react";

function NestedList({ data }) {
  const renderNestedItems = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            {item.children.length > 0 && renderNestedItems(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Nested List</h2>
      {renderNestedItems(data)}
    </div>
  );
}

export default NestedList;
```
The component NestedList recursively renders a nested list using the provided data prop. It checks if the current item has children and, if so, calls the renderNestedItems function recursively to render the nested list.

### Q. What is the difference between useEffect and useLayoutEffect?
 Here is an example of how you might use useEffect and useLayoutEffect in a React component:
```javascript
import React, { useState, useEffect, useLayoutEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  // useEffect runs after the render cycle has completed
  useEffect(() => {
    // This code will run every time the component renders,
    // after the render is complete.
    console.log("useEffect running");
  });

  // useLayoutEffect runs synchronously immediately after the render cycle
  useLayoutEffect(() => {
    // This code will run every time the component renders,
    // before the browser has a chance to paint the update to the screen.
    // Be careful! This can cause visual inconsistencies.
    console.log("useLayoutEffect running");
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
In this example, when the Increment button is clicked, the useEffect hook will run after the component has been updated and re-rendered, whereas the useLayoutEffect hook will run before the update is painted to the screen. This means that if you were to use useLayoutEffect to update the UI, the user might see the UI update before the update is complete, which can cause visual inconsistencies. useEffect, on the other hand, runs after the update is complete and is therefore safer to use for updating the UI.


### Q. Write a custom hook which can be used to debounce user's input.

```javascript
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return debouncedValue;
};

//example
const Counter = () => {
  const [value, setValue] = useState(0);
  const lastValue = useDebounce(value, 1000);

  return (
    <div>
      <p>
        Current Value: {value} | Debounced Value: {lastValue}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};
```

### Q. Write a custom hook to copy text to clipboard.

```javascript
// hook
function useCopyToClipboard(content) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard
      .writeText(content)
      .then(() => setIsCopied(true))
      .then(() => setTimeout(() => setIsCopied(false), 1250))
      .catch((err) => alert(err));
  }, [content]);
  return [isCopied, copy];
}

// usage
export default function App() {
  const [isCopied, copy] = useCopyToClipboard("Text to copy!");
  return <button onClick={copy}>{isCopied ? "Copied!" : "Copy"}</button>;
}
```

### Q. How to Use the 'useId' Hook to generate unique ids.

useId does not take any parameters.
useId returns a unique ID string associated with this particular useId call in this particular component.

```javascript
//usage
import { useId } from "react";

const App = () => {
  const id = useId();

  return (
    <form>
      <label htmlFor={`email-${id}`}>Email</label>
      <input type="text" id={`email-${id}`} name="email" />

      <label htmlFor={`password-${id}`}>Password</label>
      <input type="password" id={`password-${id}`} name="password" />
    </form>
  );
};

// 🔴 Bad Practise - Don't use for key
const id = useId();

return posts.map((post) => <article key={id}>...</article>);
```


### Q. Why React's useDeferredValue hook is useful?
 'useDeferredValue' is a React Hook that lets you defer updating a part of the UI.
Basically it let you perform the debouncing technique with lesser code.

```javascript
//usage
import { useState, useDeferredValue } from "react";
//userList component takes searchText to fetch user's list
import UserList from "./UserList.js";

export default function App() {
  const [searchText, setSearchText] = useState("");
  //pass searchText as default visible value in useDeferredValue
  const deferredQuery = useDeferredValue(searchText);

  return (
    <>
      <label>
        Search user:
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>
      <div>
        <UserList searchText={deferredQuery} />
      </div>
    </>
  );
}
```

### Q. How to detect 'click' outside React component?

```javascript
export default function OutsideAlerter() {
  const clickMeDivRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        alert("You clicked outside of me!");
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickMeDivRef]);

  return <div ref={clickMeDivRef}>Clicked me?</div>;
}
```

### Q. 3 ways to solve functions, arrays, objects recreated on every render.

- put it outside if it not depend on any thing inside component
- put it inside effect
- useMemo or useCallback

## Extra question to prepare- 


- How can we fetch API data without using useEffect hook?
- What are the security measures which should be considered during development?
- Can we return setData inside a component?
- Multiple useEffects in a same component?
- Higher order components or custom hooks? Which approach will you follow.
- Explain Middlewares in React which you have used?
- Box model, CSS animation, SASS variables and mixins in CSS.
- How authentication works with JWT?
- What is selective hydration?
- Crawlers, indexing a page and what are the ways?
- Error pages creation
- Memoization techniques, pure functions and pure components.
- Write a pgrm for form validation without using any library
- Performance optimization techniques explain
- Various hooks syntax useParam, use Reducer, useQuery, useContext and many more.
- Create a traingle using CSS
- api fetch
- infinite scroll
- breadcrumbs
- lazy loading component
- pagination
- multistep form
- tabs in react
- uploading
- custom hook for api call
- dark and light mode
- local storage
- modal 
- stopwatch 
- firm control
- multiselect search
- otp log in
- shopping cart
- image carousel 
- sticky scroll
- counter app using react redux
- Implement Star Rating functionality
- Design a Pop Over component
- Create an Accordion Ul component
- Design a Carousel for displaying images
- Build a grid using HTML/CSS and JavaScript with search,
- sort, and event bubbling (Amazon onsite)
- Design a responsive NavBar
- Implement Infinite Scroll feature
- Develop Typeahead/Autocomplete functionality using a trie data structure
- Implement a Debounce function
- Build a Tic Tac Toe game
- Create a Snake and Ladder board game
- Make a Calendar of any month like a Date Picker
- Implement a throttle function
- Create custom Higher Order Functions like Map, Reduce, Filter, and Sort
- Design an analog clock
- Build a Todo List application
- Implement functionality to change all text on a page to different translations
- Develop a Giphy image search and display feature (using the Giphy API) in a responsive format
- Build a Connect Four game
- Implement Nested Checkboxes where parent and children
- checkboxes are synchronized
- Create a poll widget
- Implement an Event Emitter
- Implement the Promise.all function
- Flatten a nested JavaScript array without using Array.prototype.flat()

https://www.newline.co/fullstack-react/30-days-of-react/

https://www.educative.io/courses/building-teslas-battery-range-calculator-with-react-and-redux

# Resources

react dom, reconciliation, rendering, etc

[https://youtu.be/i793Qm6kv3U?si=vTsnRaQTD8O7GN_B](https://youtu.be/i793Qm6kv3U?si=vTsnRaQTD8O7GN_B)

chai and code react tutorial:

https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=D3-JHVyDtisGR5dg

[https://github.com/learning-zone/react-basics](https://github.com/learning-zone/react-basics)

Frontend interview razorpay:

[https://youtu.be/q-ylRxSxGcY?si=wcjC7uMgBmOTBHU6](https://youtu.be/q-ylRxSxGcY?si=wcjC7uMgBmOTBHU6)

[https://github.com/Nahuel61920/30-React-projects-in-30-days](https://github.com/Nahuel61920/30-React-projects-in-30-days)

Built a file explorer in react

[https://youtu.be/20F_KzHPpvI?si=mexec1x85qu-musb](https://youtu.be/20F_KzHPpvI?si=mexec1x85qu-musb)

[https://youtu.be/ixgxx_um8r8?si=8AtryWG3qOEaxGYS](https://youtu.be/ixgxx_um8r8?si=8AtryWG3qOEaxGYS)

Pagination

[https://youtu.be/cBsB7hhOzQI?si=rBQSLM-90irQML7l](https://youtu.be/cBsB7hhOzQI?si=rBQSLM-90irQML7l)

Interview for unacademy 

[https://youtu.be/abbdJ4Yfm54?si=m5FP3PAf7TCGsRmN](https://youtu.be/abbdJ4Yfm54?si=m5FP3PAf7TCGsRmN)

React interview questions

[https://youtube.com/playlist?list=PLGZJDzu5NntRgpuqVtEb9e2tDaRYXRZFG&si=yz0rm5T0VrjH0o4i](https://youtube.com/playlist?list=PLGZJDzu5NntRgpuqVtEb9e2tDaRYXRZFG&si=yz0rm5T0VrjH0o4i)

React mistakes

[https://youtu.be/-yIsQPp31L0?si=S__z5RajCkl1ckoD](https://youtu.be/-yIsQPp31L0?si=S__z5RajCkl1ckoD)

React in depth

[https://youtu.be/za2FZ8QCE18?si=aWeTWjbA_YzZjKRe](https://youtu.be/za2FZ8QCE18?si=aWeTWjbA_YzZjKRe)

Redux

[https://www.youtube.com/watch?v=poQXNp9ItL4&ab_channel=ProgrammingwithMosh](https://www.youtube.com/watch?v=poQXNp9ItL4&ab_channel=ProgrammingwithMosh)

Redux

[https://www.youtube.com/watch?v=3rlUADfuKhQ&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=3&ab_channel=Codevolution](https://www.youtube.com/watch?v=3rlUADfuKhQ&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=3&ab_channel=Codevolution)

Redux by hitesh choudhary

[https://www.youtube.com/watch?v=pX0SBJF01EU&ab_channel=HiteshChoudhary](https://www.youtube.com/watch?v=pX0SBJF01EU&ab_channel=HiteshChoudhary)

Redux for beginners(important)

[https://www.youtube.com/watch?v=0W6i5LYKCSI&ab_channel=DipeshMalvia](https://www.youtube.com/watch?v=0W6i5LYKCSI&ab_channel=DipeshMalvia)

Redux thunk (important)

[https://www.youtube.com/watch?v=JDZRfLGNWdc&ab_channel=DipeshMalvia](https://www.youtube.com/watch?v=JDZRfLGNWdc&ab_channel=DipeshMalvia)

Use redux with api call using redux toolkit (redux,redux-thunk)-

[https://www.youtube.com/watch?v=2JBx_06dD1k&ab_channel=PiyushGarg](https://www.youtube.com/watch?v=2JBx_06dD1k&ab_channel=PiyushGarg)

# Interview tips -

Tips:

Here's my 3 step breakdown on cracking Frontend Machine Coding rounds.

• Questions pattern

(For longer Interview hours - Logical feature of Apps)

* WhatsApp Web Ul
* Instagram Comments Section
* Design Movies Page
* Design Carrom Board

(For shorter Interview hours - Small Ul components)

* •Dropdown
* Autocomplete
* Multi Select
* Star Ratings

Practice

(99% of the times you'll only need these coding utilities)

* useState
* useEffect
* Context
* Fetch API
* CSS flexbox, positions
* ES6 map, filter, spread, arrow funcs
* setTimeout, setInterval
* Event handling

Mistakes

(Don't waste your time on these)

* Writing Clean code
* File structure
* Beautifying Ul
* Breaking Ul to 20, 30 useless components

Focus on logical implementation with a working model first. This is what Interviewers care about.

# Git

![alt_text](./images/gitcheatsheet.png "image_tooltip")

# React terms and concepts

* spa meaning
* bundler(webpack and parcel)
* Jsx
* working of dom in react (reconciliation in react, virtual dom)
* ReactDOM.render()
* components 
* stateful vs stateless component 
* props
* prop drilling
* fragment
* component lifecycle -  lifecycle events
* element vs component
* contextual rendering
* send data from child to parent 
* counter app
* fruit app
* use of keys in react
* pure component (in class component)
* react memo - memoised component 
* mixins and higher order components (both are used for reusable behaviour that can be shared among multiple components. )
* class based vs functional components
* difference between mounting and rendering 
* Hooks
* useState
* useEffect
* useContext
* useMemo
* useRef
* refs - reference
* higher order components
* render prop
* forward refs
* custom hooks
* how do setTimeout reacts in useEffect hook
* context api
* synthetic events
* react fibre
* startTransition()
* performance optimisation in react
* code splitting
* lazy loading and suspense 
* react strictmode
* react developer tool
* react router - https://www.youtube.com/watch?v=Ul3y1LXxzdU&ab_channel=WebDevSimplified
* handle protected routes
* how to manage nested routes in a role based routing
* redux
* middlewares in redux
* redux thunk vs saga
* interceptor in react
* Axios
* pagination
* preventDefault()
* dengerouslySetInnerHTML
* jwt - json web token


# React practice problem

* Build Counter app
* Shopping cart in react js
* Dark mode - light mode
* file explorer 
* Flatten an array
* Merge sort
* Implement promise.all
* Todo list
* Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:
* Red light: 4000ms
* Yellow light: 500ms
* Green light: 3000ms
* Count number of times a value occurred in an array
* Debounce - limit number of times a function executes, by delaying the execution by specified time.
* Build Tabs component that displays a list of tab elements and one content at a time.
* Build calculator
* Build Holy grail layout- The Holy Grail layout is a famous CSS page layout that has traditionally been hard to implement. It consists of a header, footer, and three columns. The left column contains navigation items, the middle column contains the page contents, and the right column contains ads.
* Build tic tac toe
* Build a component that allows transferring of items between two lists, bulk selection/ deselection of items, and adding of new items.
* Build a slider, on increasing/ decreasing the slider value should reflect in a pieChart.
* Merge two object together.
* Create a stopwatch
* Star Rating- build a stat rating component that shows a row of star icons for users to select the number of filled stars corresponding to the rating.
* Generate a table of numbers given the rows and columns.
* Ability to call an API and parse JSON.
* Ability to handle promises.
* Ability to put data into state and use that to render on the page.
* Basic CSS (flexbox, border styles, background, centering a div on page)
* Ability  to handle events and gather target's value from input boxes (event.target.value)
* Ability to use hooks such as useState, useEffect.
* Ability to pass the right dependency array to useEffect.
* Create an app to fetch data from a JSON API. Use this data to render on the page. Provide ability to paginate the results 
* Create a typeahead component.(autocomplete using array of names)
* Given a mock, use React to render on the page. eg. 10 box are there with a flip button on it to reveal an image on it.
* Infinite scrolling app
* Create a form that gathers user's data and sends it to the server.
* Create a tic tac toe game.
* Create a slideshow type app. The data of slides could be given. It contains an image url, and the title of the slide. Left and Right navigation buttons are needed.
* Create a form app that has a different state of UI when a field is selected, has value or is visited. (Uses onFocus, onBlur events)
* Create a ticker that increments value every second.
* Create an app that allows user to click a button 5 times, and times them out afterwards.
* Create an app that uses debouncing / throttling.

