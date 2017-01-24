seatingString = 'OOEEEO'
var seated = false;

function seat(input){
  testEnds(input);
  if(!seated){
    leftmost(input);
  }
  if(!seated){
    rightmost(input);
  }

}

function testEnds(input){
  if(input[input.length-1] == 'E'){
    console.log(input.length-1);
    seated = true;
  }else if(input[0] == 'E'){
    console.log(0);
    seated = true;
  }else {
    return true;
  }
}

function leftmost(input){
  for(var i = 2; i < input.length-2; i++){
    if(input[i] == 'E' && input[i-1] == 'E' && input[i+1] == 'E'){
      console.log(i);
      seated = true;
      break;
    }
  }
  return;
}

function rightmost(input){
  for(var i = input.length-1; 0<i; i--){
    if(input[i] == 'E' && (input[i-1] == 'E' || input[i+1]=='E')){
      console.log(i);
      seated = true;
      break;
    }
  }
  return;
}

seat(seatingString);
