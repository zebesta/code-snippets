// Longest increasing subsequnce of an array of numbers
var max = 0;

function lis(arr, n){
  if(n < 0){
    return 0;
  }else if(n==0){
    return 1;
  }

  var current_length = 1;
  for(var i = 0; i < n; i++){
    var sublength = lis(arr, i);
    if(arr[i] < arr[n] && current_length < sublength+1){
      current_length = sublength+1;
    }
  }
  max = Math.max(max, current_length);
  return current_length;
}

var arr = [10, 22, 9, 33, 21, 50, 41, 60, 2, 90];
// var arr = [];
lis(arr, arr.length-1);
console.log(max);
