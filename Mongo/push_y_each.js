db.blog.update({"_id": ObjectId("5be1cfd6cad524f9f52512d6")},
{
    "$push": 
    {
        "comentarios":  {
            "$each" : [
                {
                "nombre": "Pedro",
                "contenido": "esto es un comentario agregado",
                "email": "pedro@ejemplo.com"
                },
                {
                "nombre": "Alberto",
                "contenido": "esto es un comentario agregado",
                "email": "alberto@ejemplo.com"
                }
                ]
            }
    }
}
)
    