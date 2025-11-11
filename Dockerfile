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

# Crear directorio para la base de datos si no existe
RUN mkdir -p database

# Exponer el puerto
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["node", "server.js"]
