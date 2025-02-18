# Node.js Server Port Binding Issue

This repository demonstrates a common error encountered when running Node.js servers: the `EADDRINUSE` error, which occurs when the server attempts to bind to a port that's already in use.  The example code shows a basic HTTP server and how to handle the port binding error gracefully.

## Problem

The `server.listen()` method in Node.js will throw an error if the specified port is already occupied.  This often happens if you try to start the server while another instance of the same application (or a different application) is already using that port. 

## Solution

The solution involves implementing retry logic or using a different port if the initial port is unavailable. The example solution employs a retry mechanism with a small delay before attempting to bind to the port again.