const servicesDataset = JSON.parse(localStorage.getItem("servicesDataset"));

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

  // Overview
  const descEl = document.getElementById("service-description");
  descEl.innerHTML = `<p>${service.overview}</p>`;

  // Included
  const includedList = service.included
    .map((item) => `<li>${item}</li>`)
    .join("");
  descEl.innerHTML += `
    <h3>What's Included:</h3>
    <ul>${includedList}</ul>
  `;

  // Process
  const processList = service.process
    .map((step) => `<li>${step}</li>`)
    .join("");
  descEl.innerHTML += `
    <h3>Process:</h3>
    <ol>${processList}</ol>
  `;

  // Requirements
  const reqList = service.requirements.map((req) => `<li>${req}</li>`).join("");
  descEl.innerHTML += `
    <h3>Requirements:</h3>
    <ul>${reqList}</ul>
  `;

  // Features
  /* const featureGrid = document.querySelector(".features-grid");
  featureGrid.innerHTML = service.features
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

document.addEventListener("DOMContentLoaded", () => {
  const slug = getSlugFromURL();
  const service = servicesDataset.find((s) => s.slug === slug);
  console.log(service);

  if (!service) {
    alert("Service not found.");
    return;
  }
  renderServiceDetail(service);
});
