import express from 'express';
import uuid from 'uuid-random';

const app = express();
app.use(express.static('client'));

// foodItem: {
//     id: int,
//     name: string,
//     description: string,
//     price: float,
//     image: string,
//     rating: float,
//     numReviews: int
// }

const items = [
  {
    id: 1,
    name: 'banana milk shake',
    callories: 1000,
    price: 5.50,
  },
  {
    id: 2,
    name: 'strawberry milk shake',
    callories: 2000,
    price: 6.50,
  },
];

let cart = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  console.log('the id coming from request was: ' + req.params.id);

  for (const item of items) {
    if (item.id === req.params.id) {
      res.json(item);
      return; // short
    }
  }
  res.status(404).send('No match for that ID.');
});

app.post('/items', express.json(), (req, res) => {
  const newCartItem = {
    id: uuid(),
    idOfItem: req.body.id,
    time: Date(),
  };
  cart = [newCartItem, ...cart];
  res.json(cart);
});


app.listen(3000);
