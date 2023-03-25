function solution(n, left, right) {
    let arr = [];

    let start_v = Math.floor(left / n);
    let start_l = left % n;
    let end_v = Math.floor(right / n);
    let end_l = right % n;

    for (let i = 0; i < n; i++) {
        if (i < start_v) {
            i = start_v - 1;
            continue;
        }
        if (i > end_v) break;
        for (let j = 0; j < n; j++) {
            if (i === start_v && j <= start_l) j = start_l
            if (i === end_v && j > end_l) break;
            arr.push(Math.max(i, j) + 1);
        }
    }
    return arr
}