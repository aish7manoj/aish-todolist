const express = require('express');
const cors = require('cors');
const app = express();
const port = 5173;

app.use(express.json());
app.use(cors());

let todos = [
  { id: 1, text: 'Dish', completed: false },
  { id: 2, text: 'Cooking', completed: false }
];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const todo = { id: Date.now(), ...req.body };
  todos.push(todo);
  res.json(todo);
});

app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  todos = todos.map(todo => (todo.id === parseInt(id) ? updatedTodo : todo));
  res.json(updatedTodo);
});

app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
