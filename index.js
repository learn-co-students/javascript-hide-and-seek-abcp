function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  let node = document.getElementById('grand-node');
  let next = node.children[0];

  while(next){
    node = next;
    next = node.children[0];
  }

  return node;
}

function increaseRankBy(n){
  const l = document.querySelectorAll('ul.ranked-list');

  for (var i = 0; i < l.length; i++) {
    l[i].innerHTML = parseInt(l[i].innerHTML) + n;
  }
}
