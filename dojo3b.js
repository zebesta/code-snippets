

function addition(a,b){
  var c = a+b;

  return c;
}


var count = 2;
var x = 1;
var y = 1;
var z = 0;
var targetLength = 1000;
while (Math.log10(z) < targetLength) {
    z = addition(x, y);
    x = y;
    y = z;
    count++;
}
// console.log(z);
console.log(count);


// z.reverse();
// console.log(z);
//addition([1,9,9],[7,1,1]);
