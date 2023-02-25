function solution(citationsn) {
    citationsn.sort((a, b) => b - a);
    if (citationsn.length === 1) return citationsn[0]
    for (let i = 0; i < citationsn.length; i++) {
        if (citationsn[i] < i + 1) return i
    }
    return citationsn.length;
}