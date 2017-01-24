var found = false;

var max = 0;

for(var i = 999; i >=100 && !found; i--){
  for(var j = 999; j >= i && !found; j--){
    var product = i * j;
    var reversed = Number(product.toString().split('').reverse().join(''));

    if(product == reversed){
      if(product > max){
        max = product;
        console.log(max);
      }
    }
  }
}
