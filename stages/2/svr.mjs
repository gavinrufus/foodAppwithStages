import express from 'express';

const app = express();
app.use(express.static('client'));

const items = [
  'Cola',
  'Milk Shake',
  'Ice cream',
  'Cake',
];

app.get('/items', (req, res) => {
  res.json(items);
});

app.listen(3000);
