function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const items = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = (parseInt(items[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  const grand = document.querySelector('div#grand-node')

  var deepest = grand
  var deepestLevel = 0
  var levels = [0]
  var lst = [grand]
  var current, currentLevel, child_list

  while (lst.length > 0) {
    current = lst.shift()
    currentLevel = levels.shift()

    child_list = current.children
    if (child_list.length == 0) {
      if (currentLevel > deepestLevel) {
        deepest = current
        deepestLevel = currentLevel
      }
    } else {
      for (let i = 0; i < child_list.length; i++) {
        lst.push(child_list[i])
        levels.push(currentLevel + 1)
      }
    }
  }

  return deepest
}