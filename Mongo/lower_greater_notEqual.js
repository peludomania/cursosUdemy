/*db.personas.find({"edad": {
    "$gte": 18, "$lte": 30 //mayor que 18 y menor que 30
    }})*/
    
/*    
fecha = new Date("01/01/2015");    
db.personas.find({"registro": {
"$lt": fecha //menor que la fecha indicada
}})
*/
    
db.personas.find({"nombre": {
"$ne": "Juan"// distinto de Juan
}})
    
    
    
    