db.personas.find(
{"edad": 32,"nombre": "Juan"},
{"nombre": 1, "edad":1, "_id": 0} //filtramos los campos que queremos que traiga, con el 0 indicamos que no queremos dicho campo
)