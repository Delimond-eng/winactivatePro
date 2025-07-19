// Toast System - JavaScript natif
class ToastManager {
  constructor() {
    this.container = null;
    this.toasts = new Map();
    this.defaultOptions = {
      type: "info", // success, error, warning, info
      title: "",
      message: "",
      duration: 5000, // 5 secondes
      closable: true,
      progress: true,
      position: "top-right", // top-right, top-left, bottom-right, bottom-left
      animation: "slide", // slide, fade
      actions: [], // [{text: 'Action', onClick: function, primary: boolean}]
    };
    this.init();
  }

  init() {
    // Créer le conteneur de toasts s'il n'existe pas
    if (!this.container) {
      this.container = document.createElement("div");
      this.container.className = "toast-container";
      document.body.appendChild(this.container);
    }
  }

  show(options = {}) {
    const config = { ...this.defaultOptions, ...options };
    const toastId = this.generateId();

    // Créer l'élément toast
    const toast = this.createToastElement(toastId, config);

    // Ajouter au conteneur
    this.container.appendChild(toast);

    // Stocker la référence
    this.toasts.set(toastId, {
      element: toast,
      config: config,
      timer: null,
    });

    // Animation d'entrée
    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    // Auto-fermeture
    if (config.duration > 0) {
      this.setAutoClose(toastId, config.duration);
    }

    return toastId;
  }

  createToastElement(id, config) {
    const toast = document.createElement("div");
    toast.className = `toast ${config.type} ${config.animation}`;
    toast.setAttribute("data-toast-id", id);

    // Icône
    const icon = this.getIcon(config.type);

    // Contenu HTML
    toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-content">
                ${
                  config.title
                    ? `<div class="toast-title">${this.escapeHtml(
                        config.title
                      )}</div>`
                    : ""
                }
                ${
                  config.message
                    ? `<div class="toast-message">${this.escapeHtml(
                        config.message
                      )}</div>`
                    : ""
                }
                ${
                  config.actions.length > 0
                    ? this.createActionsHtml(config.actions, id)
                    : ""
                }
            </div>
            ${
              config.closable
                ? '<button class="toast-close" aria-label="Fermer">&times;</button>'
                : ""
            }
            ${
              config.progress && config.duration > 0
                ? `<div class="toast-progress" style="animation-duration: ${config.duration}ms;"></div>`
                : ""
            }
        `;

    // Event listeners
    this.attachEventListeners(toast, id, config);

    return toast;
  }

  createActionsHtml(actions, toastId) {
    const actionsHtml = actions
      .map((action, index) => {
        const primaryClass = action.primary ? " primary" : "";
        return `<button class="toast-action${primaryClass}" data-action-index="${index}">${this.escapeHtml(
          action.text
        )}</button>`;
      })
      .join("");

    return `<div class="toast-actions">${actionsHtml}</div>`;
  }

  attachEventListeners(toast, id, config) {
    // Bouton de fermeture
    const closeBtn = toast.querySelector(".toast-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.hide(id));
    }

    // Actions personnalisées
    const actionButtons = toast.querySelectorAll(".toast-action");
    actionButtons.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const action = config.actions[index];
        if (action && typeof action.onClick === "function") {
          action.onClick(id);
        }
        // Fermer le toast après l'action (optionnel)
        if (action.closeAfter !== false) {
          this.hide(id);
        }
      });
    });

    // Pause au survol
    toast.addEventListener("mouseenter", () => {
      this.pauseAutoClose(id);
    });

    toast.addEventListener("mouseleave", () => {
      this.resumeAutoClose(id);
    });
  }

  getIcon(type) {
    const icons = {
      success: "✓",
      error: "✕",
      warning: "⚠",
      info: "ℹ",
    };
    return icons[type] || icons.info;
  }

  setAutoClose(id, duration) {
    const toastData = this.toasts.get(id);
    if (toastData) {
      toastData.timer = setTimeout(() => {
        this.hide(id);
      }, duration);
    }
  }

  pauseAutoClose(id) {
    const toastData = this.toasts.get(id);
    if (toastData && toastData.timer) {
      clearTimeout(toastData.timer);
      toastData.timer = null;

      // Pause l'animation de la barre de progression
      const progressBar = toastData.element.querySelector(".toast-progress");
      if (progressBar) {
        progressBar.style.animationPlayState = "paused";
      }
    }
  }

  resumeAutoClose(id) {
    const toastData = this.toasts.get(id);
    if (toastData && !toastData.timer && toastData.config.duration > 0) {
      // Reprendre l'animation
      const progressBar = toastData.element.querySelector(".toast-progress");
      if (progressBar) {
        progressBar.style.animationPlayState = "running";
      }

      // Calculer le temps restant (approximatif)
      const remainingTime = toastData.config.duration * 0.3; // 30% du temps original
      this.setAutoClose(id, remainingTime);
    }
  }

  hide(id) {
    const toastData = this.toasts.get(id);
    if (!toastData) return;

    const { element, timer } = toastData;

    // Nettoyer le timer
    if (timer) {
      clearTimeout(timer);
    }

    // Animation de sortie
    element.classList.remove("show");
    element.classList.add("hide");

    // Supprimer après l'animation
    setTimeout(() => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
      this.toasts.delete(id);
    }, 300);
  }

  hideAll() {
    this.toasts.forEach((_, id) => {
      this.hide(id);
    });
  }

  success(title, message, options = {}) {
    return this.show({
      type: "success",
      title,
      message,
      ...options,
    });
  }

  error(title, message, options = {}) {
    return this.show({
      type: "error",
      title,
      message,
      duration: 7000, // Plus long pour les erreurs
      ...options,
    });
  }

  warning(title, message, options = {}) {
    return this.show({
      type: "warning",
      title,
      message,
      ...options,
    });
  }

  info(title, message, options = {}) {
    return this.show({
      type: "info",
      title,
      message,
      ...options,
    });
  }

  // Méthodes utilitaires
  generateId() {
    return (
      "toast_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9)
    );
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // Changer la position du conteneur
  setPosition(position) {
    if (!this.container) return;

    this.container.className = "toast-container";

    switch (position) {
      case "top-left":
        this.container.style.top = "20px";
        this.container.style.left = "20px";
        this.container.style.right = "auto";
        this.container.style.bottom = "auto";
        break;
      case "top-right":
        this.container.style.top = "20px";
        this.container.style.right = "20px";
        this.container.style.left = "auto";
        this.container.style.bottom = "auto";
        break;
      case "bottom-left":
        this.container.style.bottom = "20px";
        this.container.style.left = "20px";
        this.container.style.right = "auto";
        this.container.style.top = "auto";
        break;
      case "bottom-right":
        this.container.style.bottom = "20px";
        this.container.style.right = "20px";
        this.container.style.left = "auto";
        this.container.style.top = "auto";
        break;
    }
  }
}

// Instance globale
const Toast = new ToastManager();

// Export pour utilisation
if (typeof module !== "undefined" && module.exports) {
  module.exports = ToastManager;
}

// Ajouter au window pour utilisation globale
window.Toast = Toast;
