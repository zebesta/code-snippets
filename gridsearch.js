var input = [[1,2,3,4,5,6,7,8,9,0],
[0,9,8,7,6,5,4,3,2,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[2,2,2,2,2,2,2,2,2,2]]

var test = [[8,7,6,5,4,3],
[1,1,1,1,1,1],
[1,1,1,1,1,1]]


// if test is in input print yes, otherwise print NO
function findTest(input, test){
  //only test til enough space left for test array dimensions
  for(var inputRow = 0; inputRow <= input.length - test.length; inputRow++){
    for(var inputColumn = 0; inputColumn <= input[0].length - test[0].length; inputColumn++){
      var matching = true;
      var listofcoords = []
      for(var testRow = 0; testRow<test.length; testRow++){
        for(var testColumn = 0; testColumn<test[0].length; testColumn++){
          listofcoords.append((testRow, testColumn));
        }
      listofcoords = shuffle(listofcoords);
      var matching = true;
      loop1: for(let i in listofcoords){
        x = i[0]
        y = i[1]
        if(input[inputRow+x][inputColumn+y] != test[x][y]){
          matching = false
          break loop1;
      }
    }

      if(matching){
        console.log("YES");
        return null;
      }

    }
  }
  console.log("NO")


};

findTest(input, test);

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }
