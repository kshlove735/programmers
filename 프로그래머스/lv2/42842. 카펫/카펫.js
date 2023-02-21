function solution(brown, yellow) {
  let x = 0;
  let y = 0;
  for (let i = 1; i <= yellow; i++) {
   
    if (brown - 4 === (yellow / i + i) * 2) {
      x = i;
      y = yellow / i
      break;
    }
  }
  return [Math.max(x + 2, y + 2) , Math.min(x + 2, y + 2)]
}