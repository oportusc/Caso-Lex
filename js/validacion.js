$(document).ready(function () {
    $("#contact-formulario").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            nombreCompleto: {
                required: true,
                minlength: 3
            },
            contrasenna: {
                required: true,
                contrasenna: true
            },
            repetir: {
                required: true,
                repetir: true
            },
            region: {
                required: true,
            },
            direccion: {
                required: true,
            }
        }, messages: {
            nombre: {
                minlength: "El nombre debe contener al menos 3 caracteres"
            },
            apellido: {
                minlength: "El nombre debe contener al menos 3 caracteres"
            },
            email: {
                email: "Debe tener sintaxis de email"

            },
            comment: {
                required: "Debes llenar este campo",
            }
        }
    });
});


const form = document.getElementById("contact-formulario");

form.addEventListener("submit", function (event) {
    // ---> Esto es para que no se caiga la pagina al dar en "Enviar"
    event.preventDefault();




    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    var email = $('#email').val();
    var comment = $('#comment').val();

    // if (nombre != "" && apellido != "" && email != "" && comment != "") {
    //     alert("Formulario enviado con éxito");

    // } else {
    //     alert("Por favor rellene todos los campos.");
    // }
});
