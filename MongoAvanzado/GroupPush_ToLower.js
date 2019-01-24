db.getCollection('zips').aggregate([
{
    $group: {
        _id: "$state",
        ciudades: {
            $push: {
                $toLower: "$city"
                }
            }
        }
}
]
)