var l=document.getElementById('main-header');
l.style.borderBottom= 'solid 3px yellow';
var ite=document.getElementsByClassName('list-group-item');
ite[2].style.backgroundColor= 'green';
for(let i=0;i<ite.length;i++)
{
ite[i].style.fontWeight= 'bold';
}