var visited = new Set();
function paint_splash (pixels, clickPoint, target_color){
  console.log(pixels);
  var queue = [];
  var x = clickPoint[0];
  var y = clickPoint[1];
  queue.push(clickPoint);
  console.log(queue);

  while(queue.length>0){
    var neighbors = getNeighbors(pixels, queue[0]);
    console.log("NEIGHBORS!" + neighbors)

    pixels[queue[0][0]][queue[0][1]] = parseInt(target_color);
    for(var i = 0; i<neighbors.length; i++){
      console.log("adding n to queue");
      console.log(neighbors[i]);
      queue.push(neighbors[i]);
    }
    queue.splice(0,1);
    console.log("QUEUE" + queue);
  }



  // # Inputs:
  //    # pixels: [ [ int ] ]
  //    # click_point: ( int, int )
  //    # target_color: int
  //
  //    # YOUR CODE HERE. Modify pixels in place. Or create a new array, I don't care.
  //    # In place is better practice though.


  console.log(pixels);
  return pixels;
}

function getNeighbors(pixels, point){
  console.log("Get neighbors!" + pixels[0]);
  var neighbors = [];
  var x = parseInt(point[0]);
  var y = parseInt(point[1]);

  for(var i = Math.max(0, x-1); i<Math.min(pixels.length-1, x+1); i++){
    for(var j = Math.max(0, y-1); j<Math.min(pixels[0].length-1, y+1); j++){
      if((Math.abs(i-x) + Math.abs(j-y)) == 1)
      console.log(i +"  "+ j);
    }
  }
  if(x>0 && pixels[x][y] == pixels[x-1][y] && !visited.has([x-1,y])){
    neighbors.push([parseInt(x-1),parseInt(y)]);
    visited.add([x-1,y]);
  }
  if(y>0 && pixels[x][y] == pixels[x][y-1] && !visited.has([x,y-1])){
    neighbors.push([parseInt(x),parseInt(y-1)]);
    visited.add([parseInt(x),parseInt(y-1)]);
  }
  console.log(pixels);
  console.log(pixels[1]);
  if(x+1 < pixels.length && pixels[x][y] == pixels[x+1][y] && !visited.has([x+1,y])){
    neighbors.push([parseInt(x+1), parseInt(y)]);
    visited.add([parseInt(x+1),parseInt(y)]);
  }
  if(y+1 < pixels[0].length && pixels[x][y] == pixels[x][y+1] && !visited.has([x,y+1])){
    neighbors.push([parseInt(x),parseInt(y+1)]);
    visited.add([parseInt(x),parseInt(y+1)]);
  }
  console.log("Retuning neighbors!");
  console.log(neighbors);
  return neighbors;
}

paint_splash([[1,2,1,0], [0,2,1,1], [1,1,1,0], [0,0,1,1], [3,1,1,3]], [2,2], 4);
