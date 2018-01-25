function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const rankedListItems = document.querySelectorAll(".ranked-list li");
  var i;
  
  for (i = 0; i < rankedListItems.length; i++) {
    var innerNum = parseInt(rankedListItems[i].innerHTML);
    innerNum = innerNum + n;
    rankedListItems[i].innerHTML = innerNum.toString();
  }
}

function deepestChild() {
  var i;
  var current = document.querySelectorAll("#grand-node div");
  
  while (current.firstChild) {
    current = current.firstChild;
  }
  
  return current;
}