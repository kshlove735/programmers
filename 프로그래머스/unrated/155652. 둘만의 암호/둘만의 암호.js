function solution(s, skip, index) {
  let sArr = [...s]
  let skipArr = [...skip]
  skipArr.sort((a, b) => a.charCodeAt() - b.charCodeAt())

  function helper(char, answerChar) {
    skipArr.forEach(skipEle => {
      if (char.charCodeAt() <= skipEle.charCodeAt() && skipEle.charCodeAt() <= answerChar) answerChar++
    })
    if (answerChar > 122) answerChar = helper(String.fromCharCode(96), answerChar - 26)

    return answerChar
  }

  let answerArr = sArr.map(char => {
    let answerChar = char.charCodeAt() + index
    let answer = helper(char, answerChar)
    return String.fromCharCode(answer)
  })
  return answerArr.join('');
}