#!/bin/bash


echo "Aplicando migraciones..."
npx prisma migrate deploy

# Inicia la aplicación
echo "Iniciando el servidor..."
npm start