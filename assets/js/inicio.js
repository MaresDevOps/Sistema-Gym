var sesion = localStorage.getItem('usu') || "null";
if (sesion === "null") {
    window.location.href = "../index.html";
}


var nombre = document.getElementById("nombre");
var apellido = document.getElementById("ap");

const cargarNombre = async () => {
  let datos = new FormData();
  datos.append("usu", sesion);
  datos.append("action", "select");

  try {
      let respuesta = await fetch("../Login/Usuario.php", { method: 'POST', body: datos });
      if (!respuesta.ok) {
          throw new Error('Network response was not ok');
      }
      let json = await respuesta.json();

      if (json.success === true) {
          document.getElementById("user").innerHTML = `Hola, ${json.mensaje}`;
          document.getElementById("user2").innerHTML = ` ${json.mensaje}`;
        
      } else {
          Swal.fire({ title: "ERROR", text: json.mensaje, icon: "error" });
      }
  } catch (error) {
      Swal.fire({ title: "ERROR", text: "Error al cargar los datos", icon: "error" });
  }
}


const salir= async () => {
    Swal.fire({
        title: "¿Estás seguro de cerrar sesión?",
        showDenyButton: true,
        confirmButtonText: "Sí, estoy seguro",
        denyButtonText: "No, cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            window.location.href = "../index.html";
        } 
    });
}