
// A function that takes in eggs and number of floors and return the max number of drops required
//recursive
function eggdrop(eggs, floors){

  if(eggs == 1 || floors <= 1){
    return floors;
  }

  var min = Number.MAX_SAFE_INTEGER
  for(var i=1; i <= floors; i++){
    var res = Math.max(
      // Egg doesnt break, keep going up
      (eggdrop(eggs, floors-i) + 1),
      //egg does break, check lower floors with 1 less eggs
      (eggdrop(eggs-1, i-1) + 1))
      min = Math.min(min, res);
  }
  return min;

}

console.log(eggdrop(2,10))
