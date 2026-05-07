

let dataTable;
let dataTableIsInitialized = false;

let dataTableOptions = {
  dom: 'Bfrtilp',
  buttons: [
    {
      extend: 'excelHtml5',
      text: '<i class="fas fa-file-excel"></i> ',
      titleAttr: 'Exportar a Excel',
      className: 'btn btn-success',
    },
    {
      extend: 'pdfHtml5',
      text: '<i class="fas fa-file-pdf"></i> ',
      titleAttr: 'Exportar a PDF',
      className: 'btn btn-danger',
    },
    {
      extend: 'print',
      text: '<i class="fa fa-print"></i> ',
      titleAttr: 'Imprimir',
      className: 'btn btn-info',
    },
  ],
  lengthMenu: [5, 10, 15, 20, 100],
  columnDefs: [
    { className: 'centered', targets: [0, 1, 2, 3, 4, 5, 6] },
    { orderable: false, targets: [5,6] },
        { searchable: false, targets: [2] },
   // { width: '20%', targets: [2] },
  ],
  pageLength: 3,
  destroy: true,
  language: {
    processing: 'Procesando...',
    lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
    emptyTable: 'Ningún dato disponible en esta tabla',
    infoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
    
    infoFiltered: "(filtrados desde _MAX_ registros totales)",
    search: "Buscar:",
    infoThousands: ',',
    loadingRecords: "Cargando...",
    paginate: {
        first: "Primero",
        last: "Último",
        next: "Siguiente",
        previous: "Anterior"
    },
    aria: {
      sortAscending: ': Activar para ordenar la columna de manera ascendente',
      sortDescending: ': Activar para ordenar la columna de manera descendente',
    },
    buttons: {
      copy: 'Copiar',
      colvis: 'Visibilidad',
      collection: 'Colección',
      colvisRestore: 'Restaurar visibilidad',
      copyKeys:
        'Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br /> <br /> Para cancelar, haga clic en este mensaje o presione escape.',
      copySuccess: {
        1: 'Copiada 1 fila al portapapeles',
        _: 'Copiadas %ds fila al portapapeles',
      },
      copyTitle: 'Copiar al portapapeles',
      csv: 'CSV',
      excel: 'Excel',
      pageLength: {
        '-1': 'Mostrar todas las filas',
        _: 'Mostrar %d filas',
      },
      pdf: 'PDF',
      print: 'Imprimir',
      renameState: 'Cambiar nombre',
      updateState: 'Actualizar',
      createState: 'Crear Estado',
      removeAllStates: 'Remover Estados',
      removeState: 'Remover',
      savedStates: 'Estados Guardados',
      stateRestore: 'Estado %d',
    },
    autoFill: {
      cancel: 'Cancelar',
      fill: 'Rellene todas las celdas con <i>%d</i>',
      fillHorizontal: 'Rellenar celdas horizontalmente',
      fillVertical: 'Rellenar celdas verticalmentemente',
    },
    decimal: ',',
    searchBuilder: {
      add: 'Añadir condición',
      button: {
        1: 'Constructor de búsqueda',
        _: 'Constructor de búsqueda (%d)',
      },
      clearAll: 'Borrar todo',
      condition: 'Condición',
      conditions: {
        date: {
          after: 'Despues',
          before: 'Antes',
          between: 'Entre',
          empty: 'Vacío',
          equals: 'Igual a',
          notBetween: 'No entre',
          notEmpty: 'No Vacio',
          not: 'Diferente de',
        },
        number: {
          between: 'Entre',
          empty: 'Vacio',
          equals: 'Igual a',
          gt: 'Mayor a',
          gte: 'Mayor o igual a',
          lt: 'Menor que',
          lte: 'Menor o igual que',
          notBetween: 'No entre',
          notEmpty: 'No vacío',
          not: 'Diferente de',
        },
        string: {
          contains: 'Contiene',
          empty: 'Vacío',
          endsWith: 'Termina en',
          equals: 'Igual a',
          notEmpty: 'No Vacio',
          startsWith: 'Empieza con',
          not: 'Diferente de',
          notContains: 'No Contiene',
          notStartsWith: 'No empieza con',
          notEndsWith: 'No termina con',
        },
        array: {
          not: 'Diferente de',
          equals: 'Igual',
          empty: 'Vacío',
          contains: 'Contiene',
          notEmpty: 'No Vacío',
          without: 'Sin',
        },
      },
      data: 'Data',
      deleteTitle: 'Eliminar regla de filtrado',
      leftTitle: 'Criterios anulados',
      logicAnd: 'Y',
      logicOr: 'O',
      rightTitle: 'Criterios de sangría',
      title: {
        1: 'Constructor de búsqueda',
        _: 'Constructor de búsqueda (%d)',
      },
      value: 'Valor',
    },
    searchPanes: {
      clearMessage: 'Borrar todo',
      collapse: {
        1: 'Paneles de búsqueda',
        _: 'Paneles de búsqueda (%d)',
      },
      count: '{total}',
      countFiltered: '{shown} ({total})',
      emptyPanes: 'Sin paneles de búsqueda',
      loadMessage: 'Cargando paneles de búsqueda',
      title: 'Filtros Activos - %d',
      showMessage: 'Mostrar Todo',
      collapseMessage: 'Colapsar Todo',
    },
    select: {
      cells: {
        2: '1 celda seleccionada',
        _: '%d celdas seleccionadas',
      },
      columns: {
        2: '1 columna seleccionada',
        _: '%d columnas seleccionadas',
      },
      rows: {
        2: '1 fila seleccionada',
        _: '%d filas seleccionadas',
      },
    },
    thousands: '.',
    datetime: {
      previous: 'Anterior',
      next: 'Proximo',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos',
      unknown: '-',
      amPm: ['AM', 'PM'],
      months: {
        0: 'Enero',
        1: 'Febrero',
        10: 'Noviembre',
        11: 'Diciembre',
        2: 'Marzo',
        3: 'Abril',
        4: 'Mayo',
        5: 'Junio',
        6: 'Julio',
        7: 'Agosto',
        8: 'Septiembre',
        9: 'Octubre',
      },
      weekdays: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    },
    editor: {
      close: 'Cerrar',
      create: {
        button: 'Nuevo',
        title: 'Crear Nuevo Registro',
        submit: 'Crear',
      },
      edit: {
        button: 'Editar',
        title: 'Editar Registro',
        submit: 'Actualizar',
      },
      remove: {
        button: 'Eliminar',
        title: 'Eliminar Registro',
        submit: 'Eliminar',
        confirm: {
          _: '¿Está seguro que desea eliminar %d filas?',
          2: '¿Está seguro que desea eliminar 1 fila?',
        },
      },
      error: {
        system:
          'Ha ocurrido un error en el sistema (<a target="\\" rel="\\ nofollow" href="\\">Más información&lt;\\/a&gt;).</a>',
      },
      multi: {
        title: 'Múltiples Valores',
        info: 'Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aquí, de lo contrario conservarán sus valores individuales.',
        restore: 'Deshacer Cambios',
        noMulti:
          'Este registro puede ser editado individualmente, pero no como parte de un grupo.',
      },
    },
    info: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
    stateRestore: {
      creationModal: {
        button: 'Crear',
        name: 'Nombre:',
        order: 'Clasificación',
        paging: 'Paginación',
        search: 'Busqueda',
        select: 'Seleccionar',
        columns: {
          search: 'Búsqueda de Columna',
          visible: 'Visibilidad de Columna',
        },
        title: 'Crear Nuevo Estado',
        toggleLabel: 'Incluir:',
      },
      emptyError: 'El nombre no puede estar vacio',
      removeConfirm: '¿Seguro que quiere eliminar este %s?',
      removeError: 'Error al eliminar el registro',
      removeJoiner: 'y',
      removeSubmit: 'Eliminar',
      renameButton: 'Cambiar Nombre',
      renameLabel: 'Nuevo nombre para %s',
      duplicateError: 'Ya existe un Estado con este nombre.',
      emptyStates: 'No hay Estados guardados',
      removeTitle: 'Remover Estado',
      renameTitle: 'Cambiar Nombre Estado',
    },
  },
};

