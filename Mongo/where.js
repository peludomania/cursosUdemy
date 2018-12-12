db.comida.find({"$where": 
        function() {
                for (var a in this) {// a es igual a todo el documento
                    for (var b in this) {
                        if (a != b && this[a] == this[b]) {
                            return true;// si cumple la condicion devuelve el documento
                            }
                        }
                    }
                    return false;//si no cumple la condicion no devuelve el documento
            }
    })