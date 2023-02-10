function solution(n, m) {
  let big = Math.max(n, m)
  let small = Math.min(n, m);

  while (big % small !== 0) {
    [small, big] = [big, small]
    big = big % small;
  }
  return [small, n * m / small]
}