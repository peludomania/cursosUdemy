# Notas personales sobre los cursos que voy haciendo en Udemy


----------------------------------------------------------------
Copiar archivos a contenedor docker para cargarlos en mongo

	docker cp zips.json s_mongo_1:/tmp ----- s_mongo_1 es el contenedor

	docker exec -it s_mongo_1 bash  ----- Para acceder al bash 
Una vez dentro de la consola

	mongoimport -d cursoMongo -c zips --file zips.json ---- para cargar una librería
	
	mongo localhost:27017 cargaPreferencias.js ----- para cargar un script, el fichero de ejemplo se puede ver en MongoAvanzado/OperadoresDeFecha


----------------------------------------------------------------

	docker exec -it s_mongo_1 mongo  ----- Si queremos acceder a la consola de mongo



