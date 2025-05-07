function showAlert(message) {
    alert(message);
}

function biometricLogin() {
    alert("Simulation de connexion avec Face ID/Touch ID. Authentification réussie !");
    window.location.href = 'home.html';
}

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}