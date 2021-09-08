const longestStreak = (head) => {
    let maxStreak = 0;
    let currentStreak = 0;
    let current = head;
    let prev = null;
    
    while(current !== null) {
      if(current.val === prev){
        currentStreak += 1;
      }else{
        currentStreak = 1;
      }
      
      if(currentStreak > maxStreak){
        maxStreak = currentStreak
      }
      
      prev = current.val;
      current = current.next;
      
    }
    return maxStreak;
    
  };

  // time : o(n) space: O (1)