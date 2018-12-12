db.posts.find({
    "etiquetas": {
            "$all": ["programacion"]
        }
    })