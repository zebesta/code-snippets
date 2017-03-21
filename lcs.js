// Finding the longest common subsequence of a string of characters

function lcs(str1, str2, l1, l2){
  if(l1 <= 0 || l2 <= 0){
    return 0;
  }
  if(str1[l1-1] == str2[l2-1]){
    return 1 + lcs(str1, str2, l1-1, l2-1);
  }
  return Math.max(lcs(str1, str2, l1, l2-1), lcs(str1, str2, l1-1, l2));
}


var X = "AGGTAB"
var Y = "GXTXAYB"
console.log(lcs(X , Y, X.length, Y.length));
