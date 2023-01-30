function solution(a, b, n) {
  let answer = 0;
  function helper(a, b, n) {
    if (n < a) return
    answer += Math.floor(n / a) * b;
    n = n - Math.floor(n / a) * a + Math.floor(n / a) * b;
    helper(a, b, n)
  }
  helper(a, b, n)
  return answer;
}