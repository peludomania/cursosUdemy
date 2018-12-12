db.peliculas.update({"genero": "accion"},
{"$push": 
    {"top10": {
        "$each": [
            {"nombre": "Avatar", "valoracion": 8},
            {"nombre": "Guerra de las galaxias", "valoracion": 2},
            {"nombre": "Rambo", "valoracion": 9},
            {"nombre": "Muerte en altamar", "valoracion": 4},
            {"nombre": "Apocalipsis", "valoracion": 6},
        ]
            ,"$slice": -3 //guarda solo los tres primeros elementos
            ,"$sort": { //ordenamos por valoracion descendente  -1
                "valoracion": -1
                }
        }
    }
}
)
    