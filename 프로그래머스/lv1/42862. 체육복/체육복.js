function solution(n, lost, reserve) {
  lost.sort()
  reserve.sort()

  let set = new Set()
  let lostObj = {}
  lost.forEach(e => lostObj[e] = e)

  for (let ele of reserve) {

    set.add(ele)
    if (ele === lostObj[ele]) continue;

    if (lostObj[ele - 1] && lostObj[ele + 1]) {
      if (!set.has(ele - 1)) { set.add(ele - 1); continue; }
      if (!set.has(ele + 1)) { set.add(ele + 1); continue; }
    }

    if (lostObj[ele + 1] && !set.has(ele + 1)) { set.add(ele + 1); continue; }
    if (lostObj[ele - 1] && !set.has(ele - 1)) { set.add(ele - 1); continue; }
  }

  for (let i = 1; i <= n; i++) {
    if (!lostObj[i]) set.add(i);
  }
  return set.size;
}