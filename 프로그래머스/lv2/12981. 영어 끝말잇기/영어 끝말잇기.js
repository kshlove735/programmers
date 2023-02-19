function solution(n, words) {
  let obj = {}
  obj[words[0]] = 1;
  let idx = 0;
  // 배열 loop
  for (let i = 1; i < words.length; i++) {
    // 원소 중 이전에 같은거 있으면 탈락
    if (obj[words[i]]) {
      idx = i;
      break;
    }
    obj[words[i]] = 1;

    // 끝말잇기가 성릭하지 않으면 탈락
    if (words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      idx = i;
      break;
    }
  }

  // 탈락 없으면
  if (idx === 0) return [0, 0];

  // 탈락 idx 찾으면 
  let reminder = (idx + 1) % n;
  let div = Math.floor((idx + 1) / n)
  let fail = reminder === 0 ? n : reminder
  let count = fail === reminder ? div + 1 : div
  return [fail, count]
}