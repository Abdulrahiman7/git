var l=document.getElementById('main-header');
l.style.borderBottom= 'solid 3px blue';
for(let i=0;i<ite.length;i++)
{
ite[i].style.fontWeight= 'bold';
}
var ite=document.getElementsByClassName('list-group-item');
ite[2].style.backgroundColor= 'green';

var hea=document.querySelector('.list-group-item:last-child');
hea.style.color= 'red';
var th=document.querySelector('.list-group-item:nth-child(3)');
th.style.display= 'none';