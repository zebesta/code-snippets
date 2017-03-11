var o = {
  abc: 123,
  bad: 456,
  cow: 789
}

var keys = Object.keys(o);
for(let k of keys){
  console.log(k);
  console.log(o[k]);
}
