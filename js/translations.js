// Système de traductions multilingue
const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.pricing": "Tarifs",
    "nav.faq": "FAQ",
    "nav.testimonials": "Avis",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Activez Windows & Office Facilement",
    "hero.subtitle":
      "Services d'activation professionnels pour Windows et Microsoft Office avec validité à vie. Rapide, sécurisé et licences 100% authentiques avec support expert.",
    "hero.btn.primary": "Activez Maintenant",
    "hero.btn.secondary": "Voir Services",
    "hero.feature.genuine": "100% Authentique",
    "hero.feature.support": "Support 24/7",
    "hero.feature.lifetime": "Validité à Vie",

    // Services Section
    "services.title": "Nos Services Professionnels",
    "services.subtitle":
      "Solutions IT complètes pour particuliers et entreprises",
    "services.windows.title": "Activation Windows 10/11",
    "services.windows.desc":
      "Activation Windows authentique avec validité à vie et support Microsoft complet",
    "services.office.title": "Activation Office 365/2016/2019/2021",
    "services.office.desc":
      "Activation complète de la suite Microsoft Office avec toutes les fonctionnalités débloquées",
    "services.reinstall.title": "Réinstallation Système Complète",
    "services.reinstall.desc":
      "Installation Windows propre avec tous les pilotes et logiciels essentiels",
    "services.repair.title": "Réparation Système",
    "services.repair.desc":
      "Correction des erreurs Windows, plantages et problèmes de performance",
    "services.optimization.title": "Optimisation PC",
    "services.optimization.desc":
      "Accélérez votre ordinateur et améliorez les performances globales",
    "services.virus.title": "Suppression Virus",
    "services.virus.desc":
      "Suppression complète des malwares et amélioration de la sécurité système",
    "services.data.title": "Sauvegarde & Récupération Données",
    "services.data.desc":
      "Sauvegarde sécurisée et services de récupération professionnels",
    "services.drivers.title": "Installation Pilotes & Logiciels",
    "services.drivers.desc":
      "Installation des derniers pilotes et logiciels essentiels",
    "services.remote.title": "Assistance à Distance",
    "services.remote.desc":
      "Support à distance professionnel pour résolution immédiate des problèmes",
    "services.training.title": "Formation IT de Base",
    "services.training.desc":
      "Apprenez les compétences informatiques essentielles et l'utilisation des logiciels",
    "services.account.title": "Configuration Compte Microsoft",
    "services.account.desc":
      "Configuration complète du compte Microsoft et synchronisation",
    "services.iso.title": "Téléchargement ISO Sécurisé",
    "services.iso.desc":
      "Fichiers ISO officiels Windows et Office depuis les serveurs Microsoft",
    "services.antivirus.title": "Configuration Antivirus",
    "services.antivirus.desc":
      "Installation et configuration professionnelle d'antivirus",
    "services.bulk.title": "Activation en Masse pour Entreprises",
    "services.bulk.desc":
      "Solutions d'activation de niveau entreprise pour organisations",
    "services.maintenance.title": "Contrats de Maintenance IT",
    "services.maintenance.desc":
      "Support et maintenance IT continus pour entreprises",
    "services.games.title": "Vente & Installation de Jeux Vidéo Xbox",
    "services.games.desc":
      "Large choix de jeux pour toutes plateformes, installation et configuration incluses.",

    // Pricing Section
    "pricing.title": "Tarifs Transparents",
    "pricing.subtitle": "Tarifs abordables pour services IT professionnels",
    "pricing.windows.title": "Activation Windows 10 Pro",
    "pricing.windows.feature1": "Validité à vie",
    "pricing.windows.feature2": "Licence authentique",
    "pricing.windows.feature3": "Activation à distance",
    "pricing.windows.feature4": "Support 24/7",
    "pricing.reinstall.title": "Réinstallation + Activation",
    "pricing.reinstall.feature1": "Installation Windows propre",
    "pricing.reinstall.feature2": "Tous pilotes inclus",
    "pricing.reinstall.feature3": "Logiciels essentiels",
    "pricing.reinstall.feature4": "Activation complète",
    "pricing.office.title": "Activation Office 365",
    "pricing.office.feature1": "Suite Office complète",
    "pricing.office.feature2": "Validité 1 an",
    "pricing.office.feature3": "Toutes mises à jour incluses",
    "pricing.office.feature4": "Support expert",
    "pricing.complete.title": "Configuration PC Complète",
    "pricing.complete.feature1": "Activation Windows + Office",
    "pricing.complete.feature2": "Optimisation PC",
    "pricing.complete.feature3": "Configuration antivirus",
    "pricing.complete.feature4": "Sauvegarde données",
    "pricing.badge": "Plus Populaire",
    "pricing.btn": "Commencer",

    // FAQ Section
    "faq.title": "Questions Fréquemment Posées",
    "faq.subtitle":
      "Trouvez des réponses aux questions courantes sur nos services",
    "faq.q1": "L'activation Windows est-elle permanente ?",
    "faq.a1":
      "Oui, notre activation Windows est permanente et valide à vie. Une fois activé, votre Windows restera authentique pour toujours avec support Microsoft complet et mises à jour. Nous utilisons uniquement des licences légitimes qui n'expirent pas.",
    "faq.q2": "Combien de temps prend le processus d'activation ?",
    "faq.a2":
      "La plupart des activations sont terminées en 15-30 minutes via accès distant. Pour les services de réinstallation système, cela prend généralement 2-4 heures selon les spécifications de votre système et la vitesse internet.",
    "faq.q3": "Fournissez-vous un support après activation ?",
    "faq.a3":
      "Absolument ! Nous fournissons un support technique 24/7 pour tous nos services. Si vous rencontrez des problèmes avec votre activation ou avez besoin d'assistance, notre équipe est toujours disponible pour vous aider.",
    "faq.q4": "L'accès distant est-il sécurisé ?",
    "faq.a4":
      "Oui, notre accès distant est complètement sécurisé. Nous utilisons des connexions chiffrées, vous gardez le contrôle total de votre ordinateur, et nous supprimons tous les logiciels distants après la session. Votre confidentialité et sécurité sont nos priorités principales.",
    "faq.q5": "Quels modes de paiement acceptez-vous ?",
    "faq.a5":
      "Nous acceptons divers modes de paiement incluant PayPal, cartes de crédit/débit, virements bancaires et cryptomonnaies. Le paiement est traité de manière sécurisée et nous fournissons des reçus pour toutes les transactions.",
    "faq.q6":
      "Pouvez-vous aider avec les licences entreprise/professionnelles ?",
    "faq.a6":
      "Oui, nous offrons des services d'activation en masse pour entreprises et organisations. Nous pouvons gérer plusieurs ordinateurs simultanément et fournir des solutions de licences en volume avec tarifs spéciaux pour organisations.",
    "faq.q7": "Que se passe-t-il si mon ordinateur plante après activation ?",
    "faq.a7":
      "Notre activation survit aux plantages système et changements matériels. Si vous devez réinstaller Windows, contactez-nous et nous réactiverons votre système sans coût supplémentaire. Notre support à vie couvre ces scénarios.",
    "faq.q8": "Travaillez-vous les week-ends et jours fériés ?",
    "faq.a8":
      "Oui, nous fournissons un support 24/7 incluant week-ends et jours fériés. Notre service d'assistance à distance est disponible à tout moment. Contactez-nous simplement via WhatsApp, téléphone ou email.",

    // Testimonials Section
    "testimonials.title": "Ce Que Disent Nos Clients",
    "testimonials.subtitle": "Approuvé par des milliers de clients satisfaits",
    "testimonials.1.text":
      "Service excellent ! Mon Windows a été activé en quelques minutes et fonctionne parfaitement depuis des mois. Professionnel et fiable.",
    "testimonials.1.author": "Sarah Johnson",
    "testimonials.1.role": "Propriétaire Petite Entreprise",
    "testimonials.2.text":
      "Rapide, abordable et authentique. Mon Office 365 activé instantanément. Le support à distance était incroyable. Je recommande vivement !",
    "testimonials.2.author": "Laurent Dupont",
    "testimonials.2.role": "Freelance",
    "testimonials.3.text":
      "Ils ont complètement réinstallé mon système et tout activé. Mon PC fonctionne comme neuf ! Service professionnel à prix avantageux.",
    "testimonials.3.author": "Gaston delimond",
    "testimonials.3.role": "Responsable IT",
    "testimonials.4.text":
      "Support technique exceptionnel ! Ils ont résolu mes problèmes système complexes à distance en moins d'une heure. Équipe vraiment professionnelle.",
    "testimonials.4.author": "Julien",
    "testimonials.4.role": "Graphiste",
    "testimonials.5.text":
      "Meilleur service IT que j'aie jamais utilisé. Réponse rapide, prix équitables et logiciels authentiques. Mes ordinateurs d'entreprise fonctionnent parfaitement.",
    "testimonials.5.author": "Marc Yves",
    "testimonials.5.role": "Propriétaire Restaurant",
    "testimonials.6.text":
      "A récupéré tous mes fichiers importants après un plantage système. Leur service de récupération de données a sauvé mon entreprise. Hautement recommandé !",
    "testimonials.6.author": "Anna Clark",
    "testimonials.6.role": "Consultante",

    // Contact Section
    "contact.title": "Contactez-Nous",
    "contact.subtitle":
      "Prêt à activer votre Windows ou Office ? Contactez-nous maintenant !",
    "contact.phone.title": "Support Téléphonique",
    "contact.phone.available": "Disponible 24/7",
    "contact.whatsapp.title": "WhatsApp",
    "contact.address.title": "Adresse",
    "contact.whatsapp.chat": "Chatter Maintenant",
    "contact.email.title": "Email",
    "contact.email.reply": "Nous répondons en 1 heure",
    "contact.hours.title": "Heures d'Ouverture",
    "contact.hours.text": "Support 24/7 Disponible",
    "contact.hours.remote": "Assistance à distance à tout moment",
    "contact.form.name": "Nom Complet",
    "contact.form.email": "Adresse Email",
    "contact.form.phone": "Numéro de Téléphone",
    "contact.form.service": "Service Requis",
    "contact.form.service.select": "Sélectionnez un service",
    "contact.form.service.windows": "Activation Windows",
    "contact.form.service.office": "Activation Office",
    "contact.form.service.reinstall": "Réinstallation Système",
    "contact.form.service.optimization": "Optimisation PC",
    "contact.form.service.virus": "Suppression Virus",
    "contact.form.service.data": "Récupération Données",
    "contact.form.service.remote": "Support à Distance",
    "contact.form.service.other": "Autre",
    "contact.form.message": "Message",
    "contact.form.message.placeholder":
      "Décrivez votre problème ou vos exigences...",
    "contact.form.submit": "Envoyer Message",
    "contact.form.sending": "Envoi...",
    "contact.form.success":
      "Merci pour votre message ! Nous vous répondrons dans l'heure.",
    "contact.form.error.required":
      "Veuillez remplir tous les champs obligatoires.",
    "contact.form.error.email": "Veuillez entrer une adresse email valide.",

    // Footer
    "footer.description":
      "Services d'activation professionnels Windows et Office avec support à vie. Approuvé par des milliers de clients satisfaits dans le monde entier.",
    "footer.links": "Liens Rapides",
    "footer.services": "Services",
    "footer.service.windows": "Activation Windows",
    "footer.service.office": "Activation Office",
    "footer.service.repair": "Réparation PC",
    "footer.service.remote": "Assistance à distance",
    "footer.contact": "Informations Contact",
    "footer.hours": "Support 24/7",
    "footer.copyright":
      "© 2024 WinActivate Pro. Tous droits réservés. | Politique de Confidentialité | Conditions de Service",
  },

  // Detail page translations
  detail: {
    "detail.nav.home": "Accueil",
    "detail.nav.services": "Services",
    "detail.nav.pricing": "Tarifs",
    "detail.nav.testimonials": "Avis",
    "detail.nav.contact": "Contact",

    "detail.overview": "Aperçu du Service",
    "detail.whats.included": "Ce qui est inclus :",
    "detail.process": "Processus :",
    "detail.requirements": "Exigences :",
    "detail.why.choose": "Pourquoi choisir notre service ?",
    "detail.service.info": "Informations sur le Service",
    "detail.duration": "Durée :",
    "detail.delivery": "Livraison :",
    "detail.warranty": "Garantie :",
    "detail.support": "Support :",
    "detail.remote.service": "Service à distance",
    "detail.available.247": "24/7 disponible",
    "detail.related.services": "Services Connexes",
    "detail.ready.started": "Prêt à Commencer ?",
    "detail.contact.subtitle":
      "Contactez-nous maintenant pour activer votre Windows ou obtenir tout autre service",
    "detail.get.service": "Obtenir ce Service",

    // Contact form
    "detail.whatsapp": "WhatsApp",
    "detail.chat.now": "Chatter Maintenant",
    "detail.phone.support": "Support Téléphonique",
    "detail.email": "Email",
    "detail.reply.hour": "Nous répondons en 1 heure",
    "detail.send.message": "Envoyez-nous un Message",
    "detail.full.name": "Nom Complet",
    "detail.email.address": "Adresse Email",
    "detail.phone.number": "Numéro de Téléphone",
    "detail.service.needed": "Service Requis",
    "detail.select.service": "Sélectionnez un service",
    "detail.message": "Message",
    "detail.describe.requirements": "Décrivez vos exigences...",
    "detail.send.message.btn": "Envoyer Message",

    // Location
    "detail.our.location": "Notre Emplacement",
    "detail.address": "Adresse",
    "detail.working.hours": "Heures d'Ouverture",
    "detail.remote.support.247": "Support à Distance 24/7",
    "detail.office.hours": "Bureau : Lun-Ven 9h-18h",
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.testimonials": "Reviews",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Activate Windows & Office Easily",
    "hero.subtitle":
      "Professional activation services for Windows and Microsoft Office with lifetime validity. Fast, secure, and 100% genuine licenses backed by expert support.",
    "hero.btn.primary": "Get Activated Now",
    "hero.btn.secondary": "View Services",
    "hero.feature.genuine": "100% Genuine",
    "hero.feature.support": "24/7 Support",
    "hero.feature.lifetime": "Lifetime Validity",

    // Services Section
    "services.title": "Our Professional Services",
    "services.subtitle":
      "Comprehensive IT solutions for individuals and businesses",
    "services.windows.title": "Windows 10/11 Activation",
    "services.windows.desc":
      "Genuine Windows activation with lifetime validity and full Microsoft support",
    "services.office.title": "Office 365/2016/2019/2021 Activation",
    "services.office.desc":
      "Complete Microsoft Office suite activation with all features unlocked",
    "services.reinstall.title": "Full System Reinstallation",
    "services.reinstall.desc":
      "Clean Windows installation with all drivers and essential software",
    "services.repair.title": "System Repair",
    "services.repair.desc":
      "Fix Windows errors, crashes, and performance issues",
    "services.optimization.title": "PC Optimization",
    "services.optimization.desc":
      "Speed up your computer and improve overall performance",
    "services.virus.title": "Virus Removal",
    "services.virus.desc":
      "Complete malware removal and system security enhancement",
    "services.data.title": "Data Backup & Recovery",
    "services.data.desc":
      "Secure data backup and professional recovery services",
    "services.drivers.title": "Driver & Software Installation",
    "services.drivers.desc":
      "Latest drivers and essential software installation",
    "services.remote.title": "Remote Assistance",
    "services.remote.desc":
      "Professional remote support for immediate problem resolution",
    "services.training.title": "Basic IT Training",
    "services.training.desc":
      "Learn essential computer skills and software usage",
    "services.account.title": "Microsoft Account Setup",
    "services.account.desc":
      "Complete Microsoft account configuration and synchronization",
    "services.iso.title": "Secure ISO Download",
    "services.iso.desc":
      "Official Windows and Office ISO files from Microsoft servers",
    "services.antivirus.title": "Antivirus Setup",
    "services.antivirus.desc":
      "Professional antivirus installation and configuration",
    "services.bulk.title": "Bulk Activation for Businesses",
    "services.bulk.desc":
      "Enterprise-grade activation solutions for organizations",
    "services.maintenance.title": "IT Maintenance Contracts",
    "services.maintenance.desc":
      "Ongoing IT support and maintenance for businesses",
    "services.games.title": "Xbox Video Games Sales & Installation",
    "services.games.desc":
      "Wide selection of games for all platforms, including installation and setup.",

    // Pricing Section
    "pricing.title": "Transparent Pricing",
    "pricing.subtitle": "Affordable rates for professional IT services",
    "pricing.windows.title": "Windows 10 Pro Activation",
    "pricing.windows.feature1": "Lifetime validity",
    "pricing.windows.feature2": "Genuine license",
    "pricing.windows.feature3": "Remote activation",
    "pricing.windows.feature4": "24/7 support",
    "pricing.reinstall.title": "Reinstall + Activation",
    "pricing.reinstall.feature1": "Clean Windows install",
    "pricing.reinstall.feature2": "All drivers included",
    "pricing.reinstall.feature3": "Essential software",
    "pricing.reinstall.feature4": "Full activation",
    "pricing.office.title": "Office 365 Activation",
    "pricing.office.feature1": "Full Office suite",
    "pricing.office.feature2": "1-year validity",
    "pricing.office.feature3": "All updates included",
    "pricing.office.feature4": "Expert support",
    "pricing.complete.title": "Complete PC Setup",
    "pricing.complete.feature1": "Windows + Office activation",
    "pricing.complete.feature2": "PC optimization",
    "pricing.complete.feature3": "Antivirus setup",
    "pricing.complete.feature4": "Data backup",
    "pricing.badge": "Most Popular",
    "pricing.btn": "Get Started",

    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to common questions about our services",
    "faq.q1": "Is Windows activation permanent?",
    "faq.a1":
      "Yes, our Windows activation is permanent and lifetime valid. Once activated, your Windows will remain genuine forever with full Microsoft support and updates. We use only legitimate licenses that don't expire.",
    "faq.q2": "How long does the activation process take?",
    "faq.a2":
      "Most activations are completed within 15-30 minutes via remote access. For system reinstallation services, it typically takes 2-4 hours depending on your system specifications and internet speed.",
    "faq.q3": "Do you provide support after activation?",
    "faq.a3":
      "Absolutely! We provide 24/7 technical support for all our services. If you encounter any issues with your activation or need assistance, our team is always available to help you.",
    "faq.q4": "Is remote access safe?",
    "faq.a4":
      "Yes, our remote access is completely secure. We use encrypted connections, you maintain full control of your computer, and we remove all remote software after the session. Your privacy and security are our top priorities.",
    "faq.q5": "What payment methods do you accept?",
    "faq.a5":
      "We accept various payment methods including PayPal, credit/debit cards, bank transfers, and cryptocurrency. Payment is processed securely and we provide receipts for all transactions.",
    "faq.q6": "Can you help with business/enterprise licenses?",
    "faq.a6":
      "Yes, we offer bulk activation services for businesses and enterprises. We can handle multiple computers simultaneously and provide volume licensing solutions with special pricing for organizations.",
    "faq.q7": "What if my computer crashes after activation?",
    "faq.a7":
      "Our activation survives system crashes and hardware changes. If you need to reinstall Windows, contact us and we'll reactivate your system at no additional cost. Our lifetime support covers these scenarios.",
    "faq.q8": "Do you work on weekends and holidays?",
    "faq.a8":
      "Yes, we provide 24/7 support including weekends and holidays. Our remote assistance service is available anytime you need help. Simply contact us via WhatsApp, phone, or email.",

    // Testimonials Section
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Trusted by thousands of satisfied customers",
    "testimonials.1.text":
      "Excellent service! My Windows was activated in minutes and has been working perfectly for months. Professional and reliable.",
    "testimonials.1.author": "Sarah Johnson",
    "testimonials.1.role": "Small Business Owner",
    "testimonials.2.text":
      "Fast, affordable, and genuine. Got my Office 365 activated instantly. The remote support was amazing. Highly recommend!",
    "testimonials.2.author": "Michael Chen",
    "testimonials.2.role": "Freelancer",
    "testimonials.3.text":
      "They completely reinstalled my system and activated everything. My PC runs like new! Professional service at great prices.",
    "testimonials.3.author": "David Rodriguez",
    "testimonials.3.role": "IT Manager",
    "testimonials.4.text":
      "Outstanding technical support! They solved my complex system issues remotely in under an hour. Truly professional team.",
    "testimonials.4.author": "Emma Wilson",
    "testimonials.4.role": "Graphic Designer",
    "testimonials.5.text":
      "Best IT service I've ever used. Quick response, fair pricing, and genuine software. My business computers are running perfectly.",
    "testimonials.5.author": "James Thompson",
    "testimonials.5.role": "Restaurant Owner",
    "testimonials.6.text":
      "Recovered all my important files after a system crash. Their data recovery service saved my business. Highly recommended!",
    "testimonials.6.author": "Lisa Martinez",
    "testimonials.6.role": "Consultant",

    // Contact Section
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Ready to activate your Windows or Office? Contact us now!",
    "contact.phone.title": "Phone Support",
    "contact.address.title": "Address",
    "contact.phone.available": "Available 24/7",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.chat": "Chat Now",
    "contact.email.title": "Email",
    "contact.email.reply": "We reply within 1 hour",
    "contact.hours.title": "Working Hours",
    "contact.hours.text": "24/7 Support Available",
    "contact.hours.remote": "Remote assistance anytime",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.service": "Service Needed",
    "contact.form.service.select": "Select a service",
    "contact.form.service.windows": "Windows Activation",
    "contact.form.service.office": "Office Activation",
    "contact.form.service.reinstall": "System Reinstallation",
    "contact.form.service.optimization": "PC Optimization",
    "contact.form.service.virus": "Virus Removal",
    "contact.form.service.data": "Data Recovery",
    "contact.form.service.remote": "Remote Support",
    "contact.form.service.other": "Other",
    "contact.form.message": "Message",
    "contact.form.message.placeholder":
      "Describe your issue or requirements...",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success":
      "Thank you for your message! We will get back to you within 1 hour.",
    "contact.form.error.required": "Please fill in all required fields.",
    "contact.form.error.email": "Please enter a valid email address.",

    // Footer
    "footer.description":
      "Professional Windows and Office activation services with lifetime support. Trusted by thousands of satisfied customers worldwide.",
    "footer.links": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact Info",
    "footer.service.windows": "Windows Activation",
    "footer.service.office": "Office Activation",
    "footer.service.repair": "PC Repair",
    "footer.service.remote": "Remote Support",
    "footer.hours": "24/7 Support",
    "footer.copyright":
      "© 2024 WinActivate Pro. All rights reserved. | Privacy Policy | Terms of Service",
  },

  // Detail page translations
  detail: {
    "detail.nav.home": "Home",
    "detail.nav.services": "Services",
    "detail.nav.pricing": "Pricing",
    "detail.nav.testimonials": "Reviews",
    "detail.nav.contact": "Contact",

    "detail.overview": "Service Overview",
    "detail.whats.included": "What's Included:",
    "detail.process": "Process:",
    "detail.requirements": "Requirements:",
    "detail.why.choose": "Why Choose Our Service?",
    "detail.service.info": "Service Information",
    "detail.duration": "Duration:",
    "detail.delivery": "Delivery:",
    "detail.warranty": "Warranty:",
    "detail.support": "Support:",
    "detail.remote.service": "Remote service",
    "detail.available.247": "24/7 available",
    "detail.related.services": "Related Services",
    "detail.ready.started": "Ready to Get Started?",
    "detail.contact.subtitle":
      "Contact us now to activate your Windows or get any other service",
    "detail.get.service": "Get This Service",

    // Contact form
    "detail.whatsapp": "WhatsApp",
    "detail.chat.now": "Chat Now",
    "detail.phone.support": "Phone Support",
    "detail.email": "Email",
    "detail.reply.hour": "We reply within 1 hour",
    "detail.send.message": "Send us a Message",
    "detail.full.name": "Full Name",
    "detail.email.address": "Email Address",
    "detail.phone.number": "Phone Number",
    "detail.service.needed": "Service Needed",
    "detail.select.service": "Select a service",
    "detail.message": "Message",
    "detail.describe.requirements": "Describe your requirements...",
    "detail.send.message.btn": "Send Message",

    // Location
    "detail.our.location": "Our Location",
    "detail.address": "Address",
    "detail.working.hours": "Working Hours",
    "detail.remote.support.247": "24/7 Remote Support",
    "detail.office.hours": "Office: Mon-Fri 9AM-6PM",
  },

  nl: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Diensten",
    "nav.pricing": "Prijzen",
    "nav.faq": "FAQ",
    "nav.testimonials": "Reviews",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Activeer Windows & Office Eenvoudig",
    "hero.subtitle":
      "Professionele activatiediensten voor Windows en Microsoft Office met levenslange geldigheid. Snel, veilig en 100% echte licenties ondersteund door deskundige ondersteuning.",
    "hero.btn.primary": "Nu Activeren",
    "hero.btn.secondary": "Bekijk Diensten",
    "hero.feature.genuine": "100% Echt",
    "hero.feature.support": "24/7 Ondersteuning",
    "hero.feature.lifetime": "Levenslange Geldigheid",

    // Services Section
    "services.title": "Onze Professionele Diensten",
    "services.subtitle":
      "Uitgebreide IT-oplossingen voor particulieren en bedrijven",
    "services.windows.title": "Windows 10/11 Activatie",
    "services.windows.desc":
      "Echte Windows-activatie met levenslange geldigheid en volledige Microsoft-ondersteuning",
    "services.office.title": "Office 365/2016/2019/2021 Activatie",
    "services.office.desc":
      "Volledige Microsoft Office suite activatie met alle functies ontgrendeld",
    "services.reinstall.title": "Volledige Systeemherinstallatie",
    "services.reinstall.desc":
      "Schone Windows-installatie met alle drivers en essentiële software",
    "services.repair.title": "Systeemreparatie",
    "services.repair.desc":
      "Windows-fouten, crashes en prestatieproblemen oplossen",
    "services.optimization.title": "PC Optimalisatie",
    "services.optimization.desc":
      "Versnel uw computer en verbeter de algehele prestaties",
    "services.virus.title": "Virusverwijdering",
    "services.virus.desc":
      "Volledige malware-verwijdering en systeembeveiliging verbetering",
    "services.data.title": "Data Backup & Herstel",
    "services.data.desc":
      "Veilige data backup en professionele hersteldiensten",
    "services.drivers.title": "Driver & Software Installatie",
    "services.drivers.desc":
      "Nieuwste drivers en essentiële software installatie",
    "services.remote.title": "Externe Assistentie",
    "services.remote.desc":
      "Professionele externe ondersteuning voor onmiddellijke probleemoplossing",
    "services.training.title": "Basis IT Training",
    "services.training.desc":
      "Leer essentiële computervaardigheden en softwaregebruik",
    "services.account.title": "Microsoft Account Setup",
    "services.account.desc":
      "Volledige Microsoft-accountconfiguratie en synchronisatie",
    "services.iso.title": "Veilige ISO Download",
    "services.iso.desc":
      "Officiële Windows en Office ISO-bestanden van Microsoft-servers",
    "services.antivirus.title": "Antivirus Setup",
    "services.antivirus.desc":
      "Professionele antivirus installatie en configuratie",
    "services.bulk.title": "Bulk Activatie voor Bedrijven",
    "services.bulk.desc":
      "Enterprise-grade activatieoplossingen voor organisaties",
    "services.maintenance.title": "IT Onderhoudscontracten",
    "services.maintenance.desc":
      "Doorlopende IT-ondersteuning en onderhoud voor bedrijven",
    "services.games.title": "Verkoop & Installatie van Videogames Xbox",
    "services.games.desc":
      "Grote keuze aan games voor alle platforms, inclusief installatie en configuratie.",

    // Pricing Section
    "pricing.title": "Transparante Prijzen",
    "pricing.subtitle": "Betaalbare tarieven voor professionele IT-diensten",
    "pricing.windows.title": "Windows 10 Pro Activatie",
    "pricing.windows.feature1": "Levenslange geldigheid",
    "pricing.windows.feature2": "Echte licentie",
    "pricing.windows.feature3": "Externe activatie",
    "pricing.windows.feature4": "24/7 ondersteuning",
    "pricing.reinstall.title": "Herinstallatie + Activatie",
    "pricing.reinstall.feature1": "Schone Windows installatie",
    "pricing.reinstall.feature2": "Alle drivers inbegrepen",
    "pricing.reinstall.feature3": "Essentiële software",
    "pricing.reinstall.feature4": "Volledige activatie",
    "pricing.office.title": "Office 365 Activatie",
    "pricing.office.feature1": "Volledige Office suite",
    "pricing.office.feature2": "1-jaar geldigheid",
    "pricing.office.feature3": "Alle updates inbegrepen",
    "pricing.office.feature4": "Expert ondersteuning",
    "pricing.complete.title": "Volledige PC Setup",
    "pricing.complete.feature1": "Windows + Office activatie",
    "pricing.complete.feature2": "PC optimalisatie",
    "pricing.complete.feature3": "Antivirus setup",
    "pricing.complete.feature4": "Data backup",
    "pricing.badge": "Meest Populair",
    "pricing.btn": "Begin Nu",

    // FAQ Section
    "faq.title": "Veelgestelde Vragen",
    "faq.subtitle": "Vind antwoorden op veelgestelde vragen over onze diensten",
    "faq.q1": "Is Windows-activatie permanent?",
    "faq.a1":
      "Ja, onze Windows-activatie is permanent en levenslang geldig. Eenmaal geactiveerd blijft uw Windows voor altijd echt met volledige Microsoft-ondersteuning en updates. We gebruiken alleen legitieme licenties die niet verlopen.",
    "faq.q2": "Hoe lang duurt het activatieproces?",
    "faq.a2":
      "De meeste activaties zijn binnen 15-30 minuten voltooid via externe toegang. Voor systeemherinstallatiediensten duurt het meestal 2-4 uur afhankelijk van uw systeemspecificaties en internetsnelheid.",
    "faq.q3": "Bieden jullie ondersteuning na activatie?",
    "faq.a3":
      "Absoluut! We bieden 24/7 technische ondersteuning voor al onze diensten. Als u problemen ondervindt met uw activatie of hulp nodig heeft, is ons team altijd beschikbaar om u te helpen.",
    "faq.q4": "Is externe toegang veilig?",
    "faq.a4":
      "Ja, onze externe toegang is volledig veilig. We gebruiken versleutelde verbindingen, u behoudt volledige controle over uw computer, en we verwijderen alle externe software na de sessie. Uw privacy en veiligheid zijn onze topprioriteiten.",
    "faq.q5": "Welke betaalmethoden accepteren jullie?",
    "faq.a5":
      "We accepteren verschillende betaalmethoden waaronder PayPal, credit/debitkaarten, bankoverschrijvingen en cryptocurrency. Betaling wordt veilig verwerkt en we verstrekken bonnen voor alle transacties.",
    "faq.q6": "Kunnen jullie helpen met zakelijke/enterprise licenties?",
    "faq.a6":
      "Ja, we bieden bulk activatiediensten voor bedrijven en ondernemingen. We kunnen meerdere computers tegelijkertijd behandelen en volumelicentieoplossingen bieden met speciale prijzen voor organisaties.",
    "faq.q7": "Wat als mijn computer crasht na activatie?",
    "faq.a7":
      "Onze activatie overleeft systeemcrashes en hardwarewijzigingen. Als u Windows opnieuw moet installeren, neem contact met ons op en we heractiveren uw systeem zonder extra kosten. Onze levenslange ondersteuning dekt deze scenario's.",
    "faq.q8": "Werken jullie in weekenden en op feestdagen?",
    "faq.a8":
      "Ja, we bieden 24/7 ondersteuning inclusief weekenden en feestdagen. Onze externe assistentiedienst is beschikbaar wanneer u hulp nodig heeft. Neem gewoon contact met ons op via WhatsApp, telefoon of email.",

    // Testimonials Section
    "testimonials.title": "Wat Onze Klanten Zeggen",
    "testimonials.subtitle": "Vertrouwd door duizenden tevreden klanten",
    "testimonials.1.text":
      "Uitstekende service! Mijn Windows werd binnen minuten geactiveerd en werkt al maanden perfect. Professioneel en betrouwbaar.",
    "testimonials.1.author": "Sarah Johnson",
    "testimonials.1.role": "Kleine Onderneming Eigenaar",
    "testimonials.2.text":
      "Snel, betaalbaar en echt. Mijn Office 365 werd direct geactiveerd. De externe ondersteuning was geweldig. Zeer aan te bevelen!",
    "testimonials.2.author": "Michael Chen",
    "testimonials.2.role": "Freelancer",
    "testimonials.3.text":
      "Ze hebben mijn systeem volledig opnieuw geïnstalleerd en alles geactiveerd. Mijn PC draait als nieuw! Professionele service tegen geweldige prijzen.",
    "testimonials.3.author": "David Rodriguez",
    "testimonials.3.role": "IT Manager",
    "testimonials.4.text":
      "Uitstekende technische ondersteuning! Ze losten mijn complexe systeemproblemen op afstand op in minder dan een uur. Echt professioneel team.",
    "testimonials.4.author": "Emma Wilson",
    "testimonials.4.role": "Grafisch Ontwerper",
    "testimonials.5.text":
      "Beste IT-service die ik ooit heb gebruikt. Snelle reactie, eerlijke prijzen en echte software. Mijn bedrijfscomputers draaien perfect.",
    "testimonials.5.author": "James Thompson",
    "testimonials.5.role": "Restaurant Eigenaar",
    "testimonials.6.text":
      "Alle belangrijke bestanden hersteld na een systeemcrash. Hun data recovery service redde mijn bedrijf. Zeer aanbevolen!",
    "testimonials.6.author": "Lisa Martinez",
    "testimonials.6.role": "Consultant",

    // Contact Section
    "contact.title": "Neem Contact Op",
    "contact.subtitle":
      "Klaar om uw Windows of Office te activeren? Neem nu contact met ons op!",
    "contact.phone.title": "Telefoon Ondersteuning",
    "contact.address.title": "Adres",
    "contact.phone.available": "Beschikbaar 24/7",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.chat": "Chat Nu",
    "contact.email.title": "Email",
    "contact.email.reply": "We reageren binnen 1 uur",
    "contact.hours.title": "Werkuren",
    "contact.hours.text": "24/7 Ondersteuning Beschikbaar",
    "contact.hours.remote": "Externe assistentie altijd",
    "contact.form.name": "Volledige Naam",
    "contact.form.email": "Email Adres",
    "contact.form.phone": "Telefoonnummer",
    "contact.form.service": "Benodigde Service",
    "contact.form.service.select": "Selecteer een service",
    "contact.form.service.windows": "Windows Activatie",
    "contact.form.service.office": "Office Activatie",
    "contact.form.service.reinstall": "Systeemherinstallatie",
    "contact.form.service.optimization": "PC Optimalisatie",
    "contact.form.service.virus": "Virusverwijdering",
    "contact.form.service.data": "Data Herstel",
    "contact.form.service.remote": "Externe Ondersteuning",
    "contact.form.service.other": "Anders",
    "contact.form.message": "Bericht",
    "contact.form.message.placeholder": "Beschrijf uw probleem of vereisten...",
    "contact.form.submit": "Verstuur Bericht",
    "contact.form.sending": "Versturen...",
    "contact.form.success":
      "Bedankt voor uw bericht! We nemen binnen 1 uur contact met u op.",
    "contact.form.error.required": "Vul alle verplichte velden in.",
    "contact.form.error.email": "Voer een geldig emailadres in.",

    // Footer
    "footer.description":
      "Professionele Windows en Office activatiediensten met levenslange ondersteuning. Vertrouwd door duizenden tevreden klanten wereldwijd.",
    "footer.links": "Snelle Links",
    "footer.services": "Diensten",
    "footer.contact": "Contact Info",
    "footer.service.windows": "Windows Activering",
    "footer.service.office": "Office Activering",
    "footer.service.repair": "PC Reparatie",
    "footer.service.remote": "Externe Ondersteuning",
    "footer.hours": "24/7 Ondersteuning",
    "footer.copyright":
      "© 2024 WinActivate Pro. Alle rechten voorbehouden. | Privacybeleid | Servicevoorwaarden",
  },

  // Detail page translations
  detail: {
    "detail.nav.home": "Home",
    "detail.nav.services": "Diensten",
    "detail.nav.pricing": "Prijzen",
    "detail.nav.testimonials": "Reviews",
    "detail.nav.contact": "Contact",

    "detail.overview": "Service Overzicht",
    "detail.whats.included": "Wat is inbegrepen:",
    "detail.process": "Proces:",
    "detail.requirements": "Vereisten:",
    "detail.why.choose": "Waarom onze service kiezen?",
    "detail.service.info": "Service Informatie",
    "detail.duration": "Duur:",
    "detail.delivery": "Levering:",
    "detail.warranty": "Garantie:",
    "detail.support": "Ondersteuning:",
    "detail.remote.service": "Externe service",
    "detail.available.247": "24/7 beschikbaar",
    "detail.related.services": "Gerelateerde Services",
    "detail.ready.started": "Klaar om te Beginnen?",
    "detail.contact.subtitle":
      "Neem nu contact met ons op om uw Windows te activeren of een andere service te krijgen",
    "detail.get.service": "Krijg deze Service",

    // Contact form
    "detail.whatsapp": "WhatsApp",
    "detail.chat.now": "Chat Nu",
    "detail.phone.support": "Telefoon Ondersteuning",
    "detail.email": "Email",
    "detail.reply.hour": "We reageren binnen 1 uur",
    "detail.send.message": "Stuur ons een Bericht",
    "detail.full.name": "Volledige Naam",
    "detail.email.address": "Email Adres",
    "detail.phone.number": "Telefoonnummer",
    "detail.service.needed": "Benodigde Service",
    "detail.select.service": "Selecteer een service",
    "detail.message": "Bericht",
    "detail.describe.requirements": "Beschrijf uw vereisten...",
    "detail.send.message.btn": "Verstuur Bericht",

    // Location
    "detail.our.location": "Onze Locatie",
    "detail.address": "Adres",
    "detail.working.hours": "Werkuren",
    "detail.remote.support.247": "24/7 Externe Ondersteuning",
    "detail.office.hours": "Kantoor: Ma-Vr 9:00-18:00",
  },
};

// Fonction pour obtenir la traduction
function getTranslation(key, lang = "fr") {
  return translations[lang] && translations[lang][key]
    ? translations[lang][key]
    : translations["fr"][key] || key;
}

// Fonction pour changer la langue
function changeLanguage(lang) {
  // Sauvegarder la langue dans localStorage
  localStorage.setItem("selectedLanguage", lang);

  // Mettre à jour tous les éléments avec data-translate
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    const translation = getTranslation(key, lang);

    if (element.tagName === "INPUT" && element.type === "text") {
      element.placeholder = translation;
    } else if (element.tagName === "TEXTAREA") {
      element.placeholder = translation;
    } else {
      element.textContent = translation;
    }
  });

  // Mettre à jour le sélecteur de langue
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = lang;
  }

  // Mettre à jour le titre de la page
  const pageTitle = getTranslation("nav.home", lang) + " - WinActivate Pro";
  document.title = pageTitle;
}

// Initialiser la langue au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "fr";
  changeLanguage(savedLanguage);

  // Ajouter l'événement de changement de langue
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.addEventListener("change", function () {
      changeLanguage(this.value);
    });
  }
});

// Exporter les fonctions pour utilisation globale
window.changeLanguage = changeLanguage;
window.getTranslation = getTranslation;
