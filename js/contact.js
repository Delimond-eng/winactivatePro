document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      // Toast d'information immédiat
      setTimeout(
        () => Toast.info("Envoi du message...", "Demande en cours."),
        0
      );
      try {
        const response = await fetch("back/contact.php", {
          method: "POST",
          body: formData,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        });

        const result = await response.json();

        if (result.status) {
          setTimeout(() => Toast.success(result.message, "Succès"), 200);
          form.reset();
        } else {
          setTimeout(() => Toast.warning(result.message, "Erreur"), 200);
        }
      } catch (error) {
        console.error(error);
        setTimeout(
          () =>
            Toast.error("Erreur réseau. Vérifiez votre connexion.", "Échec"),
          200
        );
      }
    });
});
