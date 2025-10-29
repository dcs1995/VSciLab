// js/script.js

console.log("VSciLab Portfolio script loaded successfully!");

// 1. Theme Toggler Functionality
const toggleButton = document.getElementById('mode-toggle');
const currentTheme = localStorage.getItem('theme');

// A. Check for saved preference on load
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        toggleButton.textContent = 'Toggle Dark Mode';
    }
}

// B. Function to handle the actual switching
function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');

    // Update the button text
    toggleButton.textContent = isLight ? 'Toggle Dark Mode' : 'Toggle Light Mode';

    // Save the preference to local storage
    if (isLight) {
        localStorage.setItem('theme', 'light-mode');
    } else {
        localStorage.setItem('theme', 'dark-mode');
    }
}

// C. Attach the event listener
if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
}


// 2. Smooth Scroll for Navigation Links (Existing functionality)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});