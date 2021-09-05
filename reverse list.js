const reverseList = (head) => {
    let current = head;
    let previous = null;
  
    while(current !== null){
      const nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
  
    return previous;
};

// time complexity o(n) space o(1)