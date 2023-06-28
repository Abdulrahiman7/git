var form=document.getElementById('newform');

form.addEventListener('submit', newForm);
var ul=document.createElement('ul');

function newForm(e)
{
    e.preventDefault();

    let nm=document.getElementById('name').value;
    let no=document.getElementById('number').value;
    let em=document.getElementById('email').value;
    
    
    var li=document.createElement('li');
    li.setAttribute('email-data',em);
    var text=document.createTextNode('name='+nm+'   no.='+no+" Submitted");
    var del=document.createElement('button');
    del.textContent="delete";
    var edit=document.createElement('button');
    edit.textContent="Edit";
    li.appendChild(text);
    li.appendChild(del);
    li.appendChild(edit);
    ul.appendChild(li);

    del.addEventListener('click',function()
    {
            var de=this.parentElement;
            ul.removeChild(de);
            var ema=de.getAttribute('email-data');  
        localStorage.removeItem(ema);
    });
    edit.addEventListener('click',function(e)
    {
        e.preventDefault();
        var n=document.getElementById('name');
        n.value=nm;
        var n=document.getElementById('email');
        n.value=em;
        var n=document.getElementById('number');
        n.value=no;
        var de=this.parentElement;
            var e=de.getAttribute('email-data');  
        localStorage.removeItem(e);
    });
form.appendChild(ul);
var newitem={
    name:nm,
    email:em,
    number:no
};
em=document.getElementById('email').value;
var c=JSON.stringify(newitem);
localStorage.setItem(em, c);
}