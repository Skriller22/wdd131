document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F6', '#33FFF6']; // Define 6 colors

    // Create the 7x8 grid
    const grid = [];
    for (let row = 0; row < 7; row++) {
        const rowArray = [];
        for (let col = 0; col < 8; col++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridContainer.appendChild(gridItem);
            rowArray.push(gridItem);
        }
        grid.push(rowArray);
    }

    // Function to get a random color from the array
    function getRandomColor(excludeColors = []) {
        const availableColors = colors.filter(color => !excludeColors.includes(color));
        return availableColors[Math.floor(Math.random() * availableColors.length)];
    }

    // Function to get the colors of adjacent cells
    function getAdjacentColors(row, col) {
        const adjacentColors = [];
        if (row > 0) adjacentColors.push(grid[row - 1][col].style.backgroundColor); // Top
        if (col > 0) adjacentColors.push(grid[row][col - 1].style.backgroundColor); // Left
        if (row < 6) adjacentColors.push(grid[row + 1][col].style.backgroundColor); // Bottom
        if (col < 7) adjacentColors.push(grid[row][col + 1].style.backgroundColor); // Right
        return adjacentColors;
    }

    // Assign random colors to each grid item ensuring no two adjacent cells have the same color
    for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 8; col++) {
            const adjacentColors = getAdjacentColors(row, col);
            const color = getRandomColor(adjacentColors);
            grid[row][col].style.backgroundColor = color;
        }
    }

    let currentPlayer = 1;
    const turnIndicator = document.createElement('div');
    turnIndicator.classList.add('turn-indicator');
    turnIndicator.textContent = `Player ${currentPlayer}'s turn`;
    document.body.appendChild(turnIndicator);

    function switchPlayer() {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        turnIndicator.textContent = `Player ${currentPlayer}'s turn`;
        updateActiveBorders();
    }

    function updateActiveBorders() {
        grid.forEach(row => {
            row.forEach(cell => {
                cell.classList.remove('active-player1', 'active-player2');
                if (cell.classList.contains(`selected-player${currentPlayer}`)) {
                    cell.classList.add(`active-player${currentPlayer}`);
                }
            });
        });
    }

    function clearSelectionBorders() {
        grid.forEach(row => {
            row.forEach(cell => {
                cell.classList.remove('selected-player1', 'selected-player2');
            });
        });
    }

    const changeTurnButton = document.getElementById('change-turn-button');
    changeTurnButton.addEventListener('click', switchPlayer);

    let selectedColor = '#FF5733'; // Default color

    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(button => {
        button.addEventListener('click', () => {
            colorOptions.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedColor = button.style.backgroundColor;
        });
    });

    function changeCellColor(row, col) {
        const color = selectedColor;
        grid[row][col].style.backgroundColor = color;
        grid[row][col].classList.add(`player${currentPlayer}`);
        grid[row][col].classList.add(`selected-player${currentPlayer}`);
        updateActiveBorders();
    }

    gridContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('grid-item')) {
            const row = Array.from(gridContainer.children).indexOf(event.target) / 8 | 0;
            const col = Array.from(gridContainer.children).indexOf(event.target) % 8;
            changeCellColor(row, col);
            switchPlayer();
        }
    });
});