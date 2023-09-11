document.addEventListener("DOMContentLoaded", function () {
    // Use Fetch API to load the file content
    fetch("text.txt")
        .then(response => response.text())
        .then( textstring => {
            // Display the text content in a <pre> element
            const outputDiv = document.getElementById("output");
            outputDiv.innerHTML = textstring;
        })
        .catch(error => {
            console.error("Error loading the file:", error);
        });
});