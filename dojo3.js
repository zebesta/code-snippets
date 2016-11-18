

function addition(a,b){
  var c = [];
  var carry = 0;
  for(var i =0; i < b.length; i++){
    if(i>=a.length){
      c[i] = b[i] + carry;
      carry = 0;
    }else{
      c[i] = a[i] + b[i] + carry;
      carry = 0;
    }
    if(c[i] >=10){
      carry = 1;
      c[i] = c[i] - 10;
    }
  }
  if(carry == 1){
    c.push(1);
  }

  return c;
}


var count = 2;
var x = [1];
var y = [1];
var z = [];
var targetLength = 1000;
while (z.length < targetLength) {
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
