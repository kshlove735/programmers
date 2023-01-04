function solution(nums) {
    let numsObj={}
    for(let i =0; i<nums.length;i++){
        numsObj[nums[i]]=(++numsObj[nums[i]] || 1);
    }
    let answer =  Object.keys(numsObj).length
    if(nums.length/2 < answer) answer = nums.length/2
    
    return answer;
}