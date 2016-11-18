function largestPrimeFactor(bigNumber){
  for(var i = Math.floor(bigNumber/2); i>1; i--){
    if(isPrime(i) == true && (bigNumber%i == 0)){
      console.log(i);
      return i;
    }
  }
}

function isPrime(num){
  var bool = true;
  for(var i = 2; i<num && bool;i++){
    if(num%i == 0){
      bool = false;
    }
  }
  return bool;
}
largestPrimeFactor(13195);
largestPrimeFactor(600851475143);
