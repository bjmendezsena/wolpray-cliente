const { MOD, DEL, VIE } = require("../Components/Constantes");

export function montaBoton(funcion, tipo, id, clase, texto) {
    <button type="button"
        class="btn {clase}"
        onclick="{funcion(tipo,id)}"
    >
        texto
        </button>
    
}
export function montaBotones(id, funcion) {
    let salida = "";
    salida += <td>montaBoton(funcion,"V",id,"btn-info",VIE)</td>
    salida += <td>montaBoton(funcion,"E",id,"btn-success",MOD)</td>
    salida += <td>montaBoton(funcion,"D",id,"btn-danger",DEL)</td>
    return salida;
}