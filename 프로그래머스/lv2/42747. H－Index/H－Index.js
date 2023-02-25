function solution(citationsn) {
    citationsn.sort((a, b) => b - a);
    return citationsn.filter((e, i) => e >= i + 1).length
}