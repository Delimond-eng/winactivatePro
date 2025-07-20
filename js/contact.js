document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    // Affiche un toast d'information immédiat
    Toast.info("Envoi du message...", "Demande en cours.");

    const savedLanguage = localStorage.getItem("selectedLanguage") || "fr";

    if (savedLanguage === "fr") {
      submitButton.textContent = "Envoi...";
    }
    if (savedLanguage === "en") {
      submitButton.textContent = "Sending...";
    }
    if (savedLanguage === "nl") {
      submitButton.textContent = "Verzenden...";
    }
    submitButton.disabled = true;

    try {
      const formData = new FormData(e.target);
      const response = await fetch("http://localhost:8000/back/contact.php", {
        method: "POST",
        body: formData,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          accept: "Application/json",
        },
      });
      const result = await response.json();

      if (result.status) {
        Toast.success(result.message, "Succès");
        form.reset(); // Réinitialise le formulaire
      } else {
        Toast.warning(result.message || "Une erreur est survenue.", "Erreur");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      Toast.error("Erreur réseau. Vérifiez votre connexion.", "Échec");
    } finally {
      // Réactive toujours le bouton, même en cas d'erreur
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  });
});
