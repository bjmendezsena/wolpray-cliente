
import swal from 'sweetalert';


export const Alerts ={
    warningMessage:warningMessage,
    successMessage:successMessage,
    infoMessage: infoMessage,
    errorMessage: errorMessage,
    questionMessage:questionMessage
}

function warningMessage(msg, title = '¡Atención!'){
    swal({
        title: title,
        text: msg,
        icon: 'warning',
        timer: 3000,
        button: 'Aceptar'
    });
}

function successMessage(msg, title = '¡Hecho!'){
    swal({
        title: title,
        text: msg,
        icon: 'success',
        timer: 3000,
        button: 'Aceptar'
    });
}
function infoMessage(msg, title = 'Información'){
    swal({
        title: title,
        text: msg,
        icon: 'success',
        timer: 3000,
        button: 'Aceptar'
    });
}

function errorMessage(msg, title = 'Ha ocurrido un error'){
    swal({
        title: title,
        text: msg,
        icon: 'error',
        timer: 3000,
        button: 'Aceptar'
    });
}

function questionMessage(msg, title = '¿Está seguro?'){
    return swal({
        title: title,
        text: msg,
        icon: 'warning',
        buttons: ["Abortar", "Si"]
    });
}

