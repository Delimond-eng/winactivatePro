function getSlugFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("slug");
}

function renderServiceDetail(service) {
  // Hero
  document.getElementById("service-icon").className = service.icon;
  document.getElementById("service-title").textContent = service.title;
  document.getElementById("service-subtitle").textContent = service.subtitle;

  // Sidebar
  document.getElementById("service-duration").textContent = service.duration;
  document.getElementById("service-warranty").textContent = service.warranty;

  // Description sections
  document.getElementById("service-overview").textContent =
    service.overview || "";

  const ulIncluded = document.getElementById("service-included");
  ulIncluded.innerHTML = (service.included || [])
    .map((item) => `<li>${item}</li>`)
    .join("");

  const olProcess = document.getElementById("service-process");
  olProcess.innerHTML = (service.process || [])
    .map((step) => `<li>${step}</li>`)
    .join("");

  const ulRequirements = document.getElementById("service-requirements");
  ulRequirements.innerHTML = (service.requirements || [])
    .map((req) => `<li>${req}</li>`)
    .join("");

  // Features
  /* const featureGrid = document.querySelector(".features-grid");
  featureGrid.innerHTML = (service.features || [])
    .map(
      (f) => `
      <div class="feature-item">
        <i class="${f.icon}"></i>
        <div>
          <h4>${f.title}</h4>
          <p>${f.desc}</p>
        </div>
      </div>
    `
    )
    .join(""); */
}

async function getDetails(lang) {
  const slug = getSlugFromURL();

  try {
    const res = await fetch(`/data/${lang}.json`);
    if (!res.ok) throw new Error("Erreur lors du chargement des données");

    const servicesDataset = await res.json();
    const service = servicesDataset.find((s) => s.slug === slug);

    if (!service) {
      alert("Service introuvable.");
      return;
    }

    localStorage.setItem("selectedLanguage", lang);
    renderServiceDetail(service);
  } catch (error) {
    console.error("Erreur:", error);
    alert("Une erreur est survenue lors du chargement du service.");
  }
}

async function loadServiceOptions(lang) {
  try {
    const res = await fetch(`/data/${lang}.json`);
    if (!res.ok) throw new Error("Erreur lors du chargement des services");

    const services = await res.json();
    const select = document.getElementById("service");

    const slug = getSlugFromURL(); // récupère le slug depuis l'URL

    services.forEach((s) => {
      const option = document.createElement("option");
      option.value = s.slug;
      option.textContent = s.title;
      // Si le slug correspond, on marque l'option comme sélectionnée
      if (s.slug === slug) {
        option.selected = true;
      }

      select.appendChild(option);
    });
  } catch (err) {
    console.error("Erreur chargement services:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("selectedLanguage") || "fr";
  getDetails(lang);
  loadServiceOptions(lang);

  const langSelect = document.getElementById("languageSelect");
  if (langSelect) {
    langSelect.value = lang;
    langSelect.addEventListener("change", (e) => {
      const newLang = e.target.value;
      getDetails(newLang);
      loadServiceOptions(newLang);
    });
  }
});
