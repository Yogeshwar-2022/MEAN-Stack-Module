// <!-- Synchronous (Blocking) Operations:
// In a synchronous scenario, the waiter takes an order from Table 1, gives it to the chef, and waits until the chef completes cooking before moving on to Table 2. The process is sequential and blocking, meaning each step must be finished before proceeding to the next. The waiter can only take an order from Table 2 after serving the food to Table 1. It's akin to waiting for a task to complete before starting the next one.

// Asynchronous (Non-blocking) Operations:
// In an asynchronous scenario, the waiter takes an order from Table 1, gives it to the chef, and immediately moves on to Table 2 to take another order while the chef is still cooking for Table 1. The waiter doesn't wait for the chef to finish cooking for Table 1 before taking orders from other tables. This non-blocking approach allows the waiter to be more efficient, serving multiple tables simultaneously. In programming, asynchronous operations enable the program to initiate tasks without waiting for the completion of previous ones, improving overall responsiveness and efficiency.

// Key Points:

// Synchronous (Blocking):

// Sequential execution, one task at a time.
// Each task must complete before moving on to the next.
// Blocking nature may lead to waiting periods.

// Asynchronous (Non-blocking):

// Concurrent execution of tasks.
// Tasks can be initiated without waiting for the completion of previous ones.
// Improved efficiency, especially in scenarios with I/O operations or waiting times. -->

const { isUtf8 } = require("buffer");
const fs = require("fs");

// fs.writeFile("read.txt", "today is awesome day", (err) => {
//   console.log("files is created ");
//   console.log(err);
// });

fs.appendFile("read.txt", " my channel share like ", (err) => {
  console.log("task completed ");
});

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});
