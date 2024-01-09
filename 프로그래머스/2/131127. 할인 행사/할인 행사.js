function solution(want, number, discount) {
  var answer = 0;

  let wantObj = {};
  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  for (let i = 0; i < discount.length; i++) {
    if (discount.length - i < 10) break;

    let check = JSON.parse(JSON.stringify(wantObj));
    const divBy10 = discount.slice(i, i + 10);

    for (let j = 0; j < divBy10.length; j++) {
      if (!check[divBy10[j]]) {
        break;
      } else {
        check[divBy10[j]]--;
        if (check[divBy10[j]] === 0) delete check[divBy10[j]];
      }
    }

    if (Object.keys(check).length === 0) answer++;
  }

  return answer;
}