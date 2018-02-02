function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var lis =
  document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n);
  }
}

function deepestChild(){
  var helper =
  document.getElementById('app').querySelector('#grand-node');
  var grabEm = helper.getElementsByTagName('*');
  return grabEm[grabEm.length - 1];
}