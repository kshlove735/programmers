function solution(phone_number) {
  let [star, show] = [phone_number.slice(0, phone_number.length - 4).replace(/[0-9]/g, "*"), phone_number.slice(phone_number.length - 4)]
  return star + show;
}