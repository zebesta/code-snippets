var arr = [2,35,246,234,2354,345,2,234,6,132,34,7,5676,32,25,6,3457,1234];

function mergesort(arr){
  // console.log("sorting " + arr);
  if(arr.length <= 1){
    return arr;
  }

  var sorted = [];
  var mid = Math.floor(arr.length/2);
  var left = mergesort(arr.slice(0,mid));
  var right = mergesort(arr.slice(mid));

  var left_i = 0;
  var right_i = 0;

  for(var i = 0; i < arr.length; i++){
    if(left[left_i] && right[right_i]){
      if(left[left_i] <= right[right_i]){
        sorted[i] = (left[left_i]);
        left_i++;
      }else{
        sorted[i] = right[right_i];
        right_i++;
      }
    }else if(left[left_i]){
      sorted[i] = left[left_i];
      left_i++;
    }else{
      sorted[i] = right[right_i];
      right_i++;
    }
  }


  return sorted;
}

console.log(mergesort(arr));
