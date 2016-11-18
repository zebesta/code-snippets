var inputString = "racecarz";

var isLength = inputString.length;
var inputStringArray = inputString.split("");
var inputStringArrayReversed = inputString.split("").reverse();


// console.log(inputStringArray.reverse());

console.log(inputStringArray);
console.log(inputStringArrayReversed);
var index = -1;

for(var i = 0; i < isLength; i++){
  // console.log('i1', i);
  if (inputStringArray[i] != inputStringArrayReversed[i]) {
    // console.log('i2', i);
    if (inputStringArray[i+1] == inputStringArrayReversed[i]) {
      console.log('i3', i);
      index = i;
      i=isLength;

    }else if(inputStringArray[i] == inputStringArrayReversed[i+1]){
      console.log('i4', (isLength-(i+1)));
      index = (isLength-(i+1));
      i=isLength;
    }
  }
}
if(index == -1){
  console.log("no problematic letter was found, the string is already a palindrome!")
}else{
  console.log("The index of the problematic letter is: " + index);
}
