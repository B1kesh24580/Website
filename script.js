document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully!");

    // Example: Add an event listener to navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            console.log(`Hovered over: ${this.textContent}`);
        });
    });
});
