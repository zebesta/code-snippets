process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    var inp = JSON.parse(input);
    var page = inp.hierarchy;
    var tests = inp.tests;
    for(let t of tests){
        parse(page, t);
    }
    output = output.map(Number);
    console.log(output);
});

var output = []; // output list of counts
var results= []; // results from recent query as list of nodes

// A function to parse the test into the proper order of operations
function parse(page, test){
    //split tests for descendants;
    var test = test.split(' ');
    var nodes = [page];
    //flag for a direct descendant search
    var direct = false;
    for(let t of test){
        // if its a direct descendant operation, set direct flag and continue on
        if(t == '>'){
            direct = true;
            continue;
        }

        //run correct test on nodes
        for(let n of nodes){
            if(direct){
                directChildContains(n, t);
                direct = false;
            }else{
                descendantContains(n, t);
            }

        }
        //set nodes for next search and reset query results
        nodes = results;
        results = [];
    }
    //console.log(nodes);
    //store output, reset results
    output.push(nodes.length);
}

//A function to find direct children
function directChildContains(node, selector){
    //check the various selector types
    if(selector == node.tag){
        results.push(node);
    }else if(node.id){
        if(selector == '#'+node.id){
            results.push(node);
        }
    }else if(node.classes){
        for(let c of node.classes){
            if(selector == "." + c){
                results.push(node);
                break;
            }
        }
    }
}

//A function to find descendants
function descendantContains(node, selector){
    //check the various selector types
    if(selector == node.tag){
        results.push(node);
    }else if(node.id){
        if(selector == '#'+node.id){
            results.push(node);
        }
    }else if(node.classes){
        for(let c of node.classes){
            if(selector == "." + c){
                results.push(node);
                break;
            }
        }
    }
    //recurse if the node has children
    if(node.children){
        for(let c of node.children){
            descendantContains(c, selector);
        }
    }
}
