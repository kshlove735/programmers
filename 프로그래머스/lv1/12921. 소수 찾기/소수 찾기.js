

function solution(n) {
  let arr = []
  for (let i = 0; i <= n; i++) {
    arr.push(i)
  }
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 || arr[i] === 1) continue;
    // console.log(arr.length, arr[i]);
    // arr = arr.filter(num => (num === arr[i]) || (num % arr[i] !== 0));

    for (let j = 2; j * i < arr.length; j++) {
      arr[j * i] = 0;
    }
  }
  return arr.filter(num => num !== 0 && num !== 1).length;
  return arr.length;
}