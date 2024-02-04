function isCircularPalindrome(word) {

    const wordClean = word.toLowerCase().trim().replace(/[^A-Za-z0-9]/g, '');
  
    const reverse = wordClean.split("").reverse().join("");

    if(wordClean === reverse){
        return true
    }

    return false
}

// console.log('A man, a plan, a canal. Panama',isCircularPalindrome('A man, a plan, a canal. Panama'));
// console.log('abcabca',isCircularPalindrome(`never odd or even`));

module.exports = {
    isCircularPalindrome
};