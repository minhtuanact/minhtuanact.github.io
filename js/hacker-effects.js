/**
 * Cybersecurity/Hacker Theme JavaScript Effects
 * For Hugo Blog with PaperMod theme
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add scroll progress indicator
    initScrollProgress();

    // Add loading animation for images
    initImageLoadEffects();

    // Enhance code blocks to look like terminals
    enhanceCodeBlocks();
});

/**
 * Initialize scroll progress indicator
 * Updates the CSS variable that controls the width of the progress bar
 */
function initScrollProgress() {
    // Update progress bar width as page scrolls
    document.addEventListener('scroll', function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const width = (scrollTop / height) * 100;
        document.documentElement.style.setProperty('--scroll-width', width + '%');
    });

    // Initialize it on page load
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const width = (scrollTop / height) * 100;
    document.documentElement.style.setProperty('--scroll-width', width + '%');
}

/**
 * Initialize image loading effects
 * Adds "loaded" attribute to images when they finish loading
 */
function initImageLoadEffects() {
    const images = document.querySelectorAll('.post-content img');

    images.forEach(img => {
        // If image is already loaded (from cache)
        if (img.complete) {
            img.setAttribute('loaded', '');
        } else {
            // When image loads
            img.addEventListener('load', function () {
                this.setAttribute('loaded', '');
            });
        }
    });
}

/**
 * Add terminal-like "typing" effect to code blocks
 * This gives a more "hacker" feel to code examples
 */
function enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(block => {
        // Add a class for styling
        block.parentElement.classList.add('enhanced-terminal');

        // Add fake terminal header
        const terminal = document.createElement('div');
        terminal.className = 'terminal-header';
        terminal.innerHTML = '<span class="terminal-button"></span><span class="terminal-button"></span><span class="terminal-button"></span>';

        // Insert the terminal header before the code block
        block.parentElement.insertBefore(terminal, block);
    });
}