function solution(today, terms, privacies) {
  let answer = [];
  let basicDate = new Date(today);
  let termsObj = {};
  for (let term of terms) {
    let [type, month] = term.split(" ");
    termsObj[type] = month;
  }

  for (let i = 0; i < privacies.length; i++) {
    let [startDate, type] = privacies[i].split(" ");
    let acceptDate = new Date(startDate);

    acceptDate.setMonth(acceptDate.getMonth() + parseInt(termsObj[type]));
    if (basicDate.getTime() >= acceptDate.getTime()) {
      answer.push(i + 1);
    }
  }

  return answer;
}