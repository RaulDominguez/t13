$(document).ready(function () {
    $("#lista").click(function () {
      $.ajax( {
        url: "https://andreihelo-restful-api.herokuapp.com/students",
        success: function(result, status, xhr) {
          $("#contenido").text(JSON.stringify(result))
        }
      });
    });

    $("#agregar").click(function () {
      var estudiante = {
        "registration_number" : $("#matri").val() ,
        "name"                : $("#nombre").val() ,
        "last_name"           : $("#apell").val() ,
        "status"              : $("#cond").val()
      };

      $.ajax( {
        url: "https://andreihelo-restful-api.herokuapp.com/students",
        method: "POST",
        data: estudiante,
        success: function(result, status, xhr) {
          //$("#contenido").html(result);
          $("#contenido").text(JSON.stringify(result))
        }
      });
    });
    $("#eliminar").click(function () {
      var ide = $("#id").val();

      $.ajax( {
        url: "https://andreihelo-restful-api.herokuapp.com/students/"+ide,
        _method: "DELETE",
        success: function(result, status, xhr) {
          //$("#contenido").html(result);
          alert("Se ha eliminado con exito");
      }
      });
    });
    $("#modificar").click(function () {
      var ide = $("#id").val();
      var estudiante = {
        "registration_number" : $("#matri").val() ,
        "name"                : $("#nombre").val() ,
        "last_name"           : $("#apell").val() ,
        "status"              : $("#cond").val()
      };

      $.ajax( {
        url: "https://andreihelo-restful-api.herokuapp.com/students/"+ide,
        _method: "PUT",
        data: estudiante,
        success: function(result, status, xhr) {
          $("#contenido").text(JSON.stringify(result))
          alert("Se ha modificado con exito");
      }
    });
    });
});
