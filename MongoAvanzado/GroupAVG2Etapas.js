db.getCollection('zips').aggregate([
    {
        $group: {
            _id:  { //esto devuelve un identificador compuesto
                    estado: "$state",
                    ciudad: "$city"
                },
            poblacion: { $sum: "$pop" }
       } 
    }, {
        $group: {
                _id: "$_id.estado", //hace referencia al campo estado de la anterior etapa
                poblacionMedia: { $avg: "$poblacion" } //referencia al campo poblacion de la anterior etapa
            }
        }
])