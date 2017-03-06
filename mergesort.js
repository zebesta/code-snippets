var arr = [21343425,2345,4532,5423,4512,5231,64,6365,5,3425,423,5423,64,2314];

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

  // Can optimize if the left and right are already in order
  if(left[left.length - 1] < right[0]){
    console.log("OPTIMIZING!");
    sorted = left.concat(right);
    return sorted
  }

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
