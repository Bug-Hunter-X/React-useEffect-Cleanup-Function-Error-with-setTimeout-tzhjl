```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Correct: Return a cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return <div>Count: {count}</div>;
}
```