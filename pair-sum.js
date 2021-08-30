const pairSum = (numbers, targetSum) => {
    let map = {};
    
    for(let i = 0; i < numbers.length; i++){
      let diff = targetSum - numbers[i];
      if(diff in map){
        return [map[diff], i]
      }
      map[numbers[i]] = i ;
    }
    return null;
   
  };
  //time complexity o(n) space complexity o(n)