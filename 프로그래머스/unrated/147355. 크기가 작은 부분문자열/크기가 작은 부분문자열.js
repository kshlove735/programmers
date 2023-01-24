function solution(t, p) {
  let answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    console.log(+t.substr(i, p.length), +p);
    if (+t.substr(i, p.length) <= +p) ++answer;
  }

  return answer;
}