function checkSigma() {
    var name = document.getElementById("nameInput").value.trim(); // Trim to remove leading and trailing spaces
    if (name === "") {
        return; // Do nothing if the input field is empty
    }
    if (name.toLowerCase() === "selesai") {
        document.getElementById("result").innerText = "Terima kasih!";
        return;
    }
    else if (name.toLowerCase() === "tono") {
        document.getElementById("result").innerText = "Tono bukan sigma.";
        return;
    }

    var sigmaPercentage = Math.random() * 100;
    var message = name;
    if (sigmaPercentage < 50) {
        message += " tidak cukup sigma.";
    } else {
        message += " adalah sigma, Persentase nama sigma: " + sigmaPercentage.toFixed(2) + "%";
    }
    document.getElementById("result").innerText = message;
}
