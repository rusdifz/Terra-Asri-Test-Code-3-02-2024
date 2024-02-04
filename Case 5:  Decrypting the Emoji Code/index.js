const emojibaseData = require('emojibase-data/en/compact.json');

function findEmojiByUnicode(unicode) {
  return emojibaseData.find(emoji => emoji.unicode === unicode);
}
const checkEmoji = findEmojiByUnicode('✈')

function emojiToTextWithMapping(textWithEmoji) {
    const translatedTextArray = [];
  
    for (let char of textWithEmoji) {
        // console.log('char', char);  
        const checkEmoji = findEmojiByUnicode('✈️ ')
       
        if(checkEmoji){
            translatedTextArray.push(checkEmoji.label);
        }else{
            translatedTextArray.push(char);
        }
    }
  
    return {
        plain_text: textWithEmoji,
        translated_text: translatedTextArray.join('')
    }
}

module.exports = {
    emojiToTextWithMapping
}
