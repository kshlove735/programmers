function solution(s) {
  if (s.length === 1) return 1;
  let answer = 0;
  let count = 0;
  let temp = 0;

  for (let i = 0; i < s.length; i++) {
    s[temp] === s[i] ? count++ : count--;

    if (count === 0) {
      // console.log(s.slice(temp, i + 1));
      temp = i + 1;
      answer++;
    }
  }

  // console.log(s.slice(temp, s.length));
  if (temp < s.length) answer++;

  return answer;
}