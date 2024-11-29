let cedula = document.getElementById("dato1").innerHTML;
let nombre = document.getElementById("dato2").innerHTML;
let apellido = document.getElementById("dato3").innerHTML;

function comprobar(){    


    
    if(cedula.length == 0 || nombre.length == 0 || apellido.length == 0){

        document.getElementById("label").innerHTML="Datos Incompletos";

    } else{
        document.getElementById("label").innerHTML="Datos Completos";
    }

}
