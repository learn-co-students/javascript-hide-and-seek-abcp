
function getFirstSelector(selector){
  return document.querySelector(selector)
  }

// Second Function
function nestedTarget(){
  return document.querySelector('#nested .target')
}


// Third function
/*function increaseRankBy(n){
  var rank = document.querySelectorAll('.ranked-list')

  for(let i = 0; i < rank.lenght; i++){
    let children = rank[i].children

    for(let a = 0; a < children.lenght; a++){
      let children[a].innerHTML = parsInt(children[a].innerHTML) + n
    }
} */

function increaseRankBy(n) {
  var rank = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rank.length; i < l; i++) {
    let children = rank[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

// Fourth function
//function deepestChild(){
  //var id = document.getElementById('grand-node')
  //var children = id.children[3]
  //return children
//}

function deepestChild() {
  var getID = document.getElementById('grand-node')
  var children = getID.children[0]

  while (children) {
    getID = children
    children = getID.children[0]
  }
  return getID
}
