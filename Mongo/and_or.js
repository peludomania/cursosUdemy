db.personas.find({
    "$and": [{ //podemos poner $and o $or para hacer lo contrario
        "nombre": /^J/ // todos los que empiezen por J
    },
    {
        "edad": 34 //y tengan 34
        }
]
})
    