function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").querySelector('.target');
}

function deepestChild(){
  let divs = document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for (var i=0; i<divs.length-1; i++){
  test=divs[i].querySelector("div");
  }
  return test;
}

function increaseRankBy(n) {
  var lis=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0;i<lis.length;i++) {
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}
