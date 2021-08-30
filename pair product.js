const pairProduct = (numbers, targetProduct) => {
    let map = {};
    for(let i = 0; i < numbers.length; i++){
      let dividedNum = targetProduct / numbers[i];
      if(dividedNum in map){
        return [map[dividedNum], i]
      }
      map[numbers[i]]= i;
      
    }
    return null;
  };

    //time complexity o(n) space complexity o(n)