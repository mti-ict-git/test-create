const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

const tasks = [];

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/add', (req, res) => {
  const { title, status } = req.body;
  if (title) {
    const id = tasks.length + 1;
    tasks.push({ id, title, status });
  }
  res.redirect('/');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
