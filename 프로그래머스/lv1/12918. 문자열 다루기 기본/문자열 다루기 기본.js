function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false
  return s.split('').filter(ele => !Number.isInteger(+ele)).length > 0 ? false : true
}