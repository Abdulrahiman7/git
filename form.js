let i=0;
var form=document.getElementById('newform');
form.addEventListener('submit', newForm);
function newForm(e)
{
    e.preventDefault();
    var newitem={
         a:document.getElementById('txt').value,
         b:document.getElementById('tx').value
    };
    var c=JSON.stringify(newitem);
    localStorage.setItem(i++, c);
}