var fetch = require('node-fetch');
// function reqListener () {
//   console.log(this.responseText);
// }
//
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// console.log("TRYING!");
// oReq.open("GET", "https://feeds.citibikenyc.com/stations/stations.json");
// oReq.send();
function callme(){
  fetch("https://feeds.citibikenyc.com/stations/stations.json")
    .then(res=>{
      return res.json();
    })
    .then(json => {
      console.log(json);
    })
    .catch(err=>{
      console.log("error!");
      // console.log(err);
    });
}

console.log(callme());
