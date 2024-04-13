const paragraph = document.getElementById('wordDisplay');
const words = paragraph.textContent.split(' ');
let currentIndex = 0;

function revealNextWord() {
    if (currentIndex < words.length) {
        if (currentIndex === words.length - 1) {
            paragraph.textContent = words.slice(0, currentIndex + 1).join(' ');
            currentIndex++;
            // Replace HTML content with window.location.href
            setTimeout(function() {
                window.location.href = "end.html"; // Replace "https://example.com" with the URL you want to redirect to
            }, 1000); // Adjust the delay time (in milliseconds) as needed
        } else {
            // Update text content for the next word
            paragraph.textContent = words.slice(0, currentIndex + 1).join(' ');
            currentIndex++;
        }
        paragraph.style.display = 'block'; // Show the paragraph after the first click
    } 
}

document.addEventListener('click', revealNextWord);