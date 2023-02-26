function solution(s) {
    let answer = 0;
    if (s.length === 1) return 0;
    for (let i = 0; i < s.length; i++) {
        s = s.slice(1) + s.slice(0, 1)
        let stack = []
        for (let j = 0; j < s.length; j++) {
            stack.push(s[j]);
            if (stack.length >= 2 && (stack[stack.length - 2] + stack[stack.length - 1] === '[]' || stack[stack.length - 2] + stack[stack.length - 1] === '{}' || stack[stack.length - 2] + stack[stack.length - 1] === '()')) {
                stack.pop();
                stack.pop();
            }
        }
        if (stack.length === 0) answer++
    }
    return answer;
}