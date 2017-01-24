function largestPrimeFactor(bigNumber){
  for(var i = Math.floor(bigNumber/2); i>1; i--){
    if(bigNumber % i ==0){
      console.log(i);
      if(isPrime(i)){
        console.log("The solution is: ");
        console.log(i);
        break;
      }
    }
  }
}

function isPrime(num){
  var bool = true;
  for(var i = 2; i<num && bool;i++){
    if(num%i == 0){
      bool = false;
      break;
    }
  }
  return bool;
}
//largestPrimeFactor(13195);
largestPrimeFactor(600851475143);
