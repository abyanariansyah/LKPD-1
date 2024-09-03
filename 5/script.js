document.getElementById("alertButton").addEventListener("click", function() {
    var countdownElement = document.getElementById("countdown");
    var alertBox = document.getElementById("alertBox");
    var countdown = 5;

    alertBox.classList.add("show");
    countdownElement.textContent = countdown;

    var countdownInterval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            alertBox.classList.remove("show");
        }
    }, 1000);
});