function solution(price, money, count) {
  let answer = -1;
  let total = 0
  for (let i = 1; i <= count; i++) {
    total += price * i
  }
  answer = total - money
  if (answer < 0) return 0
  return answer;
}