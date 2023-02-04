function solution(sizes) {
  let answer = 0;
  let leftMax = 0;
  let rightMax = 0;

  let resizes = sizes.map(([w, h]) => w > h ? [w, h] : [h, w])
  resizes.forEach(([w, h]) => {
    if (w > leftMax) leftMax = w
    if (h > rightMax) rightMax = h
  });
  answer = leftMax * rightMax
  return answer;
}