db.getCollection('zips').aggregate([
{
    $group: {
        _id: "$state",
        ciudades: {
            $push: {
                $substr: ["$city", 0 , 5]
                }
            }
        }
}
]
)