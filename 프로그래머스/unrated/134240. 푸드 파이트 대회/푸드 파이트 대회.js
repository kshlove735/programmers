function solution(food) {
  let answer = "";
  let obj = {};
  let b = [];
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 !== 0) obj[i] = (food[i] - 1) / 2;
    else obj[i] = food[i] / 2;
  }

  for (let a in obj) {
    for (let i = 0; i < obj[a]; i++) {
      b.push(a);
    }
  }
  let c = b.slice().sort((q, e) => e - q);

  answer = b.concat(0).concat(c).join("");

  return answer;
}