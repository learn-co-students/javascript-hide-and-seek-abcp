function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    var rankedList = document.querySelectorAll(".ranked-list")
    for (var i = 0; i < rankedList.length; i++) {
      rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML)+n
    }
}


function deepestChild(){
  var list = document.getElementById("grand-node").querySelectorAll("div");
  var grandNode;
  for(let i = 0; i < list.length-1; i++) {
    grandNode = list[i].querySelector("div");
  }
return grandNode;
}
