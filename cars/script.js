// Example JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    // Add a click event handler to the navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Prevent the default behavior of links
            event.preventDefault();
            // Scroll to the target section when a link is clicked
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});