const initDataTable = async () => {
  if (dataTableIsInitialized) {
    dataTable.destroy();
  }

  await cargar();

  dataTable = $('#example').DataTable(dataTableOptions);

  dataTableIsInitialized = true;
};

const cargar = async () => {
  try {
  
    const respuesta=await fetch("../Config/cargarMiembros.php",{});

  
    const resultado=await respuesta.json();

    console.log(resultado);
    
    
    
    let content = ``;
    resultado.data.forEach(fila=>{
      let fechaF=fila[5];
    let fechaA=new Date();
    fechaA=fechaA.getFullYear()+'-'+('0'+(fechaA.getMonth()+1)).slice(-2)+'-'+('0'+fechaA.getDate()).slice(-2);
    console.log(fechaA);
    console.log(fechaF);
    let estado="";
    if (fechaF<fechaA) {
       estado="<i><svg  width='18' height='18' viewBox='0 0 48 48'><path fill='red' fill-rule='evenodd' d='M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-27.778 7.778a1 1 0 0 1 0-1.414L22.586 24l-6.364-6.364a1 1 0 0 1 1.414-1.414L24 22.586l6.364-6.364a1 1 0 0 1 1.414 1.414L25.414 24l6.364 6.364a1 1 0 0 1-1.414 1.414L24 25.414l-6.364 6.364a1 1 0 0 1-1.414 0' clip-rule='evenodd'/></svg></i>Vencido";
    } else {
      estado="<i><svg  width='18' height='18' viewBox='0 0 48 48'><path fill='green' fill-rule='evenodd' d='M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m10.742-26.33a1 1 0 1 0-1.483-1.34L21.28 29.567l-6.59-6.291a1 1 0 0 0-1.382 1.446l7.334 7l.743.71l.689-.762z' clip-rule='evenodd'/></svg></i>Activo";
    }
      content += `
                <tr>
                    <td>${fila[0]}</td>

    <td><img   id="imgMiembro" src="${fila[6]}" ></img> <style>
    #imgMiembro{
    width:70px;
    }
    </style></td>

    <td>${fila[1]}</td>

    <td>${fila[2]}</td>

     <td>${fila[3]}</td>

    <td>${fila[4]}</td>

     <td>${fila[5]}</td>

 <td>${estado}</td>
                    
                    <td>
                        <button class="btn btn-sm btn-primary" tabindex="0" class="btn btn-lg btn-dark" role="button" data-toggle="popover" data-trigger="hover"
                    title="EDITAR" data-content="And here´s some amazing content. It's very engaging. Rigth?"  data-bs-toggle="modal" data-bs-target="#editarM" onclick="cargarMiem(${fila[0]});"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><mask id="lineMdCloudUploadLoop0"><g fill="#fff"><circle cx="12" cy="10" r="6"/><rect width="9" height="7" x="8" y="13"/><rect width="15" height="12" x="1" y="8" rx="6"><animate attributeName="x" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"/></rect><rect width="13" height="10" x="10" y="10" rx="5"><animate attributeName="x" dur="19s" repeatCount="indefinite" values="10;9;10;11;10"/></rect></g><rect width="4" height="5" x="10" y="12"/><path d="M12 8L17 13H7L12 8Z"><animateMotion calcMode="linear" dur="1.5s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0v-1v2z" repeatCount="indefinite"/></path></mask><rect width="24" height="24" fill="black" mask="url(#lineMdCloudUploadLoop0)"/></svg>
                    </button>
                        <button class="btn btn-sm btn-danger" tabindex="0" class="btn btn-lg btn-dark" role="button" data-toggle="popover" data-trigger="hover"
                    title="Eliminar" data-content="And here´s some amazing content. It's very engaging. Rigth?" onclick="eliminarMiembro(${fila[0]});"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="black" d="M7 3h2a1 1 0 0 0-2 0M6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5"/></svg>
                    </button>
                    </td>
                </tr>`;
             
    });
    miembros.innerHTML = content;
  } catch (error) {
    alert(error);
  }
};

