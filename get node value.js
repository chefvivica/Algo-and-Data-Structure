// recursive
const getNodeValue = (head, index) => {
    if(head === null)return null;
    if(index === 0)return head.val
    
    return getNodeValue(head.next, index-1);
    
  };
  //   Time: O(n) Space: O(n)
  // iterative
  const getNodeValue = (head, index) => {
    let count = 0;
    let current = head;
    while(current !== null){
      if(count === index){
        return current.val
      }
      current = current.next;
      count += 1;
    }
    
    return null;
  };
//   Time: O(n) Space: O(1)

  // for loop 
  const getNodeValue = (head, index) => {
    if(index === 0) return head.val;
    let current = head;
    for(let i = 0; i < index; i++){
      if(current.next === null){
        return null;
      }
      current = current.next
    }
    
    return current.val
  };

//   Time: O(n) Space: O(1)