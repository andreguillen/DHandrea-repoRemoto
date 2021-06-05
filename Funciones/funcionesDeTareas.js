
let fs = require ("fs"); // importo libreria para leer archivos de texto
const fileLocation ="./tareas.json"

function listarTareas(tareas){
    tareas.forEach(function(elemento){
        console.log("La tarea con codigo: "+elemento.Codigo+" --- titulo: "+elemento.Titulo+ ", esta en estado: "+elemento.Estado);
    });
    console.log("=====================================")
}
//modules.exports=imprimirTareas

function agregarTarea(tareas, nuevaTarea){// esta funcion me va a sobreescribir el archivo tareas
    tareas.push(nuevaTarea)// este push va a hacer que cuando le indique la nueva tarea, me la agregue al array del Json
    fs.writeFileSync(fileLocation,JSON.stringify(tareas,null, ""));
    /*JSON.stringify(tareas,null, "")); se hace para ordenar el array de objetos uno debajo del otro.
    el stringify me pasa el js al Json*/
    //TODO Agregar control para evitar el ingreso de tareas duplicadas
    //TODO mejora: hacer que el codigo se auto genere basado en el ultimo codigo ingresado
}




function borrarTarea(tareas,cod){
    let tareas2 = tareas.filter(function(elemento){
        return elemento.Codigo!=cod;/* en este caso con el != cod le digo que me 
        filtre y me traiga todo el array que tenga código distinto de ese codigo que le paso
        de esta manera borro una tarea*/ 

});
fs.writeFileSync(fileLocation,JSON.stringify(tareas2,null, ""));
    
return tareas2;
}

function tareasEstado(tareas,est){
    let tareas2 = tareas.filter(function(elemento){
        return elemento.Estado==est;
    });
    return tareas2;
}

module.exports = {listarTareas, agregarTarea, borrarTarea, tareasEstado};

// Seguir viendo el video de la clase grabada desde el minuto 42