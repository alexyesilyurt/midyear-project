// https://stackoverflow.com/questions/32772708/how-to-create-a-specific-xx-size-table-battleship-game-html-css-js

var createTable = function(rows, cols) {
    var YArray = new Array(), 
        XArray, 
            container = $(".table");
    for (var i = 0; i < cols; i++) {
        XArray = new Array();
        for (var j = 0; j < rows; j++) {
            XArray[j] = '<div class="cell">&nbsp;</div>';
        }
        YArray[i] = '<div class="row">' + XArray.join("\r\n") + '</div>';
    }
    container.append(YArray.join("\r\n"));
};

createTable(10, 10);