var l = document.getElementById('main-header');
l.style.borderBottom = 'solid 3px blue';

var ite = document.getElementsByClassName('list-group-item');

for (let i = 0; i < ite.length; i++) {
  ite[i].style.fontWeight = 'bold';
}


var head = document.querySelector('.list-group-item:nth-child(2)');
  head.style.color = 'green';

  var th = document.querySelector('.list-group-item:nth-child(3)');
  th.style.color = 'transparent';

  var div=document.createElement('div');
  var txt=document.createTextNode('HEllo');
  div.appendChild(txt);
  var bef=document.querySelector('header .container');
  var h=document.querySelector('header h1');
  bef.before(div,h);

  var loc=document.querySelector('#items li:first-child');
  loc.before(txt,loc);