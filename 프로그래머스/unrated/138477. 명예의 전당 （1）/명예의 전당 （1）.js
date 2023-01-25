
function solution(k, score) {
  let answer = [];
  let win = [];
  for (let i = 0; i < score.length; i++) {
    if (win.length < k) {
      win.push(score[i]);
    } else {
      if (win[k - 1] < score[i]) {
        win.pop();
        win.push(score[i]);
      }
    }

    win.sort((a, b) => b - a);
    answer.push(win[win.length - 1]);
  }

  return answer;
}