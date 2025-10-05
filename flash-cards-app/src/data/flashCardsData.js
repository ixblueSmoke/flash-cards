// Flash card data with JavaScript questions and answers
export const flashCardsData = [
  {
    id: 1,
    question: "What is the difference between 'let', 'const', and 'var' in JavaScript?",
    answer: "'var' is function-scoped and can be redeclared and updated. 'let' is block-scoped and can be updated but not redeclared. 'const' is block-scoped, cannot be updated or redeclared, and must be initialized at declaration.",
    category: "Variables"
  },
  {
    id: 2,
    question: "What is a closure in JavaScript?",
    answer: "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned. Closures are created every time a function is created.",
    category: "Functions"
  },
  {
    id: 3,
    question: "What is the difference between '==' and '===' in JavaScript?",
    answer: "'==' performs type coercion and compares values after converting them to the same type. '===' performs strict comparison without type coercion - both value and type must be the same.",
    category: "Operators"
  },
  {
    id: 4,
    question: "What is 'hoisting' in JavaScript?",
    answer: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope during compilation. Variables declared with 'var' are hoisted and initialized with 'undefined', while 'let' and 'const' are hoisted but not initialized.",
    category: "Concepts"
  },
  {
    id: 5,
    question: "What is the 'this' keyword in JavaScript?",
    answer: "'this' refers to the object that is executing the current function. Its value depends on how the function is called: in methods it refers to the owner object, in functions it refers to the global object (or undefined in strict mode).",
    category: "Concepts"
  },
  {
    id: 6,
    question: "What is an arrow function and how does it differ from regular functions?",
    answer: "Arrow functions are a shorter syntax for writing functions. Key differences: they don't have their own 'this' binding, can't be used as constructors, don't have 'arguments' object, and cannot be hoisted.",
    category: "Functions"
  },
  {
    id: 7,
    question: "What is the difference between 'null' and 'undefined'?",
    answer: "'undefined' means a variable has been declared but not assigned a value. 'null' is an assignment value that represents no value or empty value. 'null' is an object type, while 'undefined' is undefined type.",
    category: "Data Types"
  },
  {
    id: 8,
    question: "What is a Promise in JavaScript?",
    answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, or rejected. Promises help avoid callback hell and provide better error handling.",
    category: "Async"
  },
  {
    id: 9,
    question: "What is the difference between 'map()', 'filter()', and 'reduce()' array methods?",
    answer: "'map()' creates a new array with results of calling a function on every element. 'filter()' creates a new array with elements that pass a test. 'reduce()' executes a reducer function on each element, resulting in a single output value.",
    category: "Arrays"
  },
  {
    id: 10,
    question: "What is event bubbling and event capturing?",
    answer: "Event bubbling is when an event starts from the target element and bubbles up to the root. Event capturing is the opposite - the event starts from the root and goes down to the target. You can control this with the third parameter in addEventListener().",
    category: "Events"
  },
  {
    id: 11,
    question: "What is the difference between synchronous and asynchronous JavaScript?",
    answer: "Synchronous code executes line by line, blocking further execution until the current operation completes. Asynchronous code allows other operations to continue while waiting for the async operation to complete, using callbacks, promises, or async/await.",
    category: "Async"
  },
  {
    id: 12,
    question: "What is destructuring in JavaScript?",
    answer: "Destructuring is a syntax that allows you to extract values from arrays or properties from objects into distinct variables. It provides a clean way to unpack values: const [a, b] = array or const {name, age} = object.",
    category: "ES6+"
  },
  {
    id: 13,
    question: "What is the spread operator (...) in JavaScript?",
    answer: "The spread operator allows an iterable (like an array or string) to be expanded in places where zero or more arguments or elements are expected. It can be used for copying arrays, merging arrays, converting strings to arrays, etc.",
    category: "ES6+"
  },
  {
    id: 14,
    question: "What is the difference between a function declaration and a function expression?",
    answer: "Function declarations are hoisted and can be called before they're defined. Function expressions are not hoisted and cannot be called before they're defined. Function declarations create a variable in the current scope with the function name.",
    category: "Functions"
  },
  {
    id: 15,
    question: "What is the prototype chain in JavaScript?",
    answer: "The prototype chain is the mechanism by which JavaScript objects inherit properties and methods from other objects. Each object has a __proto__ property that points to its prototype, creating a chain that ends with Object.prototype.",
    category: "Objects"
  }
];