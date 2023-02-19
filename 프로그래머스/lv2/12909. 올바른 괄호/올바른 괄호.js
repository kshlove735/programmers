function solution(s) {
  let answer = true;

  if (s.length % 2 !== 0) return false;

  while (s.length > 0) {
      if(s[0] !=='(') return false
    let replace = s.replace(/\(\)/g, '')
    if (s === replace) return false;
      s=replace
  }
  return answer;
}