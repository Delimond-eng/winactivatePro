# TOAST DOC

<script>
        // Fonctions de démonstration
        function showSuccessToast() {
            Toast.success('Succès!', 'Votre action a été effectuée avec succès.');
        }

        function showErrorToast() {
            Toast.error('Erreur!', 'Une erreur s\'est produite lors du traitement.');
        }

        function showWarningToast() {
            Toast.warning('Attention!', 'Vérifiez vos données avant de continuer.');
        }

        function showInfoToast() {
            Toast.info('Information', 'Une nouvelle mise à jour est disponible.');
        }

        function showPersistentToast() {
            Toast.show({
                type: 'info',
                title: 'Toast Persistant',
                message: 'Ce toast ne se ferme pas automatiquement.',
                duration: 0, // Pas de fermeture automatique
                closable: true
            });
        }

        function showToastWithActions() {
            Toast.show({
                type: 'success',
                title: 'Fichier sauvegardé',
                message: 'Voulez-vous l\'ouvrir maintenant ?',
                actions: [
                    { 
                        text: 'Ouvrir', 
                        onClick: (id) => {
                            console.log('Ouverture du fichier...');
                            Toast.success('Ouvert!', 'Le fichier a été ouvert.');
                        }, 
                        primary: true 
                    },
                    { 
                        text: 'Plus tard', 
                        onClick: (id) => {
                            console.log('Action reportée');
                        }
                    }
                ]
            });
        }

        function showLongToast() {
            Toast.show({
                type: 'warning',
                title: 'Traitement en cours',
                message: 'Cette opération peut prendre plusieurs minutes. Veuillez patienter...',
                duration: 10000, // 10 secondes
                progress: true
            });
        }

        function showMultipleToasts() {
            setTimeout(() => Toast.info('Toast 1', 'Premier toast'), 0);
            setTimeout(() => Toast.success('Toast 2', 'Deuxième toast'), 200);
            setTimeout(() => Toast.warning('Toast 3', 'Troisième toast'), 400);
            setTimeout(() => Toast.error('Toast 4', 'Quatrième toast'), 600);
        }

        function showPositionToast() {
            Toast.info('Position Test', 'Toast affiché dans la position sélectionnée.');
        }

        function setPosition(position) {
            // Mettre à jour l'interface
            document.querySelectorAll('.position-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`[data-position="${position}"]`).classList.add('active');
            
            // Changer la position
            Toast.setPosition(position);
        }

        // Exemples automatiques au chargement
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                Toast.info('Bienvenue!', 'Système de toast chargé avec succès.');
            }, 1000);
        });
    </script>