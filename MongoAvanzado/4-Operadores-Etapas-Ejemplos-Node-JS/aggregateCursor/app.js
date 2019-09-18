var MongoClient = require('mongodb').MongoClient;

// Conectar con el servidor
MongoClient.connect('mongodb://localhost:37017/curso', function(err, db) {
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
	var cursor = db.collection('zips').aggregate( etapas , { cursor : { batchSize : 100 } } );
	// Mostrar el resultado 
	cursor.each( function(err, doc) {
		
		if(err) throw err;
		
		if (doc == null) {
			// Cerrar la conexión
			db.close();
		}
		else {
			console.log("Estado: " + doc._id);
			console.log("Ciudad: " + doc.ciudad);
			console.log("Población: " + doc.poblacion + "\n");
		}
	});
});
