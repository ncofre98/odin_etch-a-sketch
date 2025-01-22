//UI Elements
const grid = document.getElementById('grid');
const gridRange = document.getElementById('gridRange');
let squaresPerSide = gridRange.value;

// Starting size
updateGridSize(squaresPerSide);

function updateGridSize(squaresPerSide) {
    let gridBoxes;

    grid.style.setProperty('--squares-per-grid', squaresPerSide);
    grid.innerHTML = ('<div class="grid__box"></div>'.repeat(squaresPerSide ** 2));
    gridBoxes = document.querySelectorAll('.grid__box');
    setListenersForBoxes(gridBoxes);
}

function updateBoxBGColor(box) {
    box.target.style.backgroundColor = '#000';
}

gridRange.addEventListener('input', () => {
    if (gridRange.value != squaresPerSide) {
        squaresPerSide = gridRange.value;
        updateGridSize(squaresPerSide);
    }
})

function setListenersForBoxes(gridBoxes) {
    gridBoxes.forEach(box => {
        box.addEventListener('mouseover', updateBoxBGColor);
    });    
}

