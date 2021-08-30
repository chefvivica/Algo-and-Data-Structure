const intersection = (a, b) => {
     /**  let result = [];
      let sortedA = a.sort();
      let sortedB = b.sort();
      let i = 0;
      while(i < sortedA.length){
        if(sortedA[i] == sortedB[i]){
          result.push(sortedA[i])
          i++
        }
        else{    
          i++
        }
      }
      
      return result;
      */
    const result = [];
      const setA = new Set(a);
      for (let item of b) {
        if (setA.has(item)) {
          result.push(item);
        }
      }
      return result;
      
    };
//time complexity o(n) space complexity  o(n)