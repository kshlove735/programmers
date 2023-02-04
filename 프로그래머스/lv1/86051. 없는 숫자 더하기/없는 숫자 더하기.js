function solution(numbers) {
  let answer = -1;

  let standardSum = 0;
  for (let i = 0; i < 10; i++) {
    standardSum += i
  }

  let numbersSum = 0;
  numbers.forEach(element => { numbersSum += element });
  answer = standardSum - numbersSum
  return answer;
}