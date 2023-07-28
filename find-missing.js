/*
Find Missing Numbers In The Array 
Create a function called findMissingNums that takes in two arrays. Iterate over the first array and if the number you are iteratring over is NOT present in the second array, push the number into it. Once the loop is complete return the second array.
    
Input: [0,1,2,3,4,5,6,7,8,9,10,11,12], [2,3,7,9]
    
Output: [2,3,7,9 0,1,4,5,6,8,10,11,12]
    
Hint: Try incorporating one or more of the following array methods: 
 - indexOf()
 - includes()
*/

// WRITE PSEUDOCODE HERE


const arr1 = [0,1,2,3,4,5,6,7,8,9,10,11,12] 
const arr2 = [2,3,7,9]

const findMissingNums = (arr1,arr2) => {
    arr1.forEach((num) => {
        arr2.includes(num)? '': arr2.push(num)
    })
    return arr2
}

console.log('findMissingNums is: ', findMissingNums(arr1,arr2))