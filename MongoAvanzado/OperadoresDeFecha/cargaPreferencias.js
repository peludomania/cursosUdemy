function cargaPreferencias() {
	db = db.getSiblingDB('curso');

	db.gimnasio.drop();

	var preferencias = [ "Aerobic" , "Aquagym" , "Baloncesto" , "Carrera en cinta", "Elíptica", "Musculación", "Natación", "Padel", "Spinning", "Tenis" ];
	var numeroPreferencias = preferencias.length;
	var milisegundosAnyo = 1000 * 60 * 60 * 24 * 365;

	if ( version26Post() ) {
		var cargaMasiva = db.gimnasio.initializeOrderedBulkOp();
		for ( var i = 0 ; i < 2000 ; i++ ) { 
			var preferenciasCliente = [];
			var ahora = new Date().getTime();
			var fecha = new Date( ahora - milisegundosAnyo * Math.random() );
			cargaMasiva.insert( { 
				idCliente : i + 1 , 
				fechaAlta : fecha , 
				preferencias : preferenciasCliente 
			} );
			var numeroPrefenciasCliente = Math.floor( ( 5 * Math.random() ) + 1 );
			for ( var j = 0 ; j < numeroPrefenciasCliente ; j++ ) {
				var indicePreferencias = Math.floor( numeroPreferencias * Math.random() );
				cargaMasiva.find( 
					{ idCliente : i + 1 }
				).update( 
					{ $push : { preferencias : preferencias[indicePreferencias] } } 
				)
			} 
		};
		cargaMasiva.execute();
	}
	else {
		for ( var i = 0 ; i < 2000 ; i++ ) { 
			var preferenciasCliente = [];
			var ahora = new Date().getTime();
			var fecha = new Date( ahora - milisegundosAnyo * Math.random() );
			db.gimnasio.insert( { 
				idCliente : i + 1 , 
				fechaAlta : fecha , 
				preferencias : preferenciasCliente 
			} );
			var numeroPrefenciasCliente = Math.floor( ( 5 * Math.random() ) + 1 );
			for ( var j = 0 ; j < numeroPrefenciasCliente ; j++ ) {
				var indicePreferencias = Math.floor( numeroPreferencias * Math.random() );
				db.gimnasio.update( 
					{ idCliente : i + 1 } , 
					{ $push : { preferencias : preferencias[indicePreferencias] } } 
				)
			} 
		};
	}
};

function version26Post() {
	var partesVersion = version().split( "." );
	return partesVersion[0] + partesVersion[1] >= 26;
};

cargaPreferencias();