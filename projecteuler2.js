var sum = 0;

var a = 1;
var b = 2;
var c=3;
sum+=2;
while(c<4000000){
  if(c%2 == 0){
    console.log('Adding '+ c);
    sum+=c;
  }
  c=(a+b);
  a = b;
  b = c;
}
console.log(sum);
