db.getCollection('zips').aggregate([
{
    $group: {
        _id : {
            estado: "$state",
            ciudad: "$city"
            },
        buzonesCiudad: {
            $sum: {
                $let: {
                    vars: { // declaramos variables que contienen el resultado de una operacion
                        masMilHabitantes:{
                            $gt: ["$pop", 1000]
                            },
                        buzonesPorMil:{
                            $divide: ["$pop", 1000]
                            }
                        },
                      in: {
                          $cond: [ // con $$ usamos las variables definidas antes
                            "$$masMilHabitantes",
                            "$$buzonesPorMil",
                            1
                          ]
                          }
                    }
                }
            }
       }
},      {
           $group: {
               _id: "$_id.estado",
               mediaBuzonesCiudad: { $avg: "$buzonesCiudad" }
               }
           }
]
)