var eggdrop = []; // 2d Array to build up


function drop(eggs, floors){
  //build base case of 1 egg
  for(var i = 0; i <= eggs; i++){
    eggdrop[i] = [];
  }
  // 1 egg
  for(var i = 1; i <= floors; i++){
    eggdrop[1][i] = i;
  }
  //0 floors
  for(var i = 1; i <= eggs; i++){
    eggdrop[i][0] = 0;
    eggdrop[i][1] = 1;
  }
  for(var i = 2; i <= eggs; i++){
    for(var j = 1; j<= floors; j++){
      eggdrop[i][j] = Number.MAX_SAFE_INTEGER;

      // is floor we are dropping from
      for(x=1; x <= j; x++){
        eggdrop[i][j] = Math.min(
          eggdrop[i][j], // compare cuurent version
          Math.max(eggdrop[i-1][x-1] + 1, //egg breaks
                    eggdrop[i][j-x] + 1) // egg doesnt break
        )
      }

    }
  }
  console.log(eggdrop[eggs][floors]);
}

drop(2,100);
// console.log(eggdrop[2][100]);
