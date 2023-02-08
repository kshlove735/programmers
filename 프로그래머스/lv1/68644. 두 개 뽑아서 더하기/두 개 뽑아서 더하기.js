function solution(numbers) {
  let answer = [];
  numbers.forEach((num, i) => {
    let index = i + 1
    while (index < numbers.length) {
      answer.push(numbers[i] + numbers[index]);
      index++
    }
  });

  answer = Array.from(new Set(answer)).sort((a, b) => a - b);
  return answer;
}