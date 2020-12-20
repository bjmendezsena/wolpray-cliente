import { AUTORIZAR } from "../Components/Constantes";

export function checkUsuario(role) {

    let init = JSON.parse(localStorage.getItem('user')) || { logged: false };
    if (!AUTORIZAR) {
        init.role = 9;
        init.id = ''
        init.token = '';
    }

    if (role <= init.role) {
        return {
            id: init.id,
            role: init.role,
            token: init.token
        };
    } else {
        //******************    window.history.back();    //solucion 1
        window.location.href = '/login/';
    }
}



// function init() {
//     return JSON.parse(localStorage.getItem('user')) || { logged: false };
// }


