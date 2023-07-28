const findWordFrequencies = (sentence) => {
    let sentenceObj = {}
    const lower = sentence.toLowerCase()
    const wordArr = lower.split(' ')
    wordArr.forEach((word) => {
// the value of the non-existent key evaluates to undefined so the || or operator takes a zero instead and adds the 1
        sentenceObj[word] = (sentenceObj[word] || 0) + 1
    })
    return sentenceObj
}
const freqs = findWordFrequencies("The world is all that is the case")
console.log(freqs)
const findHighestFrequency = (wordObj) => {
    const valueArr = Object.entries(wordObj)
    let longest = 0
    let singleObj = {}
    valueArr.forEach((ele) => {
        if (ele[1] > longest) {
            longest = ele[1]
            longest = ele
        }     
    })
    singleObj[longest[0]] = longest[1]
    return singleObj

}
console.log(findHighestFrequency(freqs))

const freqs2 = findWordFrequencies('That that is is that that is not is not');

console.log(freqs2);
console.log(findHighestFrequency(freqs2));

const freqs3 = findWordFrequencies('hi');

console.log(freqs3);
console.log(findHighestFrequency(freqs3));