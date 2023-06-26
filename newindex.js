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