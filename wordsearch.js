const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
  
      if (l.includes(word)) {
          return true
      }
    };
  
    const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    verticalJoin.push([]);
  };
  for (let r = 0; r < letters.length; r++) {
    for (let c = 0; c < letters[0].length; c++) {
      verticalJoin[c].push(letters[r][c]);
    }
  }
  const verticalJoinWords = verticalJoin.map(ls => ls.join(''));
  for (let l of verticalJoinWords) {
    if (l.includes(word)) {
        return true
    }
  } 
  return false
};
  
const word = 'aeim'
  
const letters = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p']]

console.log(wordSearch(letters, word))

module.exports = wordSearch


// For this challenge, you'll be implementing a word search solver, as a function that receives a 2D array of letters and a word. The function must:

// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found