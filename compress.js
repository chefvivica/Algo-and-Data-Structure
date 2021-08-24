/**
 Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurences of the same characters are compressed into the number of occurences followed by the character. Single character occurences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
You can assume that the input only contains alphabetic characters.
 */

const compress = (s) => {
    // todo
    let i = 0;
    let j = 1;
    let result = []
    
    while(i < s.length){  
      if(s[j] == s[i]){
        j+=1
      }else{     
        let num = j-i;    
        if(num !=1){
          result.push(num)
        result.push(s[i]) 
        }else{
          result.push(s[i])
        }     
        i = j;
        j+=1;
      }
       
    }  
    return result.join('')
  };

  