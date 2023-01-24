function solution(s) {
  if (s.length === 1) return 1;
  let answer = 0;
  let count = 0;
  let temp = 0;
  let words = [];

  for (let i = 0; i < s.length; i++) {
    s[temp] === s[i] ? count++ : count--;

    if (count === 0) {
      words.push(s.slice(temp, i + 1));
      temp = i + 1;
      answer++;
    }
  }

  if (temp < s.length) {
    words.push(s.slice(temp, s.length));
    answer++;
  }
  console.log(words);
  return answer;
}