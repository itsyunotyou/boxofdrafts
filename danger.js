// Function to check if all popups are closed
function checkAllPopupsClosed() {
    var popups = document.querySelectorAll("[class^='popup']");
    console.log(popups);
    var closedPopupCount = popups.length; // Initialize the counter with the total number of popups

    // Event listener for closing popups
    popups.forEach(function(popup) {
        var closeButton = popup.querySelector("button");
        closeButton.addEventListener("click", function() {
            popup.style.display = "none"; // Close the popup
            closedPopupCount--; // Decrement the counter
            console.log("Closed popups count:", closedPopupCount); // Log the closed popup count
            if (closedPopupCount === 0) {
                // Redirect to 'year.html' when all popups are closed
                window.location.href = "stanzathree.html";
            }
        });
    });
}

// Function to stagger the display of popups
function staggerPopupDisplay() {
    var popups = document.querySelectorAll("[class^='popup']");
    popups.forEach(function(popup, index) {
        setTimeout(function() {
            popup.style.display = "block";
        }, index * 500); // Adjust the delay as needed
    });
}

// Call the functions when the window is loaded
window.addEventListener("load", function() {
    staggerPopupDisplay();
    checkAllPopupsClosed();
});