function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return getElementById(nested).getElementsByClassName(target);
}