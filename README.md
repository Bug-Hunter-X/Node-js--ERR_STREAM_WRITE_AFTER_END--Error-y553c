# Node.js 'ERR_STREAM_WRITE_AFTER_END' Error

This repository demonstrates a common error in Node.js applications: the 'ERR_STREAM_WRITE_AFTER_END' error. This error occurs when you try to write data to a response object after the response has already ended.  This often happens when a long-running task is initiated, and the client closes the connection prematurely.

## Scenario

The `bug.js` file contains a simple HTTP server that simulates a long-running task (a 10-second timeout). If the client closes the connection before the timeout completes, the server will throw the 'ERR_STREAM_WRITE_AFTER_END' error.

## Solution

The `bugSolution.js` file provides a solution. It checks if the response is writable before attempting to write data to it.  This prevents the error by gracefully handling situations where the client closes the connection early.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run `node bug.js`.
4. Open your browser or use a tool like `curl` to make a request to `http://localhost:3000`.  
5. Try interrupting the request before it completes (e.g., by closing the browser tab or using Ctrl+C in the terminal).

You should see the error message in your console.
Then, try steps 2-5 with `bugSolution.js` to see the corrected behavior.