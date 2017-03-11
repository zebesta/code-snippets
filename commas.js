function commas(num) {
  console.log(num);
  var numstr = "" + num;
  // var answer = [];
  var position = 3;
  for(var i = 0; i < numstr.length; i++){
    var index = numstr.length - 1 - i
    if(i%position == 0 && i != 0){
      // answer = numstr[index] + ',' + answer;
      // answer.unshift(',');
      // answer.unshift(numstr[index]);
      numstr = numstr.slice(0,index+1) + ',' + numstr.slice(index+1)
      position = position + 3 + 1;
    }else{
      // answer = numstr[index] + answer;
      // answer.unshift(numstr[index]);
    }
  }
  // console.log(answer.join(''));
  console.log(numstr)
}

commas(123453123072);
