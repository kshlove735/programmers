function solution(a, b) {
  var answer = 0;
  a.forEach((ele, i) => {
    answer += ele * b[i]
  })
  return answer;
}
