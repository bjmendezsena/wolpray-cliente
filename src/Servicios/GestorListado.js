import { LPPAGINA } from "../Components/Constantes";




export default class GestorListado {

    constructor(ruta,lector) {
        this.offset = "?_size=" + LPPAGINA;   //lineas por página
        this.clasificador = "";              //columna por la que se desea clasificar
        this.clasSen = 1;                   //sentido clasificacion 1 ascendente -1 descendente
        this.ruta = ruta;                   //Ruta BASICA de llamada a la api
        this.lector = lector;
    }

    terminaURLlistado = () => {
        let url = this.ruta + this.offset;
        if (this.clasificador !== "") {
            url += "&_class=" + this.clasificador + ",";
            url += this.clasSen > 0 ? "ASC" : "DESC"
        }
        //console.log("preparada->", url)
        return url
    }
    /**
         * funcion para controlar la clasificacion, si se pulsa
         * en una columna clasificada, se invierte el signo de clasificacion
         * @param {nombre del campo por el que se quiere clasificar} clasi 
         */
    setClasificador = (clasi) => {
        if (this.clasificador === clasi) {     //invierte orden clasificacion
            this.clasSen = -this.clasSen
        } else {
            this.clasSen = 1;
            this.clasificador = clasi
        }
    }
    return

    /**
     * funcion para gestionar el movimiento de paginas
     * @param {numero de la pagina a mostrar} ajuste 
     */
    // pageHandler = (ajuste) => {
    //     this.offset = ajuste;

    // }
    setSortedField = (clasi) => {
        this.setClasificador(clasi.nombre);
        this.lector();
    }
    pageHandler = (ajuste) => {
        this.offset = ajuste;
        this.lector();
    }
}