window.addEventListener('load', async () => {
  await initDataTable();
});
//////////////carga










const cargarPerfil = async () => {
   

    try {
        let respuesta = await fetch("php/usuario.php", { method: 'POST', body: datos });
        if (!respuesta.ok) {
            throw new Error('Network response was not ok');
        }
        let json = await respuesta.json();

        if (json.success === true) {
            document.getElementById("email").innerHTML = json.usuario;
            document.getElementById("nombre").value = json.nombre;
            document.getElementById("ap").value = json.apellido;
            if (json.foto.trim() !== '') {
                document.getElementById("foto-preview").innerHTML = `<img src="php/${json.foto.trim()}" class="foto-perfil">`;
                document.getElementById("foto-preview1").innerHTML = `<img src="php/${json.foto.trim()}" class="profile-photo">`;
            } else {
                document.getElementById("foto-preview").innerHTML = '';
                document.getElementById("foto-preview1").innerHTML = '';
            }
        } else {
            Swal.fire({ title: "ERROR", text: json.mensaje, icon: "error" });
        }
    } catch (error) {
        Swal.fire({ title: "ERROR", text: "Error al cargar el perfil", icon: "error" });
    }
}


const cargarMiem = async (id) => {
  
  const datos=new FormData();

  datos.append("id",id);

      var respuesta=await fetch("../Config/cargarMiembro.php",{

        method:'POST',

        body:datos

    });

  

    var resultado=await respuesta.json();

console.log(id);
console.log(resultado);
let ruta=resultado.img;




let divisiones=ruta.split("/");
let nombreArchivo= divisiones.pop();

    document.querySelector("#id").value=resultado.id;
console.log(resultado.id);
    document.querySelector("#nom").value=resultado.nom;

    document.querySelector("#ap").value=resultado.ap;

    document.querySelector("#num").value=resultado.tel;

    document.querySelector("#inicio").value=resultado.inicio;


    let imgInput=document.querySelector("#imgInput");
    let imgPreview=document.querySelector("#imgPreview");
    
    if(resultado.img){
      imgPreview.src=resultado.img;
    
    } 

    document.querySelector("#imgPreview").style.display="block";

   

}





