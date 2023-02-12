function solution(n) {
  let arr = []
  for (let i = 0; i <= n; i++) {
    arr.push(i)
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 || arr[i] === 1) continue;

    for (let j = 2; j * i < arr.length; j++) {
      arr[j * i] = 0;
    }
  }
  return arr.filter(num => num !== 0 && num !== 1).length;
}