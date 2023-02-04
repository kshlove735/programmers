function solution(sizes) {
  let answer = 0;
  let leftArr = [];
  let rightArr = [];
  sizes.forEach(ele => {
    if (ele[0] >= ele[1]) {
      leftArr.push(ele[0])
      rightArr.push(ele[1])
    } else {
      leftArr.push(ele[1])
      rightArr.push(ele[0])
    }

  });
  leftArr.sort((a, b) => b - a)
  rightArr.sort((a, b) => b - a)
  answer = leftArr[0] * rightArr[0]
  return answer;
}