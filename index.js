function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const rankedListItems = document.querySelectorAll(".ranked-list li");
  var i;
  console.log(rankedListItems);
  console.log(n);
  
  for (i = 0; i < rankedListItems.length; i++) {
    console.log(i);
    var innerNum = parseInt(rankedListItems[i].innerHTML);
    console.log(innerNum);
    innerNum = innerNum + n;
    console.log(innerNum);
    rankedListItems[i].innerHTML = innerNum.toString();
  }
}