function removeContentFrom(what) {
  what.textContent = '';
}

function showItems(items, where) {
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

  const itemlist = document.querySelector('#itemslist');
  removeContentFrom(itemlist);
  showItems(items, itemlist);
}

function pageLoaded() {
  loadItems();
}

window.addEventListener('load', pageLoaded);
