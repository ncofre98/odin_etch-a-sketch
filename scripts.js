//UI Elements
const grid = document.getElementById('grid');
const gridRange = document.getElementById('gridRange');
let squaresPerSide = gridRange.value;

// Starting size
updateGridSize(squaresPerSide);

function updateGridSize(squaresPerSide) {
    let gridBoxes;

    grid.style.setProperty('--squares-per-grid', squaresPerSide);
    grid.innerHTML = ('<div class="grid__box" style="opacity:0.1"></div>'.repeat(squaresPerSide ** 2));
    gridBoxes = document.querySelectorAll('.grid__box');
    setListenersForBoxes(gridBoxes);
}

// Integer between 0 and max(exclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor() {
    const rgb = `rgba(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)}`;
    return rgb;
}

// box (event) as last element to use it with .bind()
function updateBoxBGColor(box, color = '#000') {
    if (box.target.style.backgroundColor == '')
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
        box.addEventListener('mouseover', (event) => {
            if (parseInt(box.style.opacity) < 1)
                box.style.opacity = parseFloat(box.style.opacity) + 0.1;
            updateBoxBGColor(event, getRandomColor());
        });
    });    
}

