const gameState = {
    players: ['1', '2'],
    board: [
      [1,2,3],
      [4,5,6],
      [7,8,9],
    ]
  }

const winningCombos = [
    [1,2,3],
    [4,5,6], //horizontal wins
    [7,8,9],
    
    [1,4,7],
    [2,5,8], //vert wins
    [3,6,9],
    
    [1,5,9], //diag wins
    [3,5,7],   
    
]
let player = 'playerOne'

console.log(winningCombos);

const boxes = document.querySelectorAll('cell');

boxes.forEach(square =>  {
boxes.addEventListener('click', clickOutcome);

}
    )

 function clickOutcome(e){
     const boxArray = Array.from(boxes);
     const index = squareArray.indexOf(e.target)
 }   
 
 if(player === 'playerOne') {
    
 }
