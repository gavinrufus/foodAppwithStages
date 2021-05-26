const el = {};

function removeContentFrom(what) {
  what.textContent = '';
}

function showItems(items, where) {
  for (const item of items) {
    const li = document.createElement('li');
    li.textContent = item.name;
    li.textContent += item.price;
    li.dataset.id = item.id;
    where.append(li);

    li.addEventListener('mouseenter', showCalories);
  }
}

function showCart(cartItems, where) {
  for (const cartItem of cartItems) {
    const li = document.createElement('li');
    li.textContent = cartItem.idOfItem;
    li.textContent += cartItem.time;
    where.append(li);
  }
}

async function showCalories(e) {
  const response = await fetch('items/' + e.target.dataset.id);
  if (response.ok) {
    const detail = await response.json();
    const p = document.createElement('p');
    p.textContent = `callories of item was ${detail.callories}`;
    removeContentFrom(el.filterItems);
    el.filterItems.append(p);
  } else {
    console.log('showCalories did not get a response from server');
  }
}

async function loadItems() {
  const response = await fetch('items');
  let items;
  if (response.ok) {
    items = await response.json();
  } else {
    items = [{ name: 'failed to load items' }];
  }
  removeContentFrom(el.itemlist);
  showItems(items, el.itemlist);
}

// function checkKeys(e) {
//   if (e.key === 'Enter') {
//     searchItem();
//   }
// }

/** add item to cart, right now I am manually giving it the id of item */
async function addToCart() {
  const payload = { id: 1 };
  console.log('Payload', payload);

  const response = await fetch('items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    console.log('item was added to cart');
    const updatedCard = await response.json();
    removeContentFrom(el.cart);
    showCart(updatedCard, el.cart);
  } else {
    console.log('failed to send cart', response);
  }
}


// async function searchItem() {
//   const payload = { itm: el.item.value };
//   console.log('Payload', payload);

//   const response = await fetch('items', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });

//   if (response.ok) {
//     el.item.value = '';
//     const updatedItems = await response.json();
//     removeContentFrom(el.itemlist);
//     showItems(updatedItems, el.itemlist);
//   } else {
//     console.log('failed to search items', response);
//   }
// }

function prepareHandles() {
  el.itemlist = document.querySelector('#itemlist');
  el.item = document.querySelector('#item');
  el.search = document.querySelector('#search');
  el.filterItems = document.querySelector('#filterItems');
  el.cart = document.querySelector('#cart');
}

// function addEventListeners() {
//   // el.search.addEventListener('click', searchItem);
//   el.item.addEventListener('keyup', checkKeys);
// }

function pageLoaded() {
  prepareHandles();
  // addEventListeners();
  loadItems();
  addToCart();
}

window.addEventListener('load', pageLoaded);
