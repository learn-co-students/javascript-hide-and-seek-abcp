function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target' );
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i< ranks.length; i++) {
    ranks[i].innerHTML = (i + n).toString();
  }
}

function deepestChild() {
  const deepNode = document.querySelector('div#grand-node div div div div');
  return deepNode;
}