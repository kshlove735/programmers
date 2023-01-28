function solution(ingredient) {
  let answer = 0;
  let pattern = [1, 2, 3, 1];
  let index = 0;
  let stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4) {
      let find = stack.slice(-4).join("");

      if (find === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        answer++;
      }
    }
  }

  return answer;
}