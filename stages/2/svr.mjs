import express from 'express';

const app = express();
app.use(express.static('client'));

const messages = [
    'All Items',
    'Cold Drinks',
    'Hot Drinks',
    'Quick Bites',
  ];
  
  app.get('/items', (req, res) => {
    res.json(items);
  });

app.listen(3000);
