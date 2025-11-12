# Dockerfile para Shamy Backend
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar el resto de los archivos
COPY . .

# Copiar explícitamente el archivo de configuración de la base de datos
COPY database/db.js database/db.js

# Exponer el puerto
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["node", "server.js"]
