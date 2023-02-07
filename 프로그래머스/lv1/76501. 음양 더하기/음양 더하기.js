function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((ele, i) => {
    if (signs[i]) answer += ele
    else answer -= ele
  })
  return answer;
}