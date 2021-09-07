const isUnivalueList = (head) => {
    let current = head;
    
    while(current.next !== null){
      let prev = current;
      current = current.next
      if(prev.val !== current.val){
        return false
      }
    }
    return true;
  };

  // time o(n) space o(1)