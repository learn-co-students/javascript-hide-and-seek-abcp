function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children

    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let anotherNode = node.children[0]

  while (anotherNode) {
    node = anotherNode
    anotherNode = node.children[0]
  }

  return node
}
