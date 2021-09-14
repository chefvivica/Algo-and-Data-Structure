const insertNode = (head, value, index) => {
    let dummy = new Node(value);
      
    
    if(index === 0 ) {
      dummy.next = head;
      return dummy;
    }
   
    let current = head;
    let count = 0;
    while(current !== null){
      if(count === index -1){
        const nextNode = current.next
        current.next = dummy;
        current.next.next = nextNode
      }
      count+=1
      current = current.next;   
     
      
    } 
    
    return head;
  };

  //time o（n）space : o(1)