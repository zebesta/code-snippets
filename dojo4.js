//Codo dojo with me and @vaibhavsagar
//https://www.hackerrank.com/challenges/sherlock-and-array

function processData(input) {
    var lines = input.split('\n');
    //pull only the lines of text that are arrays of numbers
    for(var i = 2; i < lines[0]*2+1; i+=2){
        var parsedintArray = lines[i].split(' ').map(Number);
        if(sherlock(parsedintArray)){
            console.log("YES");
        }else{
            console.log("NO");
        }
    }
    //Enter your code here
    function sherlock(intArray){
      var left = 0;
      var current = 0;
      var right = intArray.reduce((a,b)=>{return a+b;},0);
      for(var i = 0; i<intArray.length; i++){
        current = intArray[i];
        right -= intArray[i];
        if(left == right){
          return true;
        }else if(left > right){
          return false;
        }
        left += current;
      }

    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
