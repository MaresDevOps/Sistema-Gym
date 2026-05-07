
var sesion = localStorage.getItem('usu') || "null";
if (sesion !== "null") {
  window.location.href = "./Views/inicio.html";
}






const validarPassword=(pass)=>{

    return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(pass.trim()); 

}


const validarNombre=(nom)=>{

    return /^([a-z ñáéíóú]{2,60})$/i.test(nom.trim());

}


const login = async () => {

  var usu = document.querySelector("#usu").value;
  var pass = document.querySelector("#pass").value;
 

 if(usu.trim()===''||

 pass.trim()===''){

     Swal.fire({

         icon: 'error',

         title: 'ERROR',

         text: 'FALTA LLENAR CAMPOS!',

         footer: 'TITANES GYM '

       })

       return;



 }else{

 if (!validarPassword(pass)) {
    Swal.fire("ERROR", "Password no valido", "error");
    return;
}



  let datos = new FormData();
  datos.append("usu", usu);

  datos.append("pass",pass);
  datos.append("action", "login");
  let respuesta = await fetch("./Login/Usuario.php", { method: 'POST', body: datos });
  let json = await respuesta.json();

  if (json.success === true) {
      Swal.fire("¡SESION INICIADA!", json.mensaje, "success").then(() => {
          localStorage.setItem("usu", usu);
        window.location.href = "./Views/inicio.html";
      });
  } else {
      Swal.fire("ERROR", json.mensaje, "error");
  }
}
}

const Registrar = async () => {
  let gmail = document.getElementById("agmail").value;
  let pass = document.getElementById("apass").value;
  let nom = document.getElementById("anombre").value;
  let ap = document.getElementById("aap").value;
  if (gmail.trim() === "" || pass.trim() === "" || nom.trim() === "" || ap.trim() === "") {
      Swal.fire("ERROR", "Tienes campos vacíos", "error");
      return;
  }

  if (!validarCorreo(gmail)) {
      Swal.fire("ERROR", "Correo no valido", "error");
      return;
  }
  if (!validarPassword(pass)) {
      Swal.fire("ERROR", "Password no valido", "error");
      return;
  }

  let datos = new FormData();
  datos.append("gmail", gmail);
  datos.append("pass", pass);
  datos.append("nom", nom);
  datos.append("ap", ap);
  datos.append("action", "registrar");

  let respuesta = await fetch("./Login/Usuario.php", { method: 'POST', body: datos });
  let json = await respuesta.json();

  if (json.success === true) {
      Swal.fire("¡REGISTRO ÉXITOSO!", json.mensaje, "success").then(() => {
          document.getElementById("container").reset();
      });
  } else {
      Swal.fire("ERROR", json.mensaje, "error");
  }
}


