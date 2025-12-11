
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formMsg").textContent = 
        "Hvala! Vaš upit je uspješno poslan.";

    this.reset();
});