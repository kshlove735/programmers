function solution(numbers) {
  let answer = -1;

  let standardSum = 9 * 10 / 2

  let numbersSum = 0;
  numbers.forEach(element => { numbersSum += element });
  answer = standardSum - numbersSum
  return answer;
}