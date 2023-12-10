
const gridContainer = document.getElementById('grid-container');

createGrid();

function createGrid(){
    for(let i = 0; i < 4; i++){
        let rowDiv = document.createElement('div');
        rowDiv.id = `row-div-${i}`;

        for(let j = 0; j < 4; j++){
            let newDiv = document.createElement('div');
            newDiv.id = `grid-div-${i}-${j}`;
            rowDiv.appendChild(newDiv);
        }
        gridContainer.appendChild(rowDiv);
    }
}