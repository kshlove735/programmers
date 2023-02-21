function solution(brown, yellow) {
  let x = 0;
  let y = 0;
  for (let i = 1; i <= yellow; i++) {
    y = yellow / i
    if (brown - 4 === (y + i) * 2 && yellow % i === 0) {
      x = i;
      break;
    }
  }
  return x > y ? [x + 2, y + 2] : [y + 2, x + 2]
}