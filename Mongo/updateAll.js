db.personas.update({"_id": ObjectId("5be1491ca6056d6059d03342")},
    { "$set": {
            "cumpleaños": "20/01/1991"
        }
        },
        false, //upsert para que si no lo encuentra no actualice nada
        true //para actualizar todos los registros, si le ponemos false, solo actualizara el primero
        )