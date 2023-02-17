function solution(s) {
  return s.replace(/\b\w{1,}\b/g, char => { char = char.toLowerCase(); return char[0].toUpperCase() + char.slice(1) })
}