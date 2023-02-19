function solution(n) {

  let fibArr = [0n, 1n]
  for (let i = 2; i <= n; i++) {
    fibArr[i] = (fibArr[i - 1] * 1n) + (fibArr[i - 2] * 1n)
  }
  return (fibArr[n] % 1234567n)
}