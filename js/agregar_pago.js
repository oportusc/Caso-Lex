// notacion abreviada
$(function () {
    $("#submit-form").click(function (event) {
        event.preventDefault();

        var fecha = $("#fecha").val();
        var nombre = $("#nombre").val();
        var hora = $("#hora").val();
        var monto = $("#monto").val();



        var fila = '<tr><th>' + fecha + '</th><th>' + nombre + '</th><th>' + hora + '</th><th>' + monto + '</th></tr>';

        $('#tablaingreso>tbody').append(fila);

        var tabla = $("#tablaingreso");
        tabla.css("background-color", "#ff8833");
     

    });

});
