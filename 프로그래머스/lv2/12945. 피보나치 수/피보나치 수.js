function solution(n) {

  let fibArr = [0, 1]

  // f(n) % m = (f(n-2) + f(n-1)) % m
  //              = (f(n-2) % m + f(n-1) % m) % m
  for (let i = 2; i <= n; i++) {
    fibArr[i] = (fibArr[i - 1] + fibArr[i - 2]) % 1234567
  }
  return fibArr[n]
}