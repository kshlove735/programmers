function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let cur = s[i]
    // stack에 하나씩 넣으면서
    stack.push(cur)
    // 길이가 2이상이 되고 마지막, 마지막 전에 같음으면 pop, pop
    if (stack[stack.length - 1] === stack[stack.length - 2] && stack.length >= 2) {
      stack.pop();
      stack.pop()
    }
  }
  // 길이 0이면 1 아니면 0
  return stack.length === 0 ? 1 : 0
}