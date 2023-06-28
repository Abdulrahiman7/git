var formindex=0;
var form=document.getElementById('newform');
form.addEventListener('submit', newForm);
function newForm(e)
{
    e.preventDefault();
    var newitem=document.getElementById('txt').value;
    localStorage.setItem('form '+formindex++,newitem);
}