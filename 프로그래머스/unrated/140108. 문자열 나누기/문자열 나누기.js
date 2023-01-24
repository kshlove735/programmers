function solution(s) {
  let answer = 0;
  let count = 0;
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    s[temp] === s[i] ? count++ : count--;

    if (count === 0) {
      temp = i + 1;
      answer++;
    }
  }
  if (temp < s.length) answer++;

  return answer;
}