var MongoClient = require('mongodb').MongoClient;

// Conectar con el servidor
MongoClient.connect('mongodb://localhost:37027/curso', function(err, db) {
	if(err) throw err;

	var etapas = [ 
		{ 
			$group : { 
				_id :  {
					estado : "$state" , 
					ciudad : "$city" 
				},
				poblacion : { $sum : "$pop" } 
			}
		}, 
		{ $sort : { "_id.estado" : 1 , poblacion : -1 } },
		{
			$group : { 
				_id : "$_id.estado",
				ciudad : { $first : "$_id.ciudad" },
				poblacion : { $first : "$poblacion" }
			}
		}
	];
	// Encontrar la población más grande de cada estado
	db.collection('zips').aggregate( etapas , function(err, result) {

		if(err) throw err;

		// Mostrar el resultado 
		result.forEach( function(doc) {
			console.log("Estado: " + doc._id);
			console.log("Ciudad: " + doc.ciudad);
			console.log("Población: " + doc.poblacion + "\n");
		});

		// Cerrar la conexión
		db.close();
	});
});