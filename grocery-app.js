const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

/* Add an item function */
function addItemToList() {
  if (inputBox.value === '') {
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = '\u00d7'
    li.appendChild(span);
  }

  inputBox.value = '';
  countItems();
  saveList();
}

/* Add item by Enter */
function addItemByEnter() {
  inputBox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('add-item-button').click();
      countItems();
    }
  })
}

/* Checking and unchecking items */
listContainer.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveList();
    countItems();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    countItems();
    saveList();
  }
}, false);

/* Local storage */
function saveList() {
  localStorage.setItem('list', listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem('list')
}

showList();

/* Clear checked items on list */
function clearList() {
  const checked = document.querySelectorAll('.checked')
    for (let i = 0; i < checked.length; i++) {
      checked[i].parentNode.removeChild(checked[i]);
    }
  saveList();
  showList();
}

/* Count remaining items */
const remainingItemsCount = document.getElementById('remaining-items');

function countItems () {
  const numOfLis = document.querySelectorAll("li").length;
  const checked = document.getElementsByClassName('checked')
  remainingItemsCount.innerHTML = `${numOfLis}` - checked.length;
  saveList();
  showList();
}

countItems();




/* throubleshooting 
- remaining items number
- do not add task if already present or put a note it's repeated?
- edit item names
*/


/* Clear checked items on list 
function clearList() {
  //const checked = document.getElementsByClassNameAll('checked')
  const checked = document.querySelectorAll('.checked')
  for (let i = 0; i < checked.length; i++) {
  checked[i].parentNode.removeChild(checked[i]);
    //checked[i].remove();
  }
  saveList();
  showList();
}
*/