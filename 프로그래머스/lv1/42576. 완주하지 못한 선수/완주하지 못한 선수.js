function solution(participant, completion) {
    
    let obj={}
    for(let i = 0 ;i<completion.length; i++){
        if(obj[completion[i]]){
            obj[completion[i]]=obj[completion[i]]+1;
        }else{
            obj[completion[i]]=1;
        }
    }
   
    for(let i = 0; i<participant.length; i++){
        if(!obj[participant[i]]){
            var answer = participant[i];
            return answer;  
        }else{
            obj[participant[i]]=obj[participant[i]]-1;
            if(obj[participant[i]]<0){
                var answer = participant[i];
                return answer;  
            }
        }
        
    }
}