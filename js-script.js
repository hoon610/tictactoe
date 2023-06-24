var boardState = []
const gameboard = (() =>{
    const newBoardState = () => {boardState = [0,0,0,0,0,0,0,0,0]};
    const addX = (position) => {
        if(boardState[position] === 0){
            boardState[position] += 1;
        }
    };
    const addP = (position) => {
        if(boardState[position] === 0){
            boardState[position] -= 1;
        }
    };
    
    

    return {
        newBoardState,
        addP,
        addX
    }

})();

gameboard.newBoardState()
gameboard.addX(4)
console.log(boardState)