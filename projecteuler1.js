var multiples = [];

for(var i = 1; i<1000; i++){
  if(i%3 == 0){
    multiples.push(i);
  }else if(i%5 == 0){
    multiples.push(i)
  }
}
console.log(multiples);
var sum = multiples.reduce((total, a)=>{return(total+a);}, 0);
console.log(sum);
