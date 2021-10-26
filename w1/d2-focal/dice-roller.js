
const args = process.argv;
let roll = args.pop();
let num =[];
for (let i =1; i <= roll; i++){
    num.push(Math.floor (Math.random()*6));
}
num.join();


console.log(`Rolled ${roll} dice: ${num}`);
//console.log(str);


// > node dice-roller.js 3
// Rolled 3 dice: 2, 6, 5