db.ordenes.aggregate(
    [
        { $match: {"estado": "A"}}, //buscamos todos los que el estado sea A
        { $group: { _id: "$cliente_id", total: {$sum: "$cantidad"} } } //cliente_id es el campo del documento
    ]
)