function solution(n, left, right) {
    let str = ''

    let v = Math.floor(left / (n + 1));
    let l = (n + 1) % left;

    for (let i = 0; i < n; i++) {
        if (i < v) i = v-1;
        for (let j = 0; j < n; j++) {
            if (j < l - 1) j = l - 1
            str += String(Math.max(i, j) + 1);
        }
    }
    return str.slice(left, right + 1).split('').map(e => Number(e));
}