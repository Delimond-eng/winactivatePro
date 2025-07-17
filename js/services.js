const servicesDataset = [
  {
    title: "Activation Windows 10/11",
    subtitle:
      "Activation Windows authentique avec validité à vie et support Microsoft complet",
    icon: "fab fa-windows",
    slug: "activation-windows-10-11",
    hash: "9f7d5089a7a2c5f5e2fa1c942ccce3a6",
    dataTranslateKey: "services.windows.title",
    duration: "15-30 minutes",
    warranty: "Lifetime",
    overview:
      "Our Windows 10/11 activation service provides you with genuine, lifetime activation for your Windows operating system. We use only legitimate Microsoft licenses to ensure your system remains fully functional and receives all security updates.",
    included: [
      "Genuine Windows 10/11 Pro activation",
      "Lifetime validity - no expiration",
      "Full Microsoft support eligibility",
      "All Windows updates and features",
      "Remote activation service",
      "24/7 technical support",
    ],
    process: [
      "Contact us via WhatsApp, phone, or form",
      "We'll schedule a remote session",
      "Our technician activates your Windows",
      "Verification and testing",
      "Ongoing support provided",
    ],
    requirements: [
      "Windows 10 or 11 installed on your PC",
      "Stable internet connection",
      "Remote access software (we'll guide you)",
    ],
    features: [
      "100% genuine license",
      "Fast remote setup",
      "Works for all languages",
      "Safe and secure",
    ],
  },
  {
    title: "Office 365/2016/2019/2021 Activation",
    icon: "fas fa-file-alt",
    subtitle:
      "Activation complète de la suite Microsoft Office avec toutes les fonctionnalités débloquées",
    slug: "activation-office-365-2016-2019-2021",
    hash: "7ec59a41921f6178f6db9b5e74c8b9c0",
    dataTranslateKey: "services.office.title",
    duration: "20-40 minutes",
    warranty: "1 year",
    overview:
      "We provide fast and reliable installation of Microsoft Office suites, including Office 2019, 2021, or Microsoft 365. Ideal for students, professionals, and businesses.",
    included: [
      "Installation of Office software",
      "Account setup (if needed)",
      "Activation with genuine license",
      "Remote assistance",
      "Basic usage guidance",
    ],
    process: [
      "We collect your preferences",
      "Prepare and download the right package",
      "Remote session to install and activate",
      "Verification of functionality",
    ],
    requirements: [
      "Windows or macOS compatible system",
      "Internet connection",
      "Remote desktop access",
    ],
    features: [
      "Supports multiple devices",
      "Professional installation",
      "Includes Outlook, Word, Excel, etc.",
      "Post-installation support",
    ],
  },
  {
    title: "Full System Reinstallation",
    icon: "fas fa-redo-alt",
    slug: "full-system-reinstallation",
    hash: "59dd28f06b3849c1f3f3b8d3e1bdb76b",
    dataTranslateKey: "services.reinstall.title",
    subtitle:
      "Installation Windows propre avec tous les pilotes et logiciels essentiels",
    duration: "2 hours",
    warranty: "15 days",
    overview:
      "Complete system wipe and reinstall with updated drivers and essential software.",
    included: [
      "Data backup (if requested)",
      "Latest Windows OS installation",
      "Driver installation",
      "Essential software (browser, PDF, Office tools, etc.)",
    ],
    process: [
      "Consultation and data evaluation",
      "System wipe",
      "Operating system installation",
      "Driver and software setup",
    ],
    requirements: [
      "Stable power source",
      "Installation key or license (if available)",
    ],
  },
  {
    title: "System Repair",
    icon: "fas fa-tools",
    slug: "system-repair",
    hash: "cdbb93088e2d626c15e656add3e2480c",
    dataTranslateKey: "services.repair.title",
    subtitle:
      "Correction des erreurs Windows, plantages et problèmes de performance",
    duration: "1-3 hours",
    warranty: "7 days",
    overview:
      "Diagnose and repair common system issues like crashes, boot loops, and slowdowns.",
    included: [
      "System diagnostics",
      "Fix registry errors",
      "Driver repairs",
      "Startup optimization",
    ],
    process: [
      "Initial diagnostics",
      "Error resolution",
      "Verification and testing",
    ],
    requirements: ["Device password (if needed)", "Charger or power adapter"],
  },
  {
    title: "PC Optimization",
    icon: "fas fa-tachometer-alt",
    slug: "pc-optimization",
    hash: "58d4e918b770a68b84cf8c80553572a1",
    dataTranslateKey: "services.optimization.title",
    subtitle:
      "Accélérez votre ordinateur et améliorez les performances globales",
    duration: "1 hour",
    warranty: "7 days",
    overview:
      "Improve speed, responsiveness, and stability of your PC with deep cleaning and tune-up.",
    included: [
      "Startup cleanup",
      "Unwanted software removal",
      "Registry and disk cleanup",
      "Performance tweaks",
    ],
    process: [
      "System assessment",
      "Cleanup and tune-up",
      "Performance testing",
    ],
    requirements: ["Administrator access"],
  },
  {
    title: "Virus Removal",
    icon: "fas fa-shield-virus",
    slug: "virus-removal",
    hash: "90ab03db1a4f9f9d222abc2a4152bcfa",
    dataTranslateKey: "services.virus.title",
    subtitle:
      "Suppression complète des malwares et amélioration de la sécurité système",
    duration: "30-60 minutes",
    warranty: "7 days",
    overview:
      "Ensure all drivers are up to date and install requested software packages.",
    included: [
      "Driver update",
      "Software setup (Office, browsers, antivirus, etc.)",
    ],
    process: [
      "Check system compatibility",
      "Download and install",
      "Configuration and testing",
    ],
    requirements: ["Internet connection", "Software keys if needed"],
  },
  {
    title: "Data Backup & Recovery",
    icon: "fas fa-database",
    slug: "data-backup-recovery",
    hash: "2f37f08d12cb00b23926dcf2ccac0075",
    dataTranslateKey: "services.data.title",
    duration: "Varies (30 mins to 4 hrs)",
    subtitle: "Sauvegarde sécurisée et services de récupération professionnels",
    warranty: "N/A",
    overview:
      "Recover accidentally deleted or lost data and perform safe backups.",
    included: [
      "Backup to external drive or cloud",
      "Recovery from corrupted drives",
      "File system repair (if needed)",
    ],
    process: [
      "Assessment of data situation",
      "Attempt recovery",
      "Secure backup",
    ],
    requirements: [
      "Storage media (USB, external drive)",
      "User consent for access",
    ],
  },
  {
    title: "Driver & Software Installation",
    icon: "fas fa-download",
    slug: "driver-software-installation",
    hash: "3f083c0c4a4bdf50bba79bc54e37dd7c",
    dataTranslateKey: "services.drivers.title",
    subtitle: "Installation des derniers pilotes et logiciels essentiels",
    duration: "30-60 minutes",
    warranty: "7 days",
    overview:
      "Ensure all drivers are up to date and install requested software packages.",
    included: [
      "Driver update",
      "Software setup (Office, browsers, antivirus, etc.)",
    ],
    process: [
      "Check system compatibility",
      "Download and install",
      "Configuration and testing",
    ],
    requirements: ["Internet connection", "Software keys if needed"],
  },
  {
    title: "Remote Assistance",
    icon: "fas fa-headset",
    slug: "remote-assistance",
    hash: "83c87bfc8ab9d539efed3cf5a649e991",
    dataTranslateKey: "services.remote.title",
    subtitle:
      "Support à distance professionnel pour résolution immédiate des problèmes",
    duration: "30 mins - 1 hr",
    warranty: "7 days",
    overview: "Fast support over the internet using AnyDesk or TeamViewer.",
    included: ["Issue diagnosis", "Live assistance", "Screen sharing & fix"],
    process: ["Client contact", "Connection setup", "Resolution"],
    requirements: ["Internet connection", "Anydesk or TeamViewer ID"],
  },
  {
    title: "Microsoft Account Setup",
    icon: "fas fa-user-cog",
    slug: "microsoft-account-setup",
    hash: "b4adf65ef1236c579c2fd4c87ac1c923",
    dataTranslateKey: "services.account.title",
    subtitle: "Configuration complète du compte Microsoft et synchronisation",
    duration: "30 minutes",
    warranty: "N/A",
    overview:
      "Assistance in creating, configuring, or recovering a Microsoft account.",
    included: ["Account creation", "Security setup", "Password recovery"],
    process: ["User identity check", "Step-by-step assistance"],
    requirements: [
      "Email or phone access",
      "Personal details for verification",
    ],
  },
  {
    title: "Secure ISO Download",
    icon: "fas fa-compact-disc",
    slug: "secure-iso-download",
    hash: "d3d4b9c49de0d3a7134f03c7253909a7",
    dataTranslateKey: "services.iso.title",
    subtitle:
      "Fichiers ISO officiels Windows et Office depuis les serveurs Microsoft",
    duration: "Instant",
    warranty: "N/A",
    overview:
      "We provide trusted and secure download links for official ISO files.",
    included: ["Windows ISO", "Office ISO", "Activation guide (optional)"],
    process: ["Request verification", "Secure link sent to client"],
    requirements: ["Storage space", "Email or messaging app for delivery"],
  },
  {
    title: "Antivirus Setup",
    icon: "fas fa-shield-alt",
    slug: "antivirus-setup",
    hash: "1fc7e8bd97f5c6fd706ee03e3e4dbb44",
    dataTranslateKey: "services.antivirus.title",
    subtitle: "Installation et configuration professionnelle d'antivirus",
    duration: "10-20 minutes",
    warranty: "6 months",
    overview:
      "Our antivirus setup service ensures your computer is protected against malware, spyware, and viruses using leading security software.",
    included: [
      "Installation of antivirus software",
      "Configuration of real-time protection",
      "Initial scan and threat removal",
      "Updates scheduling",
      "Support in case of alerts",
    ],
    process: [
      "Choose antivirus brand",
      "Remote installation",
      "Setup preferences",
      "Initial system scan",
    ],
    requirements: [
      "Compatible operating system",
      "Admin privileges",
      "Internet connection",
    ],
    features: [
      "Trusted security brands",
      "Zero configuration hassle",
      "24/7 threat monitoring",
      "Peace of mind guaranteed",
    ],
  },
  {
    title: "Bulk Activation for Businesses",
    icon: "fas fa-building",
    slug: "bulk-activation-business",
    hash: "4b9d7982c1b0d5e296b0dc7a43e5a25e",
    dataTranslateKey: "services.bulk.title",
    subtitle: "Solutions d'activation de niveau entreprise pour organisations",
    duration: "Depends on number of devices",
    warranty: "30 days",
    overview:
      "Activate multiple PCs with licensed Windows/Office at once for businesses.",
    included: [
      "Activation service",
      "Installation help",
      "License verification",
    ],
    process: ["Assessment", "Batch activation", "Post-activation report"],
    requirements: ["Admin access", "List of device specifications"],
  },
  {
    title: "Vente & Installation de Jeux Vidéo",
    subtitle: "Buy and install your favorite PC games",
    icon: "fas fa-gamepad",
    slug: "vente-installation-jeux-video",
    hash: "6c52f507d2343e844cf7ab4c3ac8e17f",
    dataTranslateKey: "services.games.title",
    subtitle:
      "Large choix de jeux pour toutes plateformes, installation et configuration incluses.",
    duration: "Varies",
    warranty: "7 days",
    overview:
      "We offer a wide range of PC games with installation support and updates.",
    included: [
      "Game sale (Steam, offline installers, etc.)",
      "Installation",
      "Crack or license setup if needed",
    ],
    process: [
      "Game selection",
      "Purchase or activation",
      "Installation and test",
    ],
    requirements: [
      "Sufficient disk space",
      "Internet if online activation is required",
    ],
  },
];
document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour créer un slug hashé
  function generateSlugHash(input) {
    return Array.from(new TextEncoder().encode(input))
      .reduce((hash, byte) => (hash * 31 + byte) % 1e9, 0)
      .toString(16);
  }

  // Stocker dans localStorage (si besoin pour detail.html)
  localStorage.setItem(
    "servicesDataset",
    JSON.stringify(
      servicesDataset.map((service) => ({
        ...service,
        hash: generateSlugHash(service.dataTranslateKey),
      }))
    )
  );

  // Sélectionner le conteneur
  const container = document.querySelector(".services-grid");

  // Générer et injecter chaque carte
  servicesDataset.forEach((service) => {
    const slugHash = generateSlugHash(service.dataTranslateKey);
    const link = `detail.html?slug=${service.slug}`;

    // Créer l'élément HTML
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
    <a href="${link}" class="service-link"></a>
    <div class="service-icon"><i class="${service.icon}"></i></div>
    <div class="service-content">
      <h3 data-translate="${service.dataTranslateKey}">${service.title}</h3>
      <p data-translate="services.windows.desc"></p>
    </div>
  `;
    container.appendChild(card);
  });
});
