function primeFactors(range){
  var factors = [];
  for(var i = 2; i<=range; i++){
    if(isPrime(i)){
      factors.push(i);
    }
  }
  console.log(factors);
  var product = factors.reduce((a,b)=>{return a*b;}, 1);
  console.log(product);
  return product;
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

function isFactorizable(num, range){
  var bool = true;
  for(var i = 2; i<=range; i++){
    if(num % i !== 0){
      bool = false;
      break;
    }
  }
  return bool;
}

function eulerFive(range){
  var pFact = primeFactors(range);
  var number = pFact;
  var found = false;
  while(!found){
    if(isFactorizable(number, range)){
      found = true;
      console.log(number);
    }else{
      number += pFact;
    }
  }
}
eulerFive(20);
