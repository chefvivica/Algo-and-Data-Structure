const mostFrequentChar = (s) => {
    const map = {};
    for(let char of s){
      if(!(char in map)){
        map[char] = 0;
      }
      map[char] += 1;
    }
    let mostFrequent = null;
    for(let char of s){
      if(mostFrequent === null || map[char] > map[mostFrequent]){
        mostFrequent = char;
      }
    }
   
    return mostFrequent;
    
  };

  //time complexity o(n) spcae conplexity o(n)