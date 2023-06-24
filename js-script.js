let playerTurn = 0;
let boardState = [];

const gameboard = (() =>{
    const space = document.getElementsByClassName("space");
    const newBoardState = () => {boardState = [0,0,0,0,0,0,0,0,0]};
    
    const setButtons = () => {
        for (let i = 0; i < space.length; i++) {
            space[i].removeEventListener("click", handleXClick);
            space[i].removeEventListener("click", handlePClick);
        }
    
        if (playerTurn === 0){
            for (let i = 0; i < space.length; i++) {
                if (boardState[i] !== 0) {}
                else{
                space[i].addEventListener("click", handleXClick);}
            }
        }
        else{
            for (let i = 0; i < space.length; i++) {
                if (boardState[i] !== 0) {}
                else{
                space[i].addEventListener("click", handlePClick);}
                
            }
        }
    }
    
    const handleXClick = (event) => {
        gameboard.addX(event.target.getAttribute('id'));
        updateBoard();
        gameController.checkGameState();        
    }
    
    const handlePClick = (event) => {
        gameboard.addP(event.target.getAttribute('id'));
        updateBoard();
        gameController.checkGameState();
    }

    const updateBoard = () => {
        for (let i = 0; i < space.length; i++) {
            if (boardState[i] === 0){
                space[i].textContent = " "
            }
            else if (boardState[i] === 1){
                space[i].textContent = "X"
            }
            else if (boardState[i] === -1) {
                space[i].textContent = "O"
            }
            
        }
    }



    const addX = (position) => {
            if (boardState[position] === 0){
                boardState[position] += 1;
                
            }
            

    };
    const addP = (position) => {
        if (boardState[position] === 0){
            boardState[position] -= 1;
            
        }
    };
    return {
        newBoardState,
        addP,
        addX,
        setButtons,
        updateBoard,
    }
})();


const gameController = (() =>{
    let counter
    const pvpGame = () => {
        gameboard.newBoardState();
        gameboard.updateBoard();
        let status = 0;
        playerTurn = 0;
        gameboard.setButtons();
        counter = 1;
    }
    const nextTurn = () => {
        
        if (playerTurn === 0){
            playerTurn = 1;
        }
        else {
            playerTurn = 0;
        }
        gameboard.setButtons();
    }
    const checkGameState = () => {
        counter += 1;
        if (
            (boardState[0]+boardState[1]+boardState[2] ===3||
            boardState[3]+boardState[4]+boardState[5] ===3||
            boardState[6]+boardState[7]+boardState[8] ===3||
            boardState[0]+boardState[3]+boardState[6] ===3||
            boardState[1]+boardState[4]+boardState[7] ===3||
            boardState[2]+boardState[5]+boardState[8] ===3||
            boardState[0]+boardState[4]+boardState[8] ===3||
            boardState[2]+boardState[4]+boardState[6] ===3)
        ){
            console.log("X wins");
        }

        else if (
            (boardState[0]+boardState[1]+boardState[2] ===-3||
                boardState[3]+boardState[4]+boardState[5] ===-3||
                boardState[6]+boardState[7]+boardState[8] ===-3||
                boardState[0]+boardState[3]+boardState[6] ===-3||
                boardState[1]+boardState[4]+boardState[7] ===-3||
                boardState[2]+boardState[5]+boardState[8] ===-3||
                boardState[0]+boardState[4]+boardState[8] ===-3||
                boardState[2]+boardState[4]+boardState[6] ===-3)
            === -3){
            console.log("O wins");
        }
        else if (counter === 10) {
            console.log("draw");
        }
        else { 
            gameController.nextTurn(); 
        }
    }


    return {
        pvpGame,
        nextTurn,
        checkGameState
    }
})();



const start = document.querySelector(".start");
start.addEventListener("click", gameController.pvpGame);

gameboard.setButtons()
gameboard.newBoardState()
gameboard.addP(4)
gameboard.updateBoard()
console.log(playerTurn)