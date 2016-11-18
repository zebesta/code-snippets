// for(var number = 10; true; number +=10){
//   for(var i = number; i>1; i--){
//
//   }
//
// }

var found = false;
var number = 9699690
while(!found){
  for(number; true; number += 9699690){
    for(var i = 20; i >1; i--){
      if(number%i !== 0){
        break;
      }
    }
  }
}
console.log(number)

// for (i = 0; i < 10; i++) {
//     if (i === 3) { continue; }
//     console.log("The number is " + i + "<br>");
// }
