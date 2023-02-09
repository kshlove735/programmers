function solution(arr, divisor) {
  let answer = [];
  answer = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b)
  return answer.length !== 0 ? answer : [-1];
}