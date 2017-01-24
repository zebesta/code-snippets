//             1
//         2        20
//       4   3    6   7
//     8  9

var root = {
  data: 1,
  left: {
    data: 2,
    left: {
      data: 4,
      left: {
        data: 8,
        left: null,
        right: null
      },
      right: {
        data: 9,
        left: null,
        right: null
      }

    },
    right: {
      data: 3,
      left: null,
      right: null
    }
  },
  right: {
    data: 20,
    left: {
      data: 6,
      left: null,
      right: null
    },
    right: {
      data: 7,
      left: null,
      right: null
    }
  }
};
var last = null;

function commonParent(root, a, b) {
  if(root == null){
    return;
  }
  if(hasChild(root, a) && hasChild(root, b)){
    console.log("setting last with " + root.data);
    last = root;
  }
  commonParent(root.left, a, b);
  commonParent(root.right, a, b);
}

function hasChild (node, data) {
  if(node == null){
    return false;
  }
  if(node.data == data){
    return true;
  }else{
    return (hasChild(node.left, data) || hasChild(node.right, data));
  }
}

commonParent(root, 8, 9);
console.log(last);
