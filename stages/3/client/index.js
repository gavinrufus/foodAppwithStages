function removeContentFrom(what) {
  what.textContent = '';
}

function showMessages(items, where) {
  for (const item of items) {
    const li = document.createElement('li');
    li.textContent = item;
    where.append(li);
  }
}

async function loadItems() {
  const response = await fetch('items');
  let items;
  if (response.ok) {
    items = await response.json();
  } else {
    items = ['failed to load items'];
  }
  removeContentFrom(el.itemlist);
  showItems(items, el.itemlist);
}

function checkKeys(e) {
  if (e.key === 'Enter') {
    searchItem();
  }
}

async function searchItem() {
  const payload = { itm: el.item.value };
  console.log('Payload', payload);

  const response = await fetch('items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    el.item.value = '';
    const updatedItems = await response.json();
    removeContentFrom(el.itemlist);
    showItems(updatedItems, el.itemlist);
  } else {
    console.log('failed to search items', response);
  }
}

function prepareHandles() {
  el.itemlist = document.querySelector('#itemlist');
  el.item = document.querySelector('#item');
  el.search = document.querySelector('#search');
}

function addEventListeners() {
  el.search.addEventListener('click', searchItem);
  el.item.addEventListener('keyup', checkKeys);
}

function pageLoaded() {
  prepareHandles();
  addEventListeners();
  loadItems();
}

window.addEventListener('load', pageLoaded);
