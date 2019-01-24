db.getCollection('zips').aggregate(
[
{
    $group: {
        _id: "$state",
        poblacionMinima: {$min: "$pop"}
        }
    },{
        $project: {
            _id: 1,
            poblacionMinima: 1,
            abandonado: {
                $eq: [ "$poblacionMinima", 0 ]
                }
            }
        }
])