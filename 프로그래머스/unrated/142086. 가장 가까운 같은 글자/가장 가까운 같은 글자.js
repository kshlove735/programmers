// 처음 : -1
// 앞에 있있다면 : i - 최근 index

// 방법1
function solution(s) {
  return [...s].map((w, i) => {
    return s.substr(0, i).lastIndexOf(w) !== -1 ? i - s.substr(0, i).lastIndexOf(w) : -1;
  });
}
// 방법2
// function solution(s) {
//   let answer = [];
//   let obj = {};

//   for (let i = 0; i < s.length; i++) {
//     if (obj[s[i]] !== undefined) answer.push(i - obj[s[i]]);
//     else answer.push(-1);

//     obj[s[i]] = i;
//   }
//   return answer;
// }