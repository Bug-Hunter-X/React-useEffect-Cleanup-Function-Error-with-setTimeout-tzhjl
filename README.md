# React useEffect Cleanup Function Error

This example demonstrates a common error in React's `useEffect` hook: improperly handling cleanup functions when using `setTimeout` or similar asynchronous operations.  Failing to return a cleanup function can lead to memory leaks and unexpected side effects.  The solution shows how to correctly implement a cleanup function to prevent these issues.

## Bug

The bug lies in the `useEffect` hook of `MyComponent`. The `setTimeout` function is used to update the `count` state every second. However, the return value of `setTimeout` (which is a timeout ID) is not used as a cleanup function. This means that when the component unmounts, the `setTimeout` continues to run, leading to potential memory leaks and unexpected behavior after the component is no longer rendered.

## Solution

The solution uses the timeout ID returned by `setTimeout` as the cleanup function. This ensures that `clearTimeout` is called when the component unmounts, preventing further updates to the state and freeing up resources.