function solution(n) {
  let answer = 0;
  [...n.toString()].forEach(num => answer += +num)
  return answer;
}