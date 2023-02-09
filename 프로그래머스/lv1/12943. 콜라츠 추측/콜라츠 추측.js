function solution(num) {
  let count = 0;
  if (num === 1) return 0;

  function helper(num) {
    if (num % 2 === 0) num /= 2
    else num = num * 3 + 1

    count++;

    if (num === 1) return count;
    if (count === 500) return count = -1
    helper(num)
  }
  helper(num)
  return count;
}