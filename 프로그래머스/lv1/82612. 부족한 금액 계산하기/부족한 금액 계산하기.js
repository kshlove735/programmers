function solution(price, money, count) {
  return Math.max(price * count * ++count / 2 - money, 0)
}