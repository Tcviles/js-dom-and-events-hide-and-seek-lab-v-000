function getFirstSelector(selector){
  return document.querySelector(selector);
};

function nestedTarget(){
  return document.querySelector('#nested .target');
};

function deepestChild(){
  let parent = document.getElementById('grand-node');
  let child = parent.children[0];
  let nextChild= child.children[0];

  while(nextChild){
    child = nextChild;
    nextChild = child.children[0];
  }

  return child;
}

function increaseRankBy(n){
  let list = document.querySelectorAll('.ranked-list');

  for(const item of list){
    let children = item.children;

    for(const child of children){
      child.innerHTML = parseInt(child.innerHTML) + n;
    };
  };
};
