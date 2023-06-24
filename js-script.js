var boardState = []
const space = document.getElementsByClassName("space");


const gameboard = (() =>{
    var playerTurn = 1;

    const newBoardState = () => {boardState = [0,0,0,0,0,0,0,0,0]};
    
    const setButtons = () => {
        if (playerTurn === 0){
            for (let i = 0; i < space.length; i++) {
                space[i].addEventListener("click", function (event) {
                    gameboard.addX(event.target.getAttribute('id'));
                    playerTurn = 1;
                    updateBoard();
                });
            }
        }
        else{
            for (let i = 0; i < space.length; i++) {
                space[i].addEventListener("click", function (event) {
                    gameboard.addP(event.target.getAttribute('id'));
                    playerTurn = 0;
                    updateBoard();
                });
            }
        }

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
            boardState[position] += 1;
    };
    const addP = (position) => {
            boardState[position] -= 1;
    };
    return {
        newBoardState,
        addP,
        addX,
        playerTurn,
        setButtons
    }
})();






gameboard.setButtons()
gameboard.newBoardState()
gameboard.addP(4)
console.log(boardState)