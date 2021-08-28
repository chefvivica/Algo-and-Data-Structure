const anagrams = (s1, s2) => {
    // todo
    let s3 = [...s1].sort()
    let s4 = [...s2].sort()
    
    let i = 0;
    while(i < s4.length){
      if(s3[i] == s4[i]){
        i++;
      }else{
        return false;
      }
    }
    
    return true;
  };
  