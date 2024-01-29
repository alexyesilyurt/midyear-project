
const optionContainer = document.querySelecto('.option-container')
const flipbutton = document.querySelector('#flipbutton')

let angle = 0
function flip () {
const optionShips = console.log(Array.from(optionContainer.children))
    if(angle === 0){
        angle = 90
    } else {
        angle = 0
    }
    optionShips.forEach(optionShip => optionShip.style.transform = 'rotate(${angle}deg)')
} 

flipbutton.addEventListener('click', flip)






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