function getFirstSelector(selector) {
  return document.querySelector(selector);
 }

 function nestedTarget() {
   return document.querySelector('#nested .target');
 }

 function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
   for (var i = 0; i < ranks.length; i++) {
     ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n  }
 }

 function deepestChild() {
   var grandNode = document.querySelector('#grand-node');
   var deepestNode = grandNode.children[0];
   for (var i = 0; !deepestNode.children[i]; i) {
     deepestNode = deepestNode.children[0]
   }
   return deepestNode;
 }
