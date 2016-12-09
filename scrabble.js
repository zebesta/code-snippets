var scoreDict = {
  'A': 1,
  'E': 1,
  'I': 1,
  'L': 1,
  'N': 1,
  'O': 1,
  'R': 1,
  'S': 1,
  'T': 1,
  'U': 1,
  'D': 2,
  'G': 2,
  'B': 3,
  'C': 3,
  'M': 3,
  'P': 3,
  'F': 4,
  'H': 4,
  'V': 4,
  'W': 4,
  'Y': 4,
  'K': 5,
  'J': 8,
  'X': 8,
  'Q': 10,
  'Z': 10
}

var fs = require('fs');
var contents = fs.readFileSync('swords.txt', 'utf8');
var words = contents.split('\n');
console.log(words);
var filtered = filterDictionaryByWordSize(words, 2);

build(filtered);

function build(stuff){
  var scored = Object();
  for(var i = 0; i < words.length; i++){
    console.log(wordScore(stuff[i]));
    var wordName = stuff[i];
    scored[wordName] = wordScore(stuff[i]);
  }
  console.log(scored);
  return scored;
}

// Returns true if words are only 1 character apart
function isPermutation(string1, string2){
  var letterDiff = 0;
  for(var i = 0; i<string1.length; i++){
    if(string1[i] != string2[i]){
      letterDiff++;
    }
  }
  if (letterDiff == 1){
    return true;
  }else{
    return false;
  }
}

//returns a subset of the words passed to it with the length specified
function filterDictionaryByWordSize(words, length){
  var returnedWords = [];
  for(var i = 0; i<words.length; i++){
    if(words[i].length == length){
      returnedWords.push(words[i]);
    }
  }
  return returnedWords;
}



function wordScore(string){
  var score = 0;
  for (let s in string){
    score += scoreDict[string[s]];
  }
  return score;
}

function splitByWordLength(string){

  return string;
}
