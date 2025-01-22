//UI Elements
const grid = document.getElementById('grid');
const gridRange = document.getElementById('gridRange');
let squaresPerSide = 16;

grid.innerHTML = ('<div class="grid__box"></div>'.repeat(squaresPerSide ** 2));

function updateGridSize(squaresPerSide) {
    grid.style.setProperty('--squares-per-grid', squaresPerSide);
    grid.innerHTML = ('<div class="grid__box"></div>'.repeat(squaresPerSide ** 2));
}

gridRange.addEventListener('input', () => {
    if (gridRange.value != squaresPerSide) {
        squaresPerSide = gridRange.value;
        updateGridSize(squaresPerSide);
    }
})
