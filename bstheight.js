function isBalanced(node){
  if (node == null){
    return true;
  }

  if(isBalanced(node.left) && isBalanced(node.right && Math.abs(findHeight(node.left) - findHeight(node.right) <=1){
    return true;
  }else(return false)


}

findHeight(node){
  if(node == null){
    return -1
  }else(
    var height = Math.max(findHeight(node.left), findHeight(node.right)) + 1;
    return height;
  )
}
