var form = document.getElementById('addForm');
var itemsList = document.getElementById('items');
var filter= document.getElementById('filter');

var bef = document.getElementById('sub');
var ne = document.createElement('input');
ne.className = "form-control mr-2";
ne.id= 'des';
form.insertBefore(ne, bef);


form.addEventListener('submit', addItem);
itemsList.addEventListener('click',delet);
filter.addEventListener('keyup',searching);

function addItem(e) {
  e.preventDefault(); 

  var li = document.createElement('li');
  li.className = "list-group-item";
  var newit = document.getElementById('item').value; 
  var neit= document.getElementById('des').value; 
  var br=document.createElement('br');
  
  li.appendChild(document.createTextNode(newit));
  li.appendChild(br);
  li.appendChild(document.createTextNode(neit));

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
function searching(e){
    var text=e.target.value.toLowerCase();
    var items=itemsList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var ite=item.textContent;
        if(ite.toLowerCase().indexOf(text)!= -1){
            item.style.display= 'block';
        }else 
        {
            item.style.display= 'none';
        }
    });
}


