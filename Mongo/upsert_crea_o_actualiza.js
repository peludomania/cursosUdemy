/*
var blog = db.blog.findOne({"URL" : "www.pruebas.com"})

if (blog) {
    blog.visitas++;
    db.blog.save(blog)
} else {
    db.blog.save({"URL" : "www.pruebas.com", "visitas": 1})
}
*/

// este codigo de abajo se igual que el d e arriba
db.blog.update({"URL" : "www.pruebas.com"}
    ,{"$inc": {
                "visitas": 1
        }
    },
    true // este campo es el upsert, si no existe el registro que buscamos, se crea
)

