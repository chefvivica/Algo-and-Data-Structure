const sumList = (head) => {
    let sum = 0;
    let cur = head;
    while(cur !== null){
      
      sum += cur.val;
      cur = cur.next;
    }
    
    return sum;
  };

  //time complexity and space complexity o(n)