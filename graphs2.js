var x = 2;
var y = 2;
var pixels = [[1,2,1,0], [0,2,1,1], [1,1,1,0], [0,0,1,1], [3,1,1,3]];

for(var i = Math.max(0, x-1); i<=Math.min(pixels.length-1, x+1); i++){
  for(var j = Math.max(0, y-1); j<=Math.min(pixels[0].length-1, y+1); j++){
    // console.log(i + " " + j);
    // if((Math.abs(i-x) + Math.abs(j-y)) == 1){
    if(!(i==x && j==y))
      console.log(i + "  " + j);
    // }
  }
}
