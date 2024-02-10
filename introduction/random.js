// Program to generate random numbers

let a = null;
const MAX = 7;
const MIN = 1;

for(let i = 0; i < 6; i++){
    a = Math.floor((Math.random() * (MAX - MIN))) + MIN;
    console.log(`==> ${a}`);
}