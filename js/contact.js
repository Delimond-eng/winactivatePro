document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("../back/contact.php", {
        method: "POST",
        body: formData,
      });

      const text = await res.text(); // ou res.json() si tu renvoies un JSON depuis PHP
      alert(text);
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      alert("Une erreur est survenue lors de l'envoi du message.");
    }
  });
