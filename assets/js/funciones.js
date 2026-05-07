

const agregarmiembro=async()=>{

    var nombre=document.querySelector("#nombre").value;
  
    var precio=document.querySelector("#precio").value;
  
    var cant=document.querySelector("#cant").value;
  
    var pro=document.querySelector("#pro").value;
  
  
  
    var uni=document.querySelector("#uni").value;
  
    var cate=document.querySelector("#cate").value;
  
  
  
  
  
  
  
  
    if(nombre.trim()===''||
  
    precio.trim()===''||
  
    cant.trim()===''||
  
    pro.trim()===''||
  
    uni.trim()===''||
  
    cate.trim()===''){
  
        Swal.fire({
  
            icon: 'error',
  
            title: 'ERROR',
  
            text: 'FALTA LLENAR CAMPOS!',
            footer: 'CRUD '
  
          })
  
          return;
  
  
  
    }
  
    
  
  
  
    const datos=new FormData();
  
  
  
    datos.append("nombre",nombre);
  
    datos.append("precio",precio);
  
    datos.append("cant",cant);
  datos.append("pro",pro)
    datos.append("uni",uni);
  
    datos.append("cate",cate);
   
  
    
  
  
  
    var respuesta=await fetch("agregar.php",{
  
        method:'POST',
  
        body:datos
  
    });
  
  
  
    var resultado=await respuesta.json();
  
  
  
    if(resultado.success==true){
  
        Swal.fire({
  
            icon: 'success',
  
            title: 'EXITO',
  
            text: resultado.mensaje,
  
            footer: 'CRUD '
  
          })
  
          document.querySelector("#formAgregar").reset();
  
          
  
  
  
    }else{
  
        Swal.fire({
  
            icon: 'error',
  
            title: 'ERROR',
  
            text: resultado.mensaje,
  
            footer: 'CRUD '
  
          })
  
    }
  
  document.querySelector("#agregarModal").click();
  
  cargarProductos();
  
  }