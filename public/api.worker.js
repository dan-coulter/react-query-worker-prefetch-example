fetch('http://localhost:3001/todos')
    .then((res) => res.json())
    .then((data) => postMessage({ query: 'query-todos', data }));
