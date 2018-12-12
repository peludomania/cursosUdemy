db.posts.createIndex({"autor.nombre": 1}, {"background": true}) //crea el indice en back ground
db.posts.createIndex({"autor.email": 1}, {"unique": true, "dropdups": true})// el indice que crea tiene que ser unico. 
//dropdups es para que si hay un duplicado se queda solo con el primero, elimina el resto