// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});

// Terminal text effect
document.querySelectorAll('.terminal-text').forEach(element => {
    // Preserve the original HTML structure
    const originalContent = element.innerHTML;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = originalContent;
    const text = tempDiv.textContent;
    element.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            const char = text.charAt(i);
            // Handle special characters
            if (char === '\n') {
                element.appendChild(document.createElement('br'));
            } else if (char === ' ') {
                const space = document.createElement('span');
                space.innerHTML = '&nbsp;';
                space.style.opacity = '0';
                element.appendChild(space);
                setTimeout(() => {
                    space.style.transition = 'opacity 0.1s';
                    space.style.opacity = '1';
                }, 50);
            } else {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.opacity = '0';
                element.appendChild(span);
                
                // Fade in the character
                setTimeout(() => {
                    span.style.transition = 'opacity 0.1s';
                    span.style.opacity = '1';
                }, 50);
            }
            
            i++;
            setTimeout(typeWriter, 25);
        }
    }
    
    // Start the animation when the element is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(element);
});

// Add hover effect to skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#00fff9';
    });
    
    item.addEventListener('mouseout', () => {
        item.style.color = '#fff';
    });
});

// Random glitch effect on cyber cards
setInterval(() => {
    const cards = document.querySelectorAll('.cyber-card');
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    randomCard.style.transform = 'scale(1.05)';
    setTimeout(() => {
        randomCard.style.transform = 'scale(1)';
    }, 200);
}, 3000);

// Add matrix rain effect
function createMatrixRain() {
    const footer = document.querySelector('.footer-matrix');
    const numberOfLines = 10;
    
    for (let i = 0; i < numberOfLines; i++) {
        const line = document.createElement('div');
        line.className = 'matrix-line';
        line.style.left = `${Math.random() * 100}%`;
        line.style.animationDelay = `${Math.random() * 2}s`;
        footer.appendChild(line);
    }
}

// Initialize matrix effect
document.addEventListener('DOMContentLoaded', () => {
    createMatrixRain();
}); 