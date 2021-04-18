function removeContentFrom(what) {
  what.textContent = '';
}

function showMessages(Items, where) {
  for (const Item of Items) {
    const li = document.createElement('li');
    li.textContent = Item;
    where.append(li);
  }
}

async function loadItems() {
  const response = await fetch('Items');
  let Items;
  if (response.ok) {
    Items = await response.json();
  } else {
    Items = ['failed to load messages :-('];
  }

  const itemlist = document.querySelector('#itemslist');
  removeContentFrom(itemlist);
  showIteams(items, itemlist);
}

function pageLoaded() {
  loadItems();
}

window.addEventListener('load', pageLoaded);
