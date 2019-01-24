//calcula la poblacion media de estados
db.getCollection('zips').aggregate([
    {
        $group: {
            _id: "$state",
            poblacionMedia: { $avg: "$pop" }
       } 
    }
])