function solution(arr) {
  let answer = [];
  answer.push(arr[0])
  arr.reduce((acc, cur) => {
    if (acc !== cur) {
      answer.push(cur)
    }
    return cur
  }, arr[0])
  return answer;
}