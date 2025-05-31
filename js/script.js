document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorDiv = document.getElementById('formError');

    // Check if any field is empty
    if (!name || !email || !message) {
        errorDiv.textContent = "Veuillez remplir tous les champs";
        return;
    }

    errorDiv.textContent = "";
    alert("Message envoyé !");
     e.target.submit(); // optional if you want to submit
});