
const gridContainer = document.getElementById('grid-container');
const resizeButton = document.getElementById('resize-button');


resizeButton.addEventListener('click', function (e) {
    promptForGridSize();
});

function promptForGridSize(){
    let x = prompt("What size would you like the grid to be?", "Please enter an integer between 1 and 100.");
    createGrid(x);

    if(!isNaN(x) && x >= 0 && x <= 100){
        createGrid(x);
    } else {
        promptForGridSize();
    }
    
}

createGrid(8);


function createGrid(gridDimension){
    //gridContainer.innerHTML('');
    removeAllChildNodes(gridContainer);

    for(let i = 0; i < gridDimension; i++){
        let rowDiv = document.createElement('div');
        rowDiv.id = `row-div-${i}`;
        rowDiv.classList.add('grid-row');

        for(let j = 0; j < gridDimension; j++){
            let newDiv = document.createElement('div');
            let divText = document.createElement('div');

            newDiv.id = `${i}-${j}`;
            newDiv.classList.add('fade-in-grid-square');
            newDiv.classList.add('grid-square');
            divText.textContent = `${newDiv.id}`;

            newDiv.addEventListener('mouseover', function (e) {
                this.classList.toggle('fade-in-grid-square-highlighted');
            });

            newDiv.appendChild(divText);
            rowDiv.appendChild(newDiv);
        }
        gridContainer.appendChild(rowDiv);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}