#!/bin/bash

echo "Iniciando container..."
echo "INICIADO!!" > /var/www/html/ini.html #creamos un archivo con contenido en la ruta indicada

apachectl -DFOREGROUND
