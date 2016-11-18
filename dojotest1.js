//find primes up to 100, store in list
var primes = [2]
for (var a = 2; a < 100; a++) {
    var divisible = false;
    for (var b = 2; b < Math.sqrt(a) + 1; b ++) {
        if (a % b === 0) {
            divisible = true;
            break
        }
    }
    if (!divisible) {
        primes.push(a);
    }
}

//find the 4 digit perms
var fourDigitPrimes = []
for (var a = 1000; a < 10000; a++) {
    var divisible = false;
    for (var b = 0; b < primes.length; b++) {
        if (a % primes[b] === 0) {
            divisible = true;
            break
        }
    }
    if (!divisible) {
        fourDigitPrimes.push(a);
    }
}

// build a list of the unique permutation prime numbers
uniquePerms = {};
for(var i = 0; i< fourDigitPrimes.length; i++){
  var str = fourDigitPrimes[i].toString();
  strArray = str.split('');
  strArray.sort()
  if(!uniquePerms[strArray]){
    uniquePerms[strArray]= [fourDigitPrimes[i]]
  }else{
    uniquePerms[strArray].push(fourDigitPrimes[i])
  }
}
console.log(uniquePerms)

// find the matching differences
for(let key of Object.keys(uniquePerms)){
  if(uniquePerms[key].length >= 3){
    differences = {};
    for(var i = 0; i<uniquePerms[key].length-2; i++){
      for(var j = i+1; j<uniquePerms[key].length-1; j++){
        for(var k = j+1; k<uniquePerms[key].length;k++){
          if(uniquePerms[key][k] - uniquePerms[key][j] == uniquePerms[key][j] - uniquePerms[key][i]){
            console.log("Boom!");
            console.log('' + uniquePerms[key][i] + uniquePerms[key][j] + uniquePerms[key][k])
          }
        }
      }
    }
  }
}
