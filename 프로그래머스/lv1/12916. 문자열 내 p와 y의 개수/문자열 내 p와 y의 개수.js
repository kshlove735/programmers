function solution(s) {

  let p = s.match(/p/gi)
  let y = s.match(/y/gi)

  let pLen = p ? p.length : 0
  let yLen = y ? y.length : 0

  return pLen === yLen ? true : false
}