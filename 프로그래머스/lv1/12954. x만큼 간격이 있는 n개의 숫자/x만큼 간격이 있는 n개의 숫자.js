function solution(x, n) {
  let answer = [];

  console.log(answer.length, n);
  let idx = 1
  while (answer.length < n) {
    answer.push(x * idx)
    idx++
  }

  return answer;
}