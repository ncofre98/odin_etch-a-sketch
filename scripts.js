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

// integer between 0 and max(exclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor(opacity = 1) {
    const rgba = `rgba(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)}, ${opacity})`;
    return rgba;
}

// box (event) as last element to use it with .bind()
function updateBoxBGColor(box, color = '#000') {
    box.target.style.backgroundColor = color;
}

gridRange.addEventListener('input', () => {
    if (gridRange.value != squaresPerSide) {
        squaresPerSide = gridRange.value;
        updateGridSize(squaresPerSide);
    }
})

function setListenersForBoxes(gridBoxes) {
    gridBoxes.forEach(box => {
        box.addEventListener('mouseover', (event) => updateBoxBGColor(event, getRandomColor()));
    });    
}

