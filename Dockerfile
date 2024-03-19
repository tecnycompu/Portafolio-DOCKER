# Usa una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Expone el puerto en el que se ejecuta la aplicación Next.js
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["npm", "start"]