function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    // if (s.substr(0, i).lastIndexOf(s[i]) !== -1) answer.push(i - s.substr(0, i).lastIndexOf(s[i]));
    // else answer.push(s.substr(0, i).lastIndexOf(s[i]));

    let a = s.substr(0, i).lastIndexOf(s[i]) !==-1 ? i-s.substr(0, i).lastIndexOf(s[i]) : s.substr(0, i).lastIndexOf(s[i])
    answer.push(a)
  }
  return answer;
}