function solution(arr) {
  // 방법1
  return arr.filter((ele, i) => ele != arr[i + 1])

  // 방법 2
  // let answer = [];
  // answer.push(arr[0])
  // arr.reduce((acc, cur) => {
  //   if (acc !== cur) answer.push(cur)
  //   return cur
  // }, arr[0])
  // return answer;
}