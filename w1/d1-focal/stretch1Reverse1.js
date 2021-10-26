const args = process.argv;
args.splice(0,2);

let newArr = args.map (function(item) {
    let split = item.split("");
    let res =  " ";
    for(let i = split.length-1; i >=0; i--){
     res+=split[i];
    }
    return res;
});

console.log(newArr);