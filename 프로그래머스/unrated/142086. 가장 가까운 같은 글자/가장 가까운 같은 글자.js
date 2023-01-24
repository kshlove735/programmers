function solution(s) {
  let answer = [];
  let obj = {};

  // 처음 : -1
  // 앞에 있있다면 : i - 최근 index
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] !== undefined) {
      answer.push(i - obj[s[i]]);
    } else {
      answer.push(-1);
    }
    obj[s[i]] = i;
  }
  return answer;
}