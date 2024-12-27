# Utiliser l'image officielle Node.js (dernière version stable)
FROM node:latest

# Créer un répertoire dans le conteneur pour l'application
WORKDIR /app

# Copier le package.json et package-lock.json (si disponibles) pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source local dans le conteneur
COPY . .

# Exposer le port
EXPOSE 5173

# Démarrer l'application React
CMD ["npm", "run","dev"]
