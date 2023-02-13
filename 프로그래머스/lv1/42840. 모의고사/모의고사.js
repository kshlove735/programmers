function solution(answers) {
  let answer = [];
  let pattern1 = "12345"
  let pattern2 = "21232425"
  let pattern3 = "3311224455"
  let [...arr1] = answers.length > pattern1.length ? pattern1.repeat(Math.ceil((answers.length - pattern1.length) / pattern1.length) + 1) : pattern1;
  let [...arr2] = answers.length > pattern2.length ? pattern2.repeat(Math.ceil((answers.length - pattern2.length) / pattern2.length) + 1) : pattern2;
  let [...arr3] = answers.length > pattern3.length ? pattern3.repeat(Math.ceil((answers.length - pattern3.length) / pattern3.length) + 1) : pattern3;

  let arr = [{ name: 1, socore: 0 }, { name: 2, socore: 0 }, { name: 3, socore: 0 }]

  answers.forEach((num, i) => {
    if (num === Number(arr1[i])) arr[0].socore++;
    if (num === Number(arr2[i])) arr[1].socore++;
    if (num === Number(arr3[i])) arr[2].socore++;
  })
  arr.sort((a, b) => b.socore - a.socore);
  answer.push(arr[0].name)

  if (arr[0].socore === arr[1].socore) {
    answer.push(arr[1].name)
    if (arr[1].socore === arr[2].socore) answer.push(arr[2].name)
  }

  answer.sort((a, b) => a - b)
  return answer;
}