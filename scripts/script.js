
const gamesBoardContainer = document.querySelector('#gamesboard-container')
const optionContainer = document.querySelecto('.option-container')
const flipbutton = document.querySelector('#flipbutton')

let angle = 0
function flip () {
const optionShips = console.log(Array.from(optionContainer.children))
    angle= angle === 0 ? 90 : 0 
    optionShips.forEach(optionShip => optionShip.style.transform = 'rotate(${angle}deg)')
} 

// Creating Boards
const width = 10 

function createBoard(color, user){
    const gameBoardContainer = document.createElement('div')
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.style.backgroundColor = color
    gameBoardContainer.id = user

    for (let i =0; i<width*width; i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.id = i
        gamesBoardContainer.append(block)
    }

    gameBoardContainer.append(gameBoardContainer)


}

createBoard('yellow', 'player')
createBoard('pink', 'computer')


// Creating Ships 

class Ship {
    constructor(name, length) {
        this.name = name
        this.legnth = length
    }
}

const destroyer = new Ship('destroy', 2)
const submarine = new Ship('submarine', 3)
const cruiser = new Ship('cruiser', 3)
const battleship = new Ship('battleship', 4)
const carrier = new Ship('carrier', 5) 

const ships = [destroyer, submarine, cruiser, battleship, carrier]

function addShipPiece(ship){
    const allBoardBlocks = document.querySelector('#computer div')
    let randomBoolean = Math.random() <0.5
    let isHorizontal = randomBoolean
    let randomStartIndex= Math.floor(math.random() *  width * width)
    console.log(randomStartIndex)

    for (let i=0; i<ship.length; i++){
        if(isHorizontal){

        }
    }

}




addShipPiece()






// // https://stackoverflow.com/questions/32772708/how-to-create-a-specific-xx-size-table-battleship-game-html-css-js

// var createTable = function(rows, cols) {
//     var YArray = new Array(), 
//         XArray, 
//             container = $(".table");
//     for (var i = 0; i < cols; i++) {
//         XArray = new Array();
//         for (var j = 0; j < rows; j++) {
//             XArray[j] = '<div class="cell">&nbsp;</div>';
//         }
//         YArray[i] = '<div class="row">' + XArray.join("\r\n") + '</div>';
//     }
//     container.append(YArray.join("\r\n"));
// };

// createTable(10, 10);