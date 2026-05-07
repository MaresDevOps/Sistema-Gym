

const consulta=async()=>{



   
    

    var I=document.querySelector("#fechaI").value;
  
    var F=document.querySelector("#fechaF").value;
  
    

  
    let partesi=I.split('-');
    let partesf=F.split('-');

          let fechaI=new Date(Number(partesi[0]),Number(partesi[1])-1,Number(partesi[2]));
          let fechaF=new Date(Number(partesf[0]),Number(partesf[1])-1,Number(partesf[2]));
        
    
    
    
    
    
    let FechaI=new Date(fechaI);
    
    let FechaF=new Date(fechaF);
    
    
 
    
    let fechaInicio=FechaI.getFullYear()+'-'+('0'+(FechaI.getMonth()+1)).slice(-2)+'-'+('0'+FechaI.getDate()).slice(-2);
    let fechaFinal=FechaF.getFullYear()+'-'+('0'+(FechaF.getMonth()+1)).slice(-2)+'-'+('0'+FechaF.getDate()).slice(-2);
    
    
   
    
  
  
  if(I.trim()===''||
  
  F.trim()==='') {
    
  Swal.fire({
  
    icon: 'error',

    title: 'ERROR',

    text: 'FALTA LLENAR CAMPOS!',
    footer: 'TITANES GYM '

  })

  return;


 
  
   
        
  
  
  
    }else{
     


    
     








  

const datos=new FormData();
  

  
  datos.append("fechaInicio",fechaInicio);

  datos.append("fechaFinal",fechaFinal);

  console.log(fechaInicio);
  console.log(fechaFinal);
  let respuesta = await fetch("../Config/dash.php", { method: 'POST', body: datos });
  if (!respuesta.ok) {
    throw new Error('Network response was not ok');
}
let json = await respuesta.json();

  if (json.success === true) {

           
    Swal.fire({

        icon: 'success',

        title: 'EXITO',

        text: respuesta.mensaje,

        footer: 'TITANES GYM '

      })


      



}else{

    Swal.fire({

        icon: 'error',

        title: 'ERROR',

        text: respuesta.mensaje,

        footer: 'TITANES GYM '

      })

}
  }
}
    

