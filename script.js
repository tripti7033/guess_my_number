'use strict';


let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

// const displayMessage= function(message){
    //     document.querySelector('.message').textContent=message;
    // }
    // let guess=document.querySelector('.guess').value;
    document.querySelector('.check').addEventListener('click',function(){
        const guess= Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        
        if (! guess) {
            document.querySelector('.message').textContent = '⛔️ No number!';
        }
        else if(guess===secretNumber){ 
            document.querySelector('.message').textContent="🎉 You win !"
            document.querySelector('.number').textContent=secretNumber;

            document.querySelector('body').style.backgroundColor='#60b347'
            document.querySelector('.number').style.width = '30rem';
    
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
              }
        }
        else if(guess !== secretNumber){
            document.querySelector('.message').textContent=guess>secretNumber?'📈 Too High !':'📉 Too Low !';
            if(score>1){
          score--;
          document.querySelector('.score').textContent=score;
          }else{
              document.querySelector('.message').textContent="💥 You lost the game"
              document.querySelector('.score').textContent=0
          } 
        }
// else if(guess>secretNumber){
//     document.querySelector('.message').textContent="📈 Too High !"
//       if(score>1){
//     score--;
//     document.querySelector('.score').textContent=score;
//     }else{
//         document.querySelector('.message').textContent="💥 You lost the game"
//         document.querySelector('.score').textContent=0
//     } 
// }
// else if(guess<secretNumber){
//     document.querySelector('.message').textContent="📉 Too Low !"
//     if(score>1){
//     score--;
//     document.querySelector('.score').textContent=score;
//     }else{
//         document.querySelector('.message').textContent="💥 You lost the game"
//         document.querySelector('.score').textContent=0
//     }
// }
})
 document.querySelector('.again').addEventListener('click', function(){
    score=20;
    // highscore=0
    secretNumber=Math.trunc(Math.random()*20)+1;
    // const guess= Number(document.querySelector('.guess').value);
    document.querySelector('.message').textContent = ' Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
 })




