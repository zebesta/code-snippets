const assert = require('assert');

function convert(str) {
  console.log((str));
  var answer = 0;
  var negative = false;
  if(str[0] == '-'){
    negative = true;
    str = str.slice(1)
  }

  var decIndex = str.indexOf('.');
  if(decIndex == -1){
    answer += whole(str)
  }else{
    answer += whole(str.slice(0, decIndex))
    answer += fractional(str.slice(decIndex+1))
  }
  if(negative){
    answer = -answer;
  }
  console.log(answer);
  return answer;
}

// parse the whole part of the number
function whole(str) {
  var number = 0;

  for(var i = 0; i < str.length; i++){
    let char = str[str.length-1-i]
    if(char != '-'){
        number += (str[str.length-1-i] * (Math.pow(10,i)))
    }
  }
  return number;
}

// parse the fractional part of the number
function fractional(str) {
  var number = 0;

  for(var i = 0; i < str.length; i++){
    let char = str[i]
    number += (str[i] / (Math.pow(10,i+1)));
    // console.log(number);
  }
  return number;
}

// convert("12125325");
assert.equal(1234, convert("1234"));
// convert("-123");
// convert("12.455");
// convert("-7.43415");
