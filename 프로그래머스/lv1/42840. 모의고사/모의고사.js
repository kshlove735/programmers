function solution(answers) {
  let answer = [];
  let pattern1 = [1, 2, 3, 4, 5];
  let pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let arr1 = answers.filter((num, i) => num === pattern1[i % pattern1.length]).length;
  let arr2 = answers.filter((num, i) => num === pattern2[i % pattern2.length]).length;
  let arr3 = answers.filter((num, i) => num === pattern3[i % pattern3.length]).length;

  let max = Math.max(arr1, arr2, arr3);

  if (max === arr1) answer.push(1)
  if (max === arr2) answer.push(2)
  if (max === arr3) answer.push(3)
  return answer;
}