var pairs = (numberOfNumbers, difference, numbers)=>{
  var count = 0;
  // var set = {}
  //
  // for (var i = 0; i < numberOfNumbers; i++) {
  //   set[numbers[i]] = true;
  // }
  var set = numbers.reduce((obj, val) => { obj[val] = true; return obj; }, {});


  for (var i = 0; i < numberOfNumbers; i++) {
    if(numbers[i] > difference &&  set[numbers[i] - difference])
      count++;
  }
  return count;
}

function processData(input) {
  var lines = input.split('\n');
  var line0 = lines[0].split(' ');
  var line1 = lines[1].split(' ');
  var numberOfNumbers = parseInt(line0[0]);
  var difference = parseInt(line0[1]);
  var numbers = [];
  for(var i = 0; i<line1.length; i++){
    // console.log(line1[i]);
    numbers.push(parseInt(line1[i], 10));
  }
  // var numbers = lines[1].map(parseInt);
  console.log(pairs(numberOfNumbers, difference, numbers));

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
