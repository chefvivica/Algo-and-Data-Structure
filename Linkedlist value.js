const linkedListValues = (head) => {
    let cur = head
    let result = []
    while(cur !==null){
      result.push(cur.val)
      cur = cur.next
    }
    
    return result;
  };

  //time complexity and space complexity o(n)