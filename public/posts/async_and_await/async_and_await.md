---
title: Async and await
published: true
slug: async_await
date: '2024-02-03'
description: Deep dive - async and await
categories:
  - Tech
  - Programming
toc: |
    - [Async/Await](#asyncawait)
    - [The only difference is the execution context between promise and async/await.](#the-only-difference-is-the-execution-context-between-promise-and-asyncawait)
    - [What are the advantages of `async/await` over `Promise` chaining?](#what-are-the-advantages-of-asyncawait-over-promise-chaining)
      - [Key advantages of `async/await` over `Promise` chaining:](#key-advantages-of-asyncawait-over-promise-chaining)
        - [1. Cleaner and More Readable Code](#1-cleaner-and-more-readable-code)
        - [2. Error Handling](#2-error-handling)
        - [3. Avoiding "Callback Hell"](#3-avoiding-callback-hell)
        - [4. Easier Debugging](#4-easier-debugging)
        - [5. Conditional and Sequential Execution](#5-conditional-and-sequential-execution)
        - [6. Handling Multiple Promises Concurrently](#6-handling-multiple-promises-concurrently)
---

# Async/Await

- async and await are keywords in javascript,
- It is a way to handle asynchronous operations, just like Promise and Callback functions,
- It is a syntactical sugar over the implementation of Promise,
- It allows us to implement asynchronuous operations as if it is a synchronous operation,
- awaits can be used only inside an async function or in top level of a module(Top level await).
- async function always returns a Promise object.
- It might look like it blocks the main thread but it doesn't.
- await should be used before a function that returns a promise. 
  
```javascript
async function fetchData(){ //normal function
    await someFuntionThatReturnsPromise();
}

const fetchData = async()=>{ //arrow function
    await someFuntionThatReturnsPromise();
}

```
Let see with some code...

```javascript
const fetchData = () => {
    // this is a function to simulate a asynchronous operation
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve('Data fetched successfully');
        }, 2000)
    })
}

// async function
const getData = async () => {
    const data = await fetchData(); // fetchData is an asynchronous operation, meaning we will get result in future.
    return data; // this data returned will always be a promise object
}

console.log('get data...');

//Invoke the getData funtion, that will return a promise object, but how would we handle that promise object? Yes using .then() method

getData().then((result) => {
    console.log(result);// output: Data fetched successfully
})


console.log('see call stack is not blocked!!!')

// output:
// get data...
// Data fetched successfully
// see call stack is not blocked!!!
```

From the above example you can see that call stack is not blocked.
Let's check the flow of control:

- We know javascript is executed from top to bottom.
- fetchData and getData are initialised.
- get data... is logged to the console.
- getData() function is invoked,
- control moved to the function getData
- since it is a async function and it has an await keyword, which is awaiting an asynchronous operation, the async function is suspended from the call stack and runtime takes it from there and executes it is different thread.
- In the meantime, the control moves to the next statement, after the function invocation. Because the call stack is free to execute next task, it is not blocked.
- 'see call stack is not blocked!!!' is logged to the console.
- After the asynchronous operation is completed executing, the runtime puts the suspended function and the data received from asynchronous operation to the micro-task queue.
- We know that the event loop will place task from the micro-task queue to the call stack if the call stack is empty in First in First out order.
- Since the call stack was empty, we can see the. .then() is executed with the result it got from the asynchronous operation.
- 
```javascript
getData().then((result) => {
    console.log(result); // output: Data fetched successfully
})
```

Now that you got the hang of it let's try to implement async await in real world problem-

```javascript
// async function
const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

console.log('get data...');

getData().then((result) => {
    console.log(result);
})

console.log('see call stack is not blocked!!!')

// output:
// get data...
// see call stack is not blocked!!!
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

```


# The only difference is the execution context between promise and async/await.

When a Promise is created and the asynchronous operation is started, the code after the Promise creation continues to execute synchronously. When the Promise is resolved or rejected, the attached callback function in the .then() method, is added to the microtask queue. The microtask queue is processed after the current task has been completed but before the next task is processed from the task queue. This means that any code that follows the creation of the Promise will execute before the callback function attached to the Promise(i.e the callback passed to .then() method, not the executor function) is executed.

On the other hand, with Async/Await, the await keyword causes the JavaScript engine to pause the execution of the async function until the Promise is resolved or rejected. While the async function waits for the Promise to resolve, it does not block the call stack, and any other synchronous code can be executed. Once the Promise is resolved,it is put into the microtask queue, and if the call stack becomes free the event loop takes the task from the queue and puts into the call stack,then the execution of the async function resumes, and the result of the Promise is returned. If rejected, it throws an error value.


# What are the advantages of `async/await` over `Promise` chaining?
The `async/await` syntax in JavaScript provides several advantages over the traditional use of `Promise` chaining with `.then()` and `.catch()`. While both achieve the same goal of handling asynchronous code, `async/await` simplifies and improves the readability, error handling, and structure of asynchronous operations.

## Key advantages of `async/await` over `Promise` chaining:

---

### 1. Cleaner and More Readable Code

- `async/await` makes asynchronous code look more like synchronous code. This helps to reduce the complexity that comes with chaining multiple `.then()` calls and nested callbacks, making the code easier to read and follow.

**Example:**

Using Promises:


```javascript
fetchData()
    .then((data) => {
        return processData(data);
    }).then((result) => {
        return saveResult(result);
    }).catch((error) => {
        console.error('Error:', error);
    });
```

Using `async/await`:

```javascript
try {
    const data = await fetchData();
    const result = await processData(data);
    await saveResult(result);
} catch (error) {
    console.error('Error:', error);
}
```

- In the `async/await` version, the sequence of operations is clearer, resembling a synchronous flow, making it easier to follow the logic of the program.

---

### 2. Error Handling

- With `async/await`, you can handle errors more effectively using `try/catch` blocks, which work like they do in synchronous code. This can be more intuitive compared to chaining multiple `.catch()` blocks in promise chains.

**Example:**

Handling errors with promises:

```javascript
fetchData()
    .then((data) => processData(data))
    .catch((error) => handleError(error))
    .then((result) => saveResult(result))
    .catch((error) => handleError(error));
```

Handling errors with `async/await`:

```javascript
try {
    const data = await fetchData();
    const result = await processData(data);
    await saveResult(result);
} catch (error) {
    handleError(error);
}
```

- With `async/await`, you handle errors in one `try/catch` block, providing a cleaner, unified error-handling approach.

---

### 3. Avoiding "Callback Hell"

- Deeply nested `.then()` chains can lead to what’s known as "callback hell," where code becomes increasingly difficult to follow as it grows more nested and complex. `async/await` flattens the structure of asynchronous code, making it easier to avoid this problem.

**Example:**

Using Promises with nesting:

```javascript

fetchData().then((data) => {
    return processData(data)
        .then((result) => {
            return saveResult(result)
                .then(() => {
                    console.log('All done!');
                });
        });
})
    .catch((error) => console.error(error));
```

Using `async/await`:

```javascript
try {   
	const data = await fetchData();   
	const result = await processData(data);   
	await saveResult(result);   
	console.log('All done!'); 
}catch (error) {   
	console.error(error);
}
```

- `async/await` eliminates nesting and provides a linear flow.

---

### 4. Easier Debugging

- Since `async/await` code resembles synchronous code, it’s easier to set breakpoints and step through the code in debugging tools. When debugging `Promise` chains, you often have to jump across `.then()` blocks, which can be more cumbersome.

---

### 5. Conditional and Sequential Execution

- With `async/await`, managing conditions and loops with asynchronous code becomes more straightforward. When using Promises, managing sequential async operations or conditionally awaiting something can lead to complex chains or nesting.

**Example:**

Sequential execution with Promises:

```javascript
fetchData().then((data) => {
    if (data.needsProcessing) {
        return processData(data);
    } else {
        return Promise.resolve('No processing needed');
    }
})
    .then((result) => saveResult(result))
    .catch((error) => console.error(error));
```

Sequential execution with `async/await`:

```javascript
try {
    const data = await fetchData();
    const result = data.needsProcessing
        ? await processData(data)
        : 'No processing needed';
    await saveResult(result);
} catch (error) {
    console.error(error);
}
```

- `async/await` simplifies conditional logic and sequential execution in a clean, readable way.

---

### 6. Handling Multiple Promises Concurrently

- While `async/await` is great for sequential tasks, it can also handle concurrent promises with `Promise.all()`. This allows you to await multiple promises in parallel and manage them more naturally compared to chaining.

**Example:**

```javascript
async function fetchDataConcurrently() {
    try {
        const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);  // Handle both results here   
    } catch (error) {
        console.error(error);
    }
}
```

- This achieves concurrency while retaining the benefits of error handling with `try/catch`.