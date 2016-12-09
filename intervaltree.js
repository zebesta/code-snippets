var treeRoot = null;

function Interval(min, max) {
  this.min = min;
  this.max = max;
}

function Node() {
  // this.left;
  // this.right;
  // this.parent;
  // this.maxData;
  // this.interval;
}

function addInterval(interval, root) {
  //empty tree, build it
  if(root == null){
    // console.log("creating root");
    treeRoot = new Node();
    // treeRoot.parent = null;
    treeRoot.maxData = interval.max;
    treeRoot.interval = interval;
  }else{
    // find place based on min and add it
    if(interval.min < root.interval.min){
      if(root.left == null){
        var child = new Node();
        child.parent = root;
        child.interval = interval;
        child.maxData = interval.max;
        root.left = child;
        // console.log("adding a left child");
        updateMax(child)
      }else {
        addInterval(interval, root.left)
      }
    }else if(interval.min > root.interval.min){
      if(root.right == null){
        var child = new Node();
        child.parent = root;
        child.interval = interval;
        child.maxData = interval.max;
        root.right = child;
        // console.log("adding a right child");
        updateMax(child)
      }else {
        addInterval(interval, root.right)
      }
    }
  }
}

function updateMax(node) {
  if(node.parent == null){
    return
  }else{
    if(node.parent.maxData < node.maxData){
      console.log("updating parent data");
      node.parent.maxData = node.maxData;
      updateMax(node.parent);
    }
  }
}

function findIntersection(interval, root) {
  if(root == null){
    return null;
  }
  // if overlap, return root
  if((interval.min > root.interval.min && interval.min < root.interval.max) || (interval.max < root.interval.max && interval.max > root.interval.min)){
    return root;
  }else if (root.left != null && root.left.maxData > interval.min){
    return findIntersection(interval, root.left);
  }else{
    console.log("right");
    return findIntersection(interval, root.right);
  }

}

function removeInterval (node) {
  var left = false;
  //right now deleting whole tree, need to actually return a valid tree with root removed
  if(node.parent == null){
    treeRoot = null;
    return;
  }else{
    var parent = node.parent;
    // console.log(parent);
    left = (parent.left == node);
  }

  //case no childresn
  if(node.right == null && node.left ==null){
    console.log("Only child");
    if(left){
      console.log("removing left");
      node.parent.left = null;
    }else {
      console.log("removing right");
      node.parent.right = null;
    }
    return;
  }
  // find min of right sub tree and replace this node with it, then delete its place
  if(node.right != null){
    console.log("finding min of right sub");
    var replacer = node.right;
    while(replacer.left){
      replacer = replacer.left;
    }
    if(left){
      node.parent.left = replacer;
    }else {
      node.parent.right = replacer;
    }
    //remove replacer from its current place in tree
    removeInterval(replacer);
    //update this node parent
    replacer.parent = node.parent;
  }else if(node.left != null){
    console.log("replacing with left")
    if(left){
      node.parent.left = node.left;
    }else {
      node.parent.right = node.left;
    }
  }else{
    //Only child, replace with left node
    if(left){
      node.parent.left = node.left;
      node.left.parent = node.parent;
    }else {
      node.parent.right = node.left;
      node.left.parent = node.parent;
    }
  }
}

var a = new Interval(15,7);
var b = new Interval(8,9);
var n = new Node();

addInterval(new Interval(5,8), treeRoot);
addInterval(new Interval(12,19), treeRoot);
addInterval(new Interval(14,19), treeRoot);
addInterval(new Interval(7,13), treeRoot);
addInterval(new Interval(2,4), treeRoot);
addInterval(new Interval(1,4), treeRoot);

// console.log(findIntersection(new Interval(14,18), treeRoot));
// console.log(findIntersection(new Interval(50,70), treeRoot));
console.log(treeRoot)
removeInterval(treeRoot.right);
console.log(treeRoot)
