function solution(number, limit, power) {
  let answer = 0;
  let a = [];
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        count++;
        a.push(j);
        if (i / j !== j) count++;
      }
    }
    count > limit ? (answer += power) : (answer += count);
  }

  return answer;
}