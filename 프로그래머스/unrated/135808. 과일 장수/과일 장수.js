function solution(k, m, score) {
  if (score.length < m) return 0;
  let answer = 0;
  score.sort((a, b) => a - b);

  while (score.length >= m) {
    let box = score.splice(-m);
    
    answer += box[0] * m;
  }

  return answer;
}