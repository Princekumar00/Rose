const petals = document.querySelectorAll('.petal-layer');

function animatePetals() {
    petals.forEach((petal, index) => {
        const angle = index * 45; 
        petal.style.transform = `rotate(${angle}deg)`;
    });
}

animatePetals();