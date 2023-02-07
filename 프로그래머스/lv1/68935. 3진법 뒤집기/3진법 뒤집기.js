function solution(n) {
  let str = n.toString(3)
  str = Number.parseInt(str.split('').reverse().join(''), 3)
  return +str;
}