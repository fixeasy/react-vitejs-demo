import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: "react-vitejs-demo",
    server: {
        host: true, // Nécessaire pour le mappage des ports dans Docker
        port: 5173, // Port sur lequel Vite écoute
        strictPort: true, // Échec si le port est déjà utilisé
        watch: {
            usePolling: true, // Utile pour les environnements comme WSL
        },
    },
});