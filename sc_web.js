document.addEventListener('DOMContentLoaded', () => {
    const loadingBar = document.getElementById('loading-bar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Loading animation
    window.addEventListener('load', () => {
        const loadingScreen = document.getElementById('loading');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 3000);
    });

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Glitch text effect
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(element => {
        element.innerHTML = `
            <span class="glitch-text">${element.dataset.text}</span>
            <span class="glitch-text">${element.dataset.text}</span>
            <span class="glitch-text">${element.dataset.text}</span>
        `;
    });

    // Animated headings effect
    const animatedHeadings = document.querySelectorAll('.animated-heading');
    animatedHeadings.forEach(heading => {
        heading.innerHTML = heading.textContent.split('').map((char, index) => `
            <span style="animation-delay: ${index * 50}ms">${char}</span>
        `).join('');
    });

    // Project status indicator
    const projectStatuses = document.querySelectorAll('.status');
    projectStatuses.forEach(status => {
        const statusText = status.textContent.toLowerCase();
        if (statusText.includes('under development')) {
            status.classList.add('under-development');
        } else if (statusText.includes('completed')) {
            status.classList.add('completed');
        }
    });
});
