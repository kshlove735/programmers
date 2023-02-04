function solution(sizes) {
  let answer = 0;
  let leftMax = 0;
  let rightMax = 0;
  sizes.forEach(ele => {
    if (ele[0] >= ele[1]) {
      if (ele[0] > leftMax) leftMax = ele[0]
      if (ele[1] > rightMax) rightMax = ele[1]
    } else {
      if (ele[1] > leftMax) leftMax = ele[1]
      if (ele[0] > rightMax) rightMax = ele[0]
    }
  });
  answer = leftMax * rightMax
  console.log(leftMax, rightMax);
  return answer;
}