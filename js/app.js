/*------------------------ Cached Element References ------------------------*/
const messageElement = document.querySelector('#message')
const squareElement = document.querySelectorAll('.sqr')
const resetBtnElement = document.querySelector('#reset')

console.log(messageElement)
console.log(squareElement)
console.log(resetBtnElement)

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', ''
            , '', '', ''
            , '', '', '']//9 epmty board state

let turn = 'X'   //who's turn X or O
let winner = false //who won
// let tie = true    //game tied


/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0,1,2], //0
    [3,4,5], //1
    [6,7,8], //2

    [0,3,6], //3
    [1,4,7], //4 
    [2,5,8], //5

    [0,4,8], //6
    [2,4,6]  //7
]



/*-------------------------------- Functions --------------------------------*/

function init() {
    console.log('function test')
    board = ['', '', ''
            , '', '', ''
            , '', '', '']

    turn = 'X'
    tie = false
    winner = false
    
    render()
}

init()

function render() {
updateBoard()
updateMessage()
}



function updateBoard() {

    for(let i = 0; i<board.length; i++){
        squareElement[i].textContent = board[i]
    }

    

  

   
}
// console.log(squareElement.textContent='X')

// updateBoard()
function updateMessage() {
    if (winner === false && tie === false) {
        messageElement.textContent = turn +' Turn'
    }
    else if(winner === false && tie === true){
        messageElement.textContent = 'It is a tie'
    }
    // messageElement.textContent = turn + " turn"
    if(winner === true){
        messageElement.textContent = turn + ' Wins!'
    }
}
// updateMessage()

function handleClick(event){
    // console.log('square is clicked')
    const squareIndex = parseInt(event.target.id);
        if(board[squareIndex] !== ''){return}

    
    placePiece(squareIndex)

    checkForWinner()

    checkForTie()

    switchPlayerTurn()

    console.log('TIE: ', tie)
    render()
    // console.log(winner)
}

function placePiece(index){
    board[index] = turn
    // console.log(board[index])
}



// const winningCombos = [
//     [0,1,2], //0
//     [3,4,5], //1
//     [6,7,8], //2

//     [0,3,6], //3
//     [1,4,7], //4 
//     [2,5,8], //5

//     [0,4,8], //6
//     [2,4,6]  //7
// ]

//indexOf(): shows the index of the value in array, returns -1 if value dont exist
// console.log(myStudents.indexOf('Ahmed'))

function checkForWinner(){
    for(let i=0;i<winningCombos.length;i++){
        // console.log(winningCombos[i][0])
        // console.log(winningCombos[i][1])
        // console.log(winningCombos[i][2])

    const row1 = winningCombos[i][0]
    const row2 = winningCombos[i][1]
    const row3 = winningCombos[i][2]

    const sqr1 = board[row1]
    const sqr2 = board[row2]
    const sqr3 = board[row3]

    if(sqr1 !== '' && sqr1 === sqr2 && sqr1 === sqr3){
        winner = true
        return
    }
}
}

function checkForTie(){
    if(winner){
        return
    }

    let isTied = true
    for(let cell of board){
        if(cell === ''){
            isTied = false
        }
    }
    if(!isTied){
        tie = false
    }
    else{
    console.log('Tie')

        tie = true
    }

    // console.log(tie)
}

function switchPlayerTurn() {
    
    if (winner) {
        return;
    }
    
   
    if (turn === 'X') {
        turn = 'O';
    } else if (turn === 'O') {
        turn = 'X';
    }

    // 3. Testing log to verify it works
    console.log(turn);
}

// console.log(turn)

// checkForTie()
// checkForWinner()

/*----------------------------- Event Listeners -----------------------------*/


for(let oneSquare of squareElement){
    oneSquare.addEventListener('click',handleClick)
}

resetBtnElement.addEventListener('click',init)

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.