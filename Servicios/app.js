let {listarTareas, agregarTarea, borrarTarea, tareasEstado} = require ("../Funciones/funcionesDeTareas.js"); 
/* importo las funciones
que cree en el archivo funcionesdeTareas*/
let arreglo_objs_literal = require("./tareas.json");/*aca me traigo el array de objetos*/


let nuevaTarea =
{
    "Titulo": "Controlar cambios",
    "Estado": "Pendiente",
    "Codigo": 20
};

/*!descomentar para ejecutar agregarTarea(arreglo_objs_literal,nuevaTarea);*/ /*aca le hago retornar el array
con la nueva tarea*/
agregarTarea(arreglo_objs_literal,nuevaTarea);
listarTareas(arreglo_objs_literal);

arreglo_objs_literal = borrarTarea(arreglo_objs_literal,17);
listarTareas(arreglo_objs_literal);


//listarTareas(arreglo_objs_literal);/*aca hago que me devuelva el array de titulos de tareas*/

//let d= (arreglo_objs_literal, "Pendiente");
//console.log(d);


let pendientes = tareasEstado(arreglo_objs_literal,"Pendiente")
listarTareas(pendientes);


// buscar la funcion writeFileSync para ver como funciona