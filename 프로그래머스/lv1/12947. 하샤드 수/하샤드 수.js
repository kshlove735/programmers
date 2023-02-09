function solution(x) {
  let numArr = String(x).split('').map(arg => +arg)
  let sum = numArr.reduce((acc, cur) => { return acc += cur })
  return x % sum === 0 ? true : false
}