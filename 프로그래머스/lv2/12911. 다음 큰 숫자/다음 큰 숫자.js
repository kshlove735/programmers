function solution(n) {
  let length = n.toString(2).match(/1/g).length
  let i = 1;
  while (true) {
    n += i;
    if (length === n.toString(2).match(/1/g).length) return n
  }
}