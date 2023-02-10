function solution(s) {
  return s.split(' ').map((subArr) => subArr.split('').map((ele, i) => i % 2 === 0 ? ele.toUpperCase() : ele.toLowerCase()).join('')).join(' ')
}