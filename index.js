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
	var next;

	for (i = 0; i < current.length; i++) {
		console.log("Index: " + i);
		console.log("Current: " + current[i]);
		
		if (current[i].children < 1) {
			return "Returning" + current;
		} else {
			console.log(current[i].childNodes);
			current = current[i].childNodes;
			console.log("New Current: " + current);
		}
	}
}