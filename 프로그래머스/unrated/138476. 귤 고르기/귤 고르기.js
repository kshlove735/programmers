function solution(k, tangerine) {
    let answer = 0;
    let obj = {}
    for (let i = 0; i < tangerine.length; i++) {
        obj[tangerine[i]] = (obj[tangerine[i]] | 0) + 1
    }
    let countDuplication = Object.values(obj).sort((a, b) => b - a);

    let sum = 0;
    for (let i = 0; i < countDuplication.length; i++) {
        sum += countDuplication[i];
        if (sum >= k) return i + 1;
    }

}