var pixels = [[0,0,1,0,0,1], [1,1,0,0,0,0], [1,1,1,1,0,0], [1,1,0,0,0,0], [0,0,0,1,1,1],[0,0,0,1,1,1]]

var maxRegionSize = 0;
var region = 2;
var count  = 0;

for(var x =0; x<pixels.length; x++){
  for(var y=0; y<pixels[x].length; y++){
    if(pixels[x][y]==1){
      mutate(x,y)
      region++;
      count=0;
    }
  }
  // print();

}



//returns the indices of the neighbors that equal 1
function findNeighbors(x,y){
  var arrayToReturn = [];
  for(var i = Math.max(0, x-1); i<=Math.min(pixels.length-1, x+1); i++){
    for(var j = Math.max(0, y-1); j<=Math.min(pixels[0].length-1, y+1); j++){
        if(pixels[i][j] == 1){
          arrayToReturn.push([i,j]);
        }

      }
    }

  return arrayToReturn;

}

//mutates the currently viewed index and increments the count, then finds neighbors and recurses
function mutate(x, y){
  count++;
  pixels[x][y] = region;
  var neighbors = findNeighbors(x,y)
  for(var i = 0; i<neighbors.length; i++){
    if(pixels[neighbors[i][0]][neighbors[i][1]]==1){
      mutate(neighbors[i][0],neighbors[i][1]);
    }
  }

  if(count > maxRegionSize){
    maxRegionSize = count;
  }
}

// function print(){
//   for(var i = 0; i < pixels.length; i++){
//     console.log(pixels[i]);
//   }
//   console.log('\n')
//
// }
console.log(maxRegionSize);
