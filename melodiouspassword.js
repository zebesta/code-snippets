function main(n) {
    // var n = parseInt(readLine());
    var all = [];
    var v_even = [];
    var c_even = [];
    while(n>0){
        if(n%2 == 0){
            v_even = add_vowel(v_even);
            c_even = add_con(c_even);
        }else{
            v_even = add_con(v_even);
            c_even = add_vowel(c_even);
        }
        n--;
    }
    all = v_even.concat(c_even);
    for(let a of all){
        console.log(a);
    }
}
function add_con(answers){
  var cons = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
    if(answers.length == 0){
        return cons;
    }
    var newanswer = [];
    for(let c of cons){
        newanswer = newanswer.concat(...answers.map((a)=>{return a+c}));
    }
    return newanswer
}
function add_vowel(answers){
  var vowels = ['a','e','i','o','u'];
    if(answers.length == 0){
        return vowels;
    }
    var newanswer = [];
    for(let v of vowels){
        newanswer = newanswer.concat(...answers.map((a)=>{return a+v}));
    }
    return newanswer;
}

main(6);