const addmiem=async()=>{



   
    

    var nombre=document.querySelector("#nom").value;
  
    var ap=document.querySelector("#ap").value;
  
    var num=document.querySelector("#num").value;

    var membresia=document.querySelector("#membresia").value

  console.log(membresia);

    var estado="desactivado";
    var estado="Activo";
   
    let inicio=document.querySelector("#fechainicio").value;   
    let partes=inicio.split('-');
          let fechaI=new Date(Number(partes[0]),Number(partes[1])-1,Number(partes[2]));
        
    
    
    
    
    let fechaFinal=new Date(fechaI);
    
    fechaFinal.setTime(fechaI.getTime()+(membresia*24*60*60*1000));
    
    
    
    //fechas q se usaran
    
    let fInicio=fechaI.getFullYear()+'-'+('0'+(fechaI.getMonth()+1)).slice(-2)+'-'+('0'+fechaI.getDate()).slice(-2);
    let Final=fechaFinal.getFullYear()+'-'+('0'+(fechaFinal.getMonth()+1)).slice(-2)+'-'+('0'+fechaFinal.getDate()).slice(-2);
    
    
    //jalar imagen

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

  
  
  if(nombre.trim()===''||
  
  ap.trim()===''||

num.trim()===''||

membresia.trim()==='') {
    
  Swal.fire({
  
    icon: 'error',

    title: 'ERROR',

    text: 'FALTA LLENAR CAMPOS!',
    footer: 'TITANES GYM '

  })

  return;


 
  
   
        
  
  
  
    }else{
     


    
      console.log(nombre);
      console.log(num);
      console.log(inicio);
      console.log(membresia);
      console.log(ap);
      console.log(img);
    //aqui creo la fecha final 
    console.log(fInicio);
      
console.log(Final);










    console.log(file);

  

const datos=new FormData();
  

  
  datos.append("nom",nombre);

  datos.append("ap",ap);

  datos.append("num",num);

  datos.append("inicio",fInicio);

  datos.append("final",Final);

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
    


const eliminarMiembro=(id)=>{

    Swal.fire({
  
      title: '¿Estás seguro de eliminar el miembro?',
  
      showDenyButton: true,
  
      confirmButtonText: 'SI',
  
      denyButtonText: `NO`,
  
    }).then(async(result) => {
  
      if (result.isConfirmed) {
  
        const datos=new FormData();
  
    datos.append("id",id);
    datos.append("action", "eliminar");

    try {
        let respuesta = await fetch("../Models/miembros.php", { method: 'POST', body: datos });
        if (!respuesta.ok) {
            throw new Error('Network response was not ok');
            
        }
        let json = await respuesta.json();
  
  
    
  
  
    
        const mytimeout=setTimeout(10) ;
  
        if (json.success === true) {
  
          Swal.fire({
  
              icon: 'success',
  
              title: 'EXITO',
  
              text: respuesta.mensaje  ,

  
              footer: 'TITANES GYM '
  
             
            });mytimeout
  
            
            window.location.href = "./miembro.html";
      
      
          
            
  
    
  
      }else{
  
          Swal.fire({
  
              icon: 'error',
  
              title: 'ERROR',
  
              text: respuesta.mensaje,
  
              footer: 'TITANES GYM '
  
            })
  
      }
  
     
  
  
      }
     catch (error) {
        Swal.fire({ title: "ERROR", text: "Error al cargar los datos", icon: "error" });
    }
  
  
      }
  
  
    });
}

const cargarMem = async () => {
  
  try {

    const respuesta=await fetch("../Config/cargarMembresias.php",{});


   resultadoMem=await respuesta.json();

  console.log(resultadoMem);

  
      let option = "";

     
      resultadoMem.data.forEach(nom=>{
          
      option += `<option value="${nom[2]}">${nom[1]}</option>`;
    
  });

  membresia.innerHTML = option;

} catch (error) {
  alert(error);
}
}




  
  const editarmiem=async()=>{
  
    var nombre=document.querySelector("#nom").value;
  
    var ap=document.querySelector("#ap").value;
  
    var num=document.querySelector("#num").value;

    var membresia=document.querySelector("#membresia").value;

    var id=document.querySelector("#id").value;
  console.log(membresia);

    var estado="desactivado";
    var estado="Activo";
   
    let inicio=document.querySelector("#inicio").value;   
    let partes=inicio.split('-');
          let fechaI=new Date(Number(partes[0]),Number(partes[1])-1,Number(partes[2]));
        
    
    
    
    
    let fechaFinal=new Date(fechaI);
    
    fechaFinal.setTime(fechaI.getTime()+(membresia*24*60*60*1000));
    
    
    
    //fechas q se usaran
    
    let fInicio=fechaI.getFullYear()+'-'+('0'+(fechaI.getMonth()+1)).slice(-2)+'-'+('0'+fechaI.getDate()).slice(-2);
    let Final=fechaFinal.getFullYear()+'-'+('0'+(fechaFinal.getMonth()+1)).slice(-2)+'-'+('0'+fechaFinal.getDate()).slice(-2);
    
    
    //jalar imagen

    let fileInput=document.getElementById('imgInput');
    let file="";
   file= fileInput.files[0];

    if(file===undefined){
      Swal.fire({

        icon: 'error',

        title: 'ERROR',

        text: 'No selecciono imagen',

        footer: 'TITANES GYM '

      })

    }

  
  
  if(nombre.trim()===''||
  
  ap.trim()===''||

num.trim()===''||

membresia.trim()==='') {
    
  Swal.fire({
  
    icon: 'error',

    title: 'ERROR',

    text: 'FALTA LLENAR CAMPOS!',
    footer: 'TITANES GYM '

  })

  return;


 
  
   
        
  
  
  
    }else{
     


    
      console.log(nombre);
      console.log(num);
      console.log(inicio);
      console.log(membresia);
      console.log(ap);
      console.log(img);
    //aqui creo la fecha final 
    console.log(fInicio);
      
console.log(Final);










    console.log(file);

  

const datos=new FormData();
  

datos.append("id",id);
  
  datos.append("nom",nombre);

  datos.append("ap",ap);

  datos.append("num",num);

  datos.append("inicio",fInicio);

  datos.append("final",Final);

  datos.append("foto",file);
 
console.log();
  


  datos.append("action", "actualizar");
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

      });

      document.querySelector("#actualizar").reset();
      window.location.href = "./miembro.html";


      



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
  
  