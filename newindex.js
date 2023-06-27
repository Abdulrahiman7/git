var form = document.getElementById('addForm');
var itemsList = document.getElementById('items');


form.addEventListener('submit', addItem);
itemsList.addEventListener('click',delet);

function addItem(e) {
  e.preventDefault(); 

  var li = document.createElement('li');
  li.className = "list-group-item";
  var newit = document.getElementById('item').value; 
  li.appendChild(document.createTextNode(newit));

  var delet=document.createElement('delete');
  delet.className= "btn btn-danger btn-sm float-right delete";
  delet.appendChild(document.createTextNode('X'));
  li.appendChild(delet);
  itemsList.appendChild(li);
}
function delet(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            var li=e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
}
var items = document.getElementsByClassName('list-group-item');

for (let i = 0; i < items.length; i++) {
  var editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  items[i].appendChild(editButton);
}