# Dockerfile para Shamy Backend
FROM node:18-alpine

# Instalar dependencias de compilación para better-sqlite3
RUN apk add --no-cache python3 make g++

# Establecer directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias (esto compilará better-sqlite3 correctamente)
RUN npm ci --only=production

# Copiar el resto de los archivos
COPY . .

# Copiar explícitamente el archivo de configuración de la base de datos
COPY database/db.js database/db.js

# Exponer el puerto
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["node", "server.js"]
