/*db.ventas.count({
    "item": "abc"
    })*/
/*
db.ventas.distinct(
        "item", 
        {"precio": 10} //podemos añadir una condicion al distinct
  )*/
//group   
db.ventas.aggregate(
    [{
        $group: {
            _id: {// agrupamos por mes año y dia
                mes: {$month: "$fecha"},
                dia: {$dayOfMonth: "$fecha"},
                año: {$year: "$fecha"}
            },
            precioTotal: {$sum: {$multiply:["$precio", "$cantidad"]}},
            cantidadMedia: {$avg: "$cantidad"},
            cantidad: {$sum: 1}
        }
    }]
)  