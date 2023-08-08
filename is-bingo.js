//Found on codewar
//https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/train/javascript

/*
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/

//b=2
//i=9
//n=14
//g=7
//0=15

const bingo = (arr) => {
    let b = 0
    let i = 0
    let n = 0
    let g = 0
    let o = 0
    for (num of arr) {
        if (num === 2) {
            b++
        }
        if (num === 9) {
            i++
        }
        if (num === 14) {
            n++
        }
        if (num === 7) {
            g++
        }
        if (num === 15) {
            o++
        }
    }
    if (b > 0 && i > 0 && n > 0 && g > 0 && o > 0) return 'WIN'
    else return 'LOSE'
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) //LOSE
console.log(bingo([21,13,2,7,5,14,7,15,9,10])) //WIN