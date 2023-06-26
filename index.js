var l=document.getElementById('main-header');
l.style.borderBottom= 'solid 3px yellow';
var ite=document.getElementsByTagName('li');
ite[2].style.backgroundColor= 'green';
ite[4].style.color= 'red';
for(let i=0;i<ite.length;i++)
{
ite[i].style.fontWeight= 'bold';
}
