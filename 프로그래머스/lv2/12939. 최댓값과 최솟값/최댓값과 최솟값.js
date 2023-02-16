function solution(s) {
  let numArr = s.split(' ').map(ele => Number(ele)).sort((a, b) => a - b)
  return [numArr[0], numArr[numArr.length - 1]].join(' ')
}