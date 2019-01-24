// Agrupamos en un campo ciudades todas las city de un state. Si hay repetidas las suma tambien
db.getCollection('zips').aggregate([
    {
        $group: {
            _id: "$state",
            ciudades: { $push: "$city" }
            }
        }
]);
        
// Agrupamos en un campo ciudades todas las city de un state. NO añade las repetidas
db.getCollection('zips').aggregate([
    {
        $group: {
            _id: "$state",
            ciudades: { $addToSet: "$city" }
            }
        }
]);