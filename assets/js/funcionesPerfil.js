var sesion = localStorage.getItem('usu') || "null";
if (sesion === "null") {
    window.location.href = "../index.html";
}


const cargarPerfil = async (id) => {
  

    let nom=document.getElementById("user2").value;
    const datos=new FormData();
  
    datos.append("nom",sesion);
  
        var respuesta=await fetch("../Config/cargarPerfil.php",{
  
          method:'POST',
  
          body:datos
  
      });
  
    
  
      var resultado=await respuesta.json();
  
 
  
  
  
  let divisiones=ruta.split("/");
  let nombreArchivo= divisiones.pop();
  
      document.querySelector("#id").value=resultado.id;
  console.log(resultado.id);
      document.querySelector("#nom").value=resultado.nom;
  
    
  
      let imgInput=document.querySelector("#imgInput");
      let imgPreview=document.querySelector("#imgPreview");
      
      if(resultado.img){
        imgPreview.src=resultado.img;
      
      } 
  
      document.querySelector("#imgPreview").style.display="block";
  
     
  
  }
  
  






const add=async()=>{
    var nom=document.getElementById("nom");
    var ap=document.getElementById("nom");
   
    let fileInput=document.getElementById('foto');
    let file=null;
   file= fileInput.files[0];

    if(file===undefined){
      Swal.fire({

        icon: 'error',

        title: 'ERROR',

        text: 'No selecciono imagen',

        footer: 'TITANES GYM '

      })

    }
    if(nom.trim()===''||
  
    ap.trim()==='') {
      
    Swal.fire({
    
      icon: 'error',
  
      title: 'ERROR',
  
      text: 'FALTA LLENAR CAMPOS!',
      footer: 'TITANES GYM '
  
    })
  
    return;
  
  
   
    
     
          
    
    
    
      }else{
       
  
  
      
       
  
  
  
  
  
  
  
  
  
  
      console.log(file);
  
    
  
  const datos=new FormData();
    
  
    
    datos.append("nom",nombre);
  
    datos.append("ap",ap);
  
    
  
    datos.append("foto",file);
   
  console.log();
    
  
  
    datos.append("action", "agregar");
    let respuesta = await fetch("../Models/miembros.php", { method: 'POST', body: datos });
    if (!respuesta.ok) {
      throw new Error('Network response was not ok');
  }
  let json = await respuesta.json();
  
    if (json.success === true) {
  
             
      Swal.fire({
  
          icon: 'success',
  
          title: 'EXITO',
  
          text: json.mensaje,
  
          footer: 'TITANES GYM '
  
        })
  
        document.querySelector("#formAgregar").reset();
        window.location.href = "./miembro.html";
  
  
        
  
  
  
  }else{
  
      Swal.fire({
  
          icon: 'error',
  
          title: 'ERROR',
  
          text: json.mensaje,
  
          footer: 'TITANES GYM '
  
        })
  
  }
    }
  }
    
  
