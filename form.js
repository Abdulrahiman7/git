var form=document.getElementById('newform');
form.addEventListener('submit', newForm);
function newForm(e)
{
    e.preventDefault();
    var newitem={
         name:document.getElementById('name').value,
         email:document.getElementById('email').value,
         number:document.getElementById('number').value
    };
    em=document.getElementById('email').value;
    var c=JSON.stringify(newitem);
    localStorage.setItem(em, c);
}