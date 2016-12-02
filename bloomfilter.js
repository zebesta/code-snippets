// Load fs module for node.
var fs = require('fs');
// Read the file path with a specific encoding, then do callback.
fs.readFile('./words.txt', "utf8", function read(err, data) {
  if (err) { throw err; }
  // Split the input by line break into an array of words.
  array = data.split('\n');
  // Add the words to an object to allow easy dictionary lookup.
  for (var i = 0; i < array.length; i++) {
    // console.log(array[i]);
    addToBloom(array[i]);
  }
  console.log("Finished adding words");
  checkSomeWords();
  // console.log(bloom);

});

var bloom = [];
const NUM_HASHES = 5;
const BLOOM_ARRAY_LENGTH = 2147483648;

function addToBloom(str) {
  // Set bloom indexs to a truthy value
  for(var i = 0; i<NUM_HASHES; i++){
    bloom[murmurhash2_32_gc(str, i+3) % BLOOM_ARRAY_LENGTH] = true;
  }
};

function checkInBloom(str) {
  //if all values for str are true, return true
  for(var i = 0; i<NUM_HASHES; i++){
    if(!bloom[murmurhash2_32_gc(str, i+3) % BLOOM_ARRAY_LENGTH]){
      return false;
    }
  }
  return true;
};

function checkSomeWords(){
  console.log(checkInBloom("zymotize"));
  console.log(checkInBloom("sadfjhoisuduadsyfas"));
};


/**
 * JS Implementation of MurmurHash2
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} str ASCII only
 * @param {number} seed Positive integer only
 * @return {number} 32-bit positive integer hash
 */
function murmurhash2_32_gc(str, seed) {
  var
    l = str.length,
    h = seed ^ l,
    i = 0,
    k;

  while (l >= 4) {
  	k =
  	  ((str.charCodeAt(i) & 0xff)) |
  	  ((str.charCodeAt(++i) & 0xff) << 8) |
  	  ((str.charCodeAt(++i) & 0xff) << 16) |
  	  ((str.charCodeAt(++i) & 0xff) << 24);

    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));
    k ^= k >>> 24;
    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));

	h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;

    l -= 4;
    ++i;
  }

  switch (l) {
  case 3: h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
  case 2: h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
  case 1: h ^= (str.charCodeAt(i) & 0xff);
          h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  }

  h ^= h >>> 13;
  h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  h ^= h >>> 15;

  return h >>> 0;
};
