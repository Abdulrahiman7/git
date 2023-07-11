var fom=document.getElementById('newform');
let sub=document.getElementById('sub');
sub.addEventListener('click',formne);
var ul=document.createElement('ul');
var i=0;
function formne(e)
{
    e.preventDefault();
    let amount=document.getElementById('expense').value;
    let des=document.getElementById('description').value;
    let cat=document.getElementById('category').value;

    var li=document.createElement('li');
    li.setAttribute('expen',amount);
    let list=document.createTextNode('Expense details and description'+amount+' '+des+' '+cat);
    let del=document.createElement('button');
    del.textContent='delete';
    let editing=document.createElement('button');
    editing.textContent='edit';
    li.appendChild(list);
    li.appendChild(editing);
    li.appendChild(del);
    ul.appendChild(li);

    del.addEventListener('click', function(e){
        e.preventDefault();
        let de=this.parentElement;
        ul.removeChild(de);
        let ema=de.getAttribute('expen');  
        localStorage.removeItem(ema);
    });
    editing.addEventListener('click',function(e){
        e.preventDefault();
        let z=this.parentElement;
        document.getElementById('expense').value=amount;
        document.getElementById('description').value=des;
        document.getElementById('category').value=cat;
        let ema=z.getAttribute('expen');  
        localStorage.removeItem(ema);
    });  
fom.appendChild(ul);
var newitem={
    expense:amount,
    description:des,
    category:category
};
let c=JSON.stringify(newitem);
localStorage.setItem(i,c);
i++;
}
    
    
    
    