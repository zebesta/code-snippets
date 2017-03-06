function main(n, number) {
    // var n = parseInt(readLine());
    // var number = readLine();
    // your code goes here
    var numbers = [];
    var count = 0;
    for(var i = 0; i<number.length; i++){
        for(var j = i+1; j<=number.length; j++){
            numbers.push(number.slice(i,j))

        }
    }
    var filtered = numbers.filter(filter_mod)
    console.log(filtered)
    console.log(filtered.length % (10^9+7))

}
function filter_mod(n){
  if(n%8 == 0){
    return true;
  }else{
    return false;
  }
}

main(3, '88888');
