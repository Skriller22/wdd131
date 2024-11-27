// Code to filter temples based on the button pushed
const filterButtons = document.querySelectorAll('.filter-button');
const templeGrid = document.getElementById('temple-grid');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.id;
        const filteredTemples = temples.filter((temple) => {
            if (filter === 'home') return true;
            if (filter === 'old') return temple.dedicated.split(', ')[0] < 1900;
            if (filter === 'new') return temple.dedicated.split(', ')[0] >= 2000;
            if (filter === 'large') return temple.area > 90000;
            if (filter === 'small') return temple.area <= 10000;
        });

        templeGrid.innerHTML = '';
        filteredTemples.forEach((temple) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card-content">
                    <h2>${temple.templeName}</h2>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Size: ${temple.area} square feet</p>
                </div>
                <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading="lazy">
            `;
            templeGrid.appendChild(card);
        });
    });
});