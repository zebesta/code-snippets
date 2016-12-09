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

function removeInterval () {

}

var a = new Interval(15,7);
var b = new Interval(8,9);
var n = new Node();

addInterval(new Interval(5,8), treeRoot);
addInterval(new Interval(12,19), treeRoot);
addInterval(new Interval(2,4), treeRoot);
console.log(findIntersection(new Interval(14,18), treeRoot));
console.log(findIntersection(new Interval(50,70), treeRoot));
