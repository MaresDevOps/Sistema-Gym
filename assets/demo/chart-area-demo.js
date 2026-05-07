
const cargarMem = async () => {
  
  try {

    const respuesta=await fetch("../Config/consultamiembros.php",{});


   resultado=await respuesta.json();

  

  
      let option = "";

     
      resultado.data.forEach(nom=>{
          
      option += `<span >${nom[0]}</span>`;
    
  });

  miembrosE.innerHTML = option;

} catch (error) {
  alert(error);
}
}

