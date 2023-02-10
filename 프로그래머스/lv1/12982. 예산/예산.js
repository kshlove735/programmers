function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (let num of d) {
    if (num > budget) break;
    budget -= num;
    answer++
  }
  return answer;
}