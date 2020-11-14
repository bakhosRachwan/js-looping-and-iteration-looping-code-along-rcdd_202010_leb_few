// Code your solutions in this file
const results = ['Lisa', 'Kaitlin', 'Jan'];
function writeCards(name,event){
  for(let i=0; i < name.length; i++){
  
     results.push=( `Thank you, ${name[i]}, for the wonderful ${event} gift!`) ;
  }
  return results;
}


function countDown(q){
  while (q>=0){
    console.log(q--)
  }
}
