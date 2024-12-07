const products = [
    {
        id: "wc-2190",
        name: "Warp Core MK I",
        averagerating: 4.5
    },
    {
        id: "ph-7734",
        name: "Phaser MK II",
        averagerating: 4.0
    },
    {
        id: "sh-4567",
        name: "Shield Generator MK I",
        averagerating: 3.5
    },
    {
        id: "sh-4690",
        name: "Shield Generator MK II",
        averagerating: 4.0
    },
    {
        id: "lb-9876",
        name: "Landing Bay MK I",
        averagerating: 4.0
    },
    {
        id: "pb-3456",
        name: "Plasma Balista MK I",
        averagerating: 4.5
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.querySelector('select[name="product"]');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const reviewForm = document.querySelector('form');
    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let reviewCount = localStorage.getItem('reviewCount');
        reviewCount = reviewCount ? parseInt(reviewCount) : 0;
        reviewCount++;
        
        localStorage.setItem('reviewCount', reviewCount);
        
        alert(`You have submitted ${reviewCount} reviews.`);
        
        reviewForm.reset();
    });
});
