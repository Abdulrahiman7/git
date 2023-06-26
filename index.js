var l=document.getElementById('main-header');
l.style.borderBottom= 'solid 3px yellow';
for(let i=0;i<ite.length;i++)
{
ite[i].style.fontWeight= 'bold';
}
var i=document.getElementsByClassName('list-group-item');
i.style.color= 'red';
var hea=document.querySelector('.list-group-item:last-child');
hea.style.color= 'red';
var th=document.querySelector('.list-group-item:nth-child(3)');
th.style.display= 'none';