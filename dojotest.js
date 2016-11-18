var s = "chillout";
var array  = [];
var size = s.length;
var rows = Math.floor(Math.sqrt(s.length));
var columns = Math.ceil(Math.sqrt(s.length));
var count = 0
for(var i = 0; i < rows+1; i++){
  array[i] = "";
}

for(var i = 0; i < s.length; i ++){
  for(var j = 0; j < rows+1 && i<s.length; j++){
    array[j] += s[i];
    i++;
    console.log(array[j]);
  }
}

var output = "";
for(var i = 0; i < rows+1; i ++){
    output = output + array[i] + ' ';
}
console.log(output);
