const validateUser=function(username,password){
  
    if (username === 'nacho' && password==='Nerd1979') {
        return 'Welcome '+ username+' nice to see you again';
      } else if (username === 'pedro' && password==='Batman0217') {
        return 'Welcome '+ username+' nice to see you again';
      } else if (username === 'marta' && password==='Mother2312') {
        return 'Welcome '+ username+' nice to see you again';
      }else{
          return 'Please input valid credentials';
      }
    
 
}

    
console.log(validateUser('mike','Nerd1979'));