const addLength = (str) =>{
    const arr = []
    let strArr = str.split(' ')
    strArr.forEach((word) => {
        arr.push(`${word} ${word.length}`)
    })
    return arr
}

console.log(addLength('apple ban'))