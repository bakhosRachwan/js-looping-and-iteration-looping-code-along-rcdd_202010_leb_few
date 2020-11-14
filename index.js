// Code your solutions in this file
let s=0;
function writeCards(name,event){
  for(let i=0; i < name.length; i++){
  
     s=( `Thank you, ${name[i]}, for the wonderful ${event} gift!`) ;
  }
  return s;
}


function countDown(q){
  while (q>=0){
    console.log(q--)
  }
}
