// Finding the longest common subsequence of a string of characters

function lcs(str1, str2, l1, l2){
  var memoizer = [[]];
  //build initial array with base case
  for(var i = 0; i <= l1; i++){
    memoizer[i] = [0];
  }
  for(var j = 0; j <= l2; j++){
    memoizer[0][j] = 0;
  }

  for(var i = 1; i <=l1; i++){
    for(var j = 1; j<= l2; j++){
      if(str1[i-1] == str2[j-1]){
        memoizer[i][j] = memoizer[i-1][j-1] + 1;
      }else{
        memoizer[i][j] = Math.max(memoizer[i-1][j], memoizer[i][j-1]);
      }
    }
  }
  console.log(memoizer[l1][l2]);
}


var X = "AGGTAB"
var Y = "GXTXAYB"
lcs(X , Y, X.length, Y.length);
