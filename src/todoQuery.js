export const todoQuery = {
    queryKey: 'todos',
    queryFn: () =>
        fetch('http://localhost:3001/todos').then((res) => res.json()),
};
