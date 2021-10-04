// Arrays 
let pronoun = ["the","our"]
let adj = ['great','big']
let noun = ['jogger','racoon']
let extension = ['.com','.url','.co']



  
  
  for(let i =0; i < pronoun.length; i++){
    for(let j =0; j < adj.length; j++){
      for(let l = 0; l < noun.length; l ++){
        for(let w=0; w < extension.length; w++){
        
        
      console.log(`www.${pronoun[i]}${adj[j]}${noun[l]}${extension[w]}`)
      }
    }
      
  }
  }