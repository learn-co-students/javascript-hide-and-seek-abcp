function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
var lis = document.getElementById("grand-node").querySelectorAll("div");
var test;
for(let i = 0; i < lis.length-1; i++) {
    test = lis[i].querySelector("div");
  }
  return test;
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children

    for (let j =0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
