document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        setTimeout(function () {
            form.reset();
            successMessage.classList.remove("hidden");
            setTimeout(function () {
                successMessage.classList.add("hidden");
            }, 5000);
        }, 1000);
    });
});
