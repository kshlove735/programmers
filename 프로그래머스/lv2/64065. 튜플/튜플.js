function solution(s) {
    let answer = [];
    let arr = s.slice(2, s.length - 2).split('},{').map(e => e.split(',').map((e) => Number(e))).sort((a, b) => a.length - b.length);
    for (let i = 0; i < arr.length; i++) {
        if (answer.length < 1) answer.push(arr[i][0]);
        let aa = arr[i].filter(e => !answer.includes(e)).concat(answer.filter(e => !arr[i].includes(e)))
        if (aa.length > 0) answer.push(aa[0])
    }
    return answer;
}