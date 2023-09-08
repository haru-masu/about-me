/* document.addEventListener("DOMContentLoaded", function () {
    const detailsButtons = document.querySelectorAll(".details-button");
    const favoriteButtons = document.querySelectorAll(".favorite-button");

    detailsButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const details = this.nextElementSibling;
            toggleDetails(details);
        });
    });

    favoriteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            toggleFavorite(this);
        });
    });

    function toggleDetails(details) {
        const isHidden = details.classList.contains("hidden");
        if (isHidden) {
            details.style.maxHeight = details.scrollHeight + "px";
        } else {
            details.style.maxHeight = null;
        }
        details.classList.toggle("hidden");
    }

    function toggleFavorite(button) {
        button.classList.toggle("favorited");
    }
});
