const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');

let currentActive = 1;

btnNext.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    updateProgress();
});

btnPrev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    updateProgress();
}
);

function updateProgress() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    
    const actives = document.querySelectorAll('.circle.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    btnPrev.disabled = currentActive === 1;
    btnNext.disabled = currentActive === circles.length;
}
