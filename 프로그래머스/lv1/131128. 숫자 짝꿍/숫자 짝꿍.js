function solution(X, Y) {
  let answer = '';
  let obj = {};
  let arr = [];
  for (let a of X) {
    obj[a] = (+[obj[a]] || 0) + 1;
  }
  for (let b of Y) {
    if (obj[b] && obj[b] > 0) {
      obj[b] -= 1
      arr.push(b)
    }
  }
  arr.sort((a, b) => b - a)
  if (arr.length <= 0) return "-1"
  answer = arr.join('')
  if (+answer === 0) return "0"

  return answer;
}