function solution(s) {
  let answer = 0;

  let eng = { "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9 }
  let keys = Object.keys(eng)

  keys.forEach(key => {
    const regex = new RegExp(`${key}`, 'gi')
    s = s.replace(regex, eng[key])
  })
  answer = +s
  return answer;
}
