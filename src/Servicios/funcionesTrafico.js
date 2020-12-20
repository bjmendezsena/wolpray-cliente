let clasificacion = ""; //clasificar por campo          //campo a clasificar
let clasInversa = false;                                //Ascendente/desc
let paginaActual = 0                                    //pagina actual
/**
 *  
 * El fichero que utilice estas funciones, debe implementar los siguientes metodos
 *  
 * presentaLista   - recibe un array con todas las rows, y las puede nontar en pantalla
 * presentaUno     - recibe un objeto con un registro, y lo presenta en pantalla
 */

/**
 * Recibe la respuesta de un count y genera los enlaces de paginacion
 * en una etiqueta del HTML definida en TAG_PAGINACION
 * Depende tambien de la constante de lineas por pagina (LPPAGINA)
 * 
 * @param {} respuesta  Resultado de la llamada con la extension count (xmysql)
 */
function obtenDatos(respuesta) {
    pa = document.getElementById(TAG_PAGINACION);
    ppa = document.createElement("div");
    var registros = respuesta[0].no_of_rows;
    console.log(registros);
    cant = registros / LPPAGINA;
    for (a = 1; a < cant; a++) {
        ea = document.createElement("a");
        ea.setAttribute("href", "#");
        ea.setAttribute("onclick", "irAPagina('" + a + "')")
        ea.appendChild(document.createTextNode(a));
        ppa.appendChild(ea);
    }
    pa.appendChild(ppa);
}

//-----------------------------------------------------
//     guarda pagina que se solicita
//-----------------------------------------------------
function irAPagina(pagina) {
    if (pagina != paginaActual) {
        paginaActual = pagina;
        leerDatos(API_URL);
    }
}


//----------------------------------------
//   guarda campo de clasificacion
//----------------------------------------
function listadoClasificado(motivo) {
    if (clasificacion == motivo) {
        clasInversa = !clasInversa;
    } else {
        clasificacion = motivo;
        clasInversa = false;
    }
    leerDatos(API_URL);
}


/**
 * 
 * @param {*} parametros lista de parametros montada
 * @param {*} nombrePar Parametro a añadir
 * @param {*} valor Valor del parametro a añadir
 */
function montaParam(parametros, nombrePar, valor) {
    if (parametros != "") parametros += "&"
    parametros += nombrePar;
    parametros += "=";
    parametros += valor;
    return parametros
}

function preparaParams(parametros) {
    parametros = montaParam(parametros, "_size", LPPAGINA);
    if (clasificacion != "") {
        parametros = montaParam(parametros, "_sort", (clasInversa ? "-" : "") + clasificacion);
    }
    if (paginaActual != 0) {
        parametros = montaParam(parametros, "_p", paginaActual);
    }
    return parametros;
}
function leerDatos(url, parametros = "") {
    parametros = preparaParams(parametros);
    envia(url + "?" + parametros)
        .then(function (response) {
            presentaLista(JSON.parse(response));
        })
        .catch(function (error) {
            console.error(error);
        });
}

function gestionaUno(op, id) {
    envia(API_URL + id)
        .then(function (response) {

            presentaUno(op, JSON.parse(response)[0]);
        })
        .catch(function (error) {
            console.error(error);
        });
}

function enviaFormulario(op, objeto) {
    orden = "POST";
    id = "";
    if (op == "E") { orden = "PATCH"; id = objeto.country_id; }
    if (op == "D") { orden = "DELETE"; id = objeto.country_id; }
    //console.log(orden,objeto);
    envia(API_URL + id, orden, JSON.stringify(objeto))
        .then(function (response) {
            leerDatos(API_URL);
        })
        .catch(function (error) {
            console.error(error);
        });
}

//*****************************************************************************
//* Llamadas para carga de la página
//*****************************************************************************
// window.onload = function () {
//     console.log("inicio");
//     envia(API_URL + "count")              //consiguir el numero de registros
//         .then(function (response) {
//             obtenDatos(JSON.parse(response));
//         })
//         .catch(function (error) {
//             console.error(error);
//         });
//     leerDatos(API_URL);                 //leer datos de tabla
// }