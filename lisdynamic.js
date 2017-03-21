// Longest increasing subsequnce of an array of numbers
var max = 0;
var longest = [];

function lis(arr){
  // initialize
  for(var i = 0; i < arr.length; i++){
    longest[i] = 1;
  }
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
      if(arr[j] > arr[i]){
        longest[j] = Math.max(longest[j], longest[i] + 1);
      }
      max = Math.max(max, longest[j]);
    }
  }
}

var arr = [10, 22, 9, 33, 21, 50, 41, 60, 2, 3];
// var arr = [];
lis(arr);
console.log(max);
console.log(longest);
