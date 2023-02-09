function solution(arr) {
  let answer = arr.slice()
  if (arr.length === 1) return [-1]
  let min = arr.sort((a, b) => b - a).pop()
  return answer.filter(num => min < num)
}