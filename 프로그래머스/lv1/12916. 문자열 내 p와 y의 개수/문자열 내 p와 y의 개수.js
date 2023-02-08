function solution(s) {
  
  let p = s.match(/p/gi)?s.match(/p/gi).length: 0
  let y = s.match(/y/gi)?s.match(/y/gi).length: 0

  return p === y ? true : false
}