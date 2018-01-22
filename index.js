function getFirstSelector (selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  // return document.querySelector('nested.target').querySelector();
  // return document.getElementById('nested').querySelector('target');
  //return document.getElementById('nested').querySelectorAll('target');
  return document.querySelector('div.target');
}

function increaseRankBy(n){
  const rankUp = document.querySelector('ul.ranked-list')
  for (let i = 0; i < rankUp.length; i++){
    rankUp[i].innerHTML = (parseInt(rankUp[i]) + n);
  }
  return rankUp;
}


function deepestChild(){
  var child = document.querySelector('div.grand-node').;
  return child;
  // if(child.querySelectorAll()){
  //   child = child.querySelectorAll()
  // } else return child

}
