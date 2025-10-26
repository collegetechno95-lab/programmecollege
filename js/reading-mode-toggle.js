/**
 * READING-MODE-TOGGLE.JS
 * Gestion du basculement entre mode dyslexique et mode normal
 */

(function() {
  'use strict';
  
  // Clé pour localStorage
  const STORAGE_KEY = 'reading-mode';
  const MODE_NORMAL = 'normal';
  const MODE_DYSLEXIC = 'dyslexic';
  
  /**
   * Récupère le mode actuel depuis localStorage
   */
  function getCurrentMode() {
    return localStorage.getItem(STORAGE_KEY) || MODE_DYSLEXIC;
  }
  
  /**
   * Sauvegarde le mode dans localStorage
   */
  function saveMode(mode) {
    localStorage.setItem(STORAGE_KEY, mode);
  }
  
  /**
   * Applique le mode au body
   */
  function applyMode(mode) {
    if (mode === MODE_NORMAL) {
      document.body.classList.add('normal-mode');
    } else {
      document.body.classList.remove('normal-mode');
    }
  }
  
  /**
   * Met à jour le texte du bouton
   */
  function updateButtonText(button, mode) {
    if (!button) return;
    
    const icon = button.querySelector('.icon');
    const text = button.querySelector('.text');
    
    if (mode === MODE_NORMAL) {
      if (icon) icon.textContent = '👓';
      if (text) text.textContent = 'Mode dyslexique';
      button.setAttribute('aria-label', 'Activer le mode adapté aux dyslexiques');
    } else {
      if (icon) icon.textContent = '📖';
      if (text) text.textContent = 'Mode normal';
      button.setAttribute('aria-label', 'Activer le mode de lecture normal');
    }
  }
  
  /**
   * Bascule entre les modes
   */
  function toggleMode() {
    const currentMode = getCurrentMode();
    const newMode = currentMode === MODE_NORMAL ? MODE_DYSLEXIC : MODE_NORMAL;
    
    // Appliquer le nouveau mode
    applyMode(newMode);
    saveMode(newMode);
    
    // Mettre à jour le bouton
    const button = document.getElementById('reading-mode-toggle');
    updateButtonText(button, newMode);
    
    // Notification visuelle (optionnel)
    showModeChangeNotification(newMode);
  }
  
  /**
   * Affiche une notification lors du changement de mode
   */
  function showModeChangeNotification(mode) {
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = 'mode-notification';
    notification.textContent = mode === MODE_NORMAL 
      ? '✅ Mode normal activé' 
      : '✅ Mode dyslexique activé';
    
    // Style de la notification
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #48BB78;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      font-weight: 600;
      animation: slideDown 0.3s ease-out;
    `;
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Supprimer après 2 secondes
    setTimeout(() => {
      notification.style.animation = 'slideUp 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }
  
  /**
   * Initialisation au chargement de la page
   */
  function init() {
    // Appliquer le mode sauvegardé
    const savedMode = getCurrentMode();
    applyMode(savedMode);
    
    // Attendre que le DOM soit chargé
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupButton);
    } else {
      setupButton();
    }
  }
  
  /**
   * Configure le bouton de toggle
   */
  function setupButton() {
    const button = document.getElementById('reading-mode-toggle');
    if (!button) {
      console.warn('Bouton de toggle de mode non trouvé (#reading-mode-toggle)');
      return;
    }
    
    // Mettre à jour le texte initial
    const currentMode = getCurrentMode();
    updateButtonText(button, currentMode);
    
    // Ajouter l'écouteur d'événement
    button.addEventListener('click', toggleMode);
    
    // Support du clavier (Entrée et Espace)
    button.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMode();
      }
    });
  }
  
  // Ajouter les animations CSS pour les notifications
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }
    
    @keyframes slideUp {
      from {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
      to {
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
      }
    }
  `;
  document.head.appendChild(style);
  
  // Démarrer l'initialisation
  init();
  
  // Exposer une fonction globale pour utilisation externe
  window.toggleReadingMode = toggleMode;
  
})();
