function solution(n) {

  let fibArr = [0, 1]
  for (let i = 2; i <= n; i++) {
    fibArr[i] = (fibArr[i - 1] % 1234567 + fibArr[i - 2] % 1234567) % 1234567
  }
  return fibArr[n];
}