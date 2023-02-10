function solution(strings, n) {
  let answer = [];

  let a = strings.sort((a, b) => {
    console.log(a[n], b[n]);
    if (a[n] === b[n]) return a - b
    else return a[n].charCodeAt() - b[n].charCodeAt()
  })

  console.log(a);
  return answer;
}