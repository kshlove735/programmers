function solution(n) {
  let div = Math.floor(n / 2);
  if (div === 0 && n % 2 === 0) return 0;
  if (div === 0 && n % 2 !== 0) return 1;
  if (n % 2 === 0) return solution(div);
  else return solution(div) + 1;
}