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
                space[i].addEventListener("click", handleXClick);
            }
        }
        else{
            for (let i = 0; i < space.length; i++) {
                space[i].addEventListener("click", handlePClick);
            }
        }
    }
    
    const handleXClick = (event) => {
        gameboard.addX(event.target.getAttribute('id'));
        updateBoard();
        gameController.nextTurn();
    }
    
    const handlePClick = (event) => {
        gameboard.addP(event.target.getAttribute('id'));
        updateBoard();
        gameController.nextTurn();
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
    
    const pvpGame = () => {
        gameboard.newBoardState();
        gameboard.updateBoard();
        let status = 0;
        playerTurn = 0;
        gameboard.setButtons();
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


    return{
        pvpGame,
        nextTurn
    }
})();



const start = document.querySelector(".start");
start.addEventListener("click", gameController.pvpGame);

gameboard.setButtons()
gameboard.newBoardState()
gameboard.addP(4)
gameboard.updateBoard()
console.log(playerTurn)