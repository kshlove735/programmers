function solution(n) {

  function helper(n) {
    let div = Math.floor(n / 2);
    if (div === 0 && n % 2 === 0) return 0;
    if (div === 0 && n % 2 !== 0) return 1;
    if (n % 2 === 0) {
      return helper(div);
    } else {
      return helper(div) + 1;
    }
  }
  return helper(n)
}