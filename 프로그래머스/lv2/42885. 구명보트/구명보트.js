function solution(people, limit) {
  let count = 0;
  people.sort((a,b)=> a-b);

  let x = 0;
  let y = people.length - 1

  while (x < y) {
    if (people[x] + people[y] <= limit) {
      count++;
      x++;
      y--;
    } else {
      y--;
    }
  }
  return people.length - count
}