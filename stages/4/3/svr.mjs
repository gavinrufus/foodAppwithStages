import express from 'express';

const app = express();
app.use(express.static('client'));

let items = [
    'All Items',
    'Cold Drinks',
    'Hot Drinks',
    'Quick Bites',
  ];
  
  app.get('/items', (req, res) => {
    res.json(items);
  });

  app.post('/items', express.json(), (req, res) => {
    items = [req.body.itm, ...items.slice(0, 9)];
    res.json(items);
  });

app.listen(3000);
