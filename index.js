function getFirstSelector(selector){
  // accpets a selector and returns the first element that matches
  return document.querySelector(selector);
}

function nestedTarget(){
  //pulls a .target out of #nested and .target
  //# is used for ID Selectors
  return document.querySelector('#nested .target');

}


function deepestChild(){
  //pulls out the most deeply nested children
  //from div#grand-node
  let node = document.getElementById('grand-node');
  let next = node.children[0];

  while (next) {
    node = next;
    next = node.children[0];
  }

  return node;

}


function increaseRankBy(n){
  //increases the ranks in all of the .ranked-list by n
let l = document.querySelectorAll("ul.ranked-list li");
for (var i = 0; i < l.length; i++) {
  l[i].innerHTML = parseInt(l[i].innerHTML) + n;
}
return;
}
