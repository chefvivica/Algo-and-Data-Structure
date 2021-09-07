const mergeLists = (head1, head2) => {
    let head = null;
    let current1 = null;
    let current2 = null;
    if(head1.val < head2.val){
      head = head1
      current1 = head1.next
      current2 = head2
    }else{
      head = head2
      current1 = head1
      current2 = head2.next;
    }
    
    let tail = head
    while(current1 !== null && current2 !== null){
      if(current1.val < current2.val){
        tail.next = current1;
        current1 = current1.next  
      }else{
        tail.next = current2;
        current2 = current2.next  
      }
      tail = tail.next
    }
    
    if(current1 !== null) tail.next = current1;
    if(current2 !== null) tail.next = current2;
    
    return head;
    
  };

  // time O(min(n,m)) space o(1)


  const betterMergeLists = (head1, head2) => {
    // new Node(null) is the very important step
    let head = new Node(null);
    let current1 = head1;
    let current2 = head2;  
    let tail = head
    while(current1 !== null && current2 !== null){
      if(current1.val < current2.val){
        tail.next = current1;
        current1 = current1.next  
      }else{
        tail.next = current2;
        current2 = current2.next  
      }
      tail = tail.next
    }
    
    if(current1 !== null) tail.next = current1;
    if(current2 !== null) tail.next = current2;
    
    return head.next;
    
  };