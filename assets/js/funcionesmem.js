

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
    { className: 'centered', targets: [0, 1, 2, 3, 4] },
    { orderable: false, targets: [3,4] },
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
  
    const respuesta=await fetch("../Config/cargarMembresias.php",{});

  
    const resultado=await respuesta.json();

    console.log(resultado);
    let content = ``;
    resultado.data.forEach(fila=>{
      content += `
                <tr>
                    <td>${fila[0]}</td>

    <td>${fila[1]}</td>

    <td>${fila[2]}</td>

    <td>${fila[3]=Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(fila[3])}</td>
                    <td><i class="fa-solid fa-circle-check"></i></td>
                    <td>
                        <button class="btn btn-sm btn-primary" tabindex="0" class="btn btn-lg btn-dark" role="button" data-toggle="popover" data-trigger="hover"
                    title="EDITAR" data-content="And here´s some amazing content. It's very engaging. Rigth?"  data-bs-toggle="modal" data-bs-target="#editarModal" onclick="cargarmem(${fila[0]});"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><mask id="lineMdCloudUploadLoop0"><g fill="#fff"><circle cx="12" cy="10" r="6"/><rect width="9" height="7" x="8" y="13"/><rect width="15" height="12" x="1" y="8" rx="6"><animate attributeName="x" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"/></rect><rect width="13" height="10" x="10" y="10" rx="5"><animate attributeName="x" dur="19s" repeatCount="indefinite" values="10;9;10;11;10"/></rect></g><rect width="4" height="5" x="10" y="12"/><path d="M12 8L17 13H7L12 8Z"><animateMotion calcMode="linear" dur="1.5s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0v-1v2z" repeatCount="indefinite"/></path></mask><rect width="24" height="24" fill="black" mask="url(#lineMdCloudUploadLoop0)"/></svg>
                    </button>
                        <button class="btn btn-sm btn-danger" tabindex="0" class="btn btn-lg btn-dark" role="button" data-toggle="popover" data-trigger="hover"
                    title="Eliminar" data-content="And here´s some amazing content. It's very engaging. Rigth?" onclick="eliminarMembresia(${fila[0]});"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="black" d="M7 3h2a1 1 0 0 0-2 0M6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5"/></svg>
                    </button>
                    </td>
                </tr>`;
             
    });
    member.innerHTML = content;
  } catch (error) {
    alert(error);
  }
};

window.addEventListener('load', async () => {
  await initDataTable();
});
//////////////carga





const addmem=async()=>{

    var nombre=document.querySelector("#mem").value;
  
    var precio=document.querySelector("#pre").value;
  
    var duracion=document.querySelector("#dura").value;
  

  
  
  
  
  
  
  
  
    if(nombre.trim()===''||
  
    precio.trim()===''||
  
    duracion.trim()===''){
  
        Swal.fire({
  
            icon: 'error',
  
            title: 'ERROR',
  
            text: 'FALTA LLENAR CAMPOS!',
            footer: 'TITANES GYM '
  
          })
  
          return;
  
  
  
    }
  
    

    const datos=new FormData();
  
  
  
    datos.append("nom",nombre);
  
    datos.append("pre",precio);
  
    datos.append("dura",duracion);
 
   
  
    
  
  
    datos.append("action", "agregar");
    let respuesta = await fetch("../Models/membresias.php", { method: 'POST', body: datos });
    let json = await respuesta.json();
    if (json.success === true) {
        Swal.fire("¡SE REGISTRO CON EXITO!", json.mensaje, "success").then(() => {
            localStorage.setItem("membresia", nombre);
            document.querySelector("#formAgregar").reset();
          window.location.href = "./membresias.html";

        });
    } else {
        Swal.fire("ERROR", json.mensaje, "error");
    }
}



const eliminarMembresia=(id)=>{

    Swal.fire({
  
      title: '¿Estás seguro de eliminar la membresia?',
  
      showDenyButton: true,
  
      confirmButtonText: 'SI',
  
      denyButtonText: `NO`,
  
    }).then(async(result) => {
  
      if (result.isConfirmed) {
  
        const datos=new FormData();
  
    datos.append("id",id);
    datos.append("action", "eliminar");

    try {
        let respuesta = await fetch("../Models/membresias.php", { method: 'POST', body: datos });
        if (!respuesta.ok) {
            throw new Error('Network response was not ok');
            
        }
        let json = await respuesta.json();
  
  
    
  
  
    
  
        if (json.success === true) {
  
          Swal.fire({
  
              icon: 'success',
  
              title: 'EXITO',
  
              text: respuesta.mensaje  ,

  
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
     catch (error) {
        Swal.fire({ title: "ERROR", text: "Error al cargar los datos", icon: "error" });
    }
  
  
      }
  
  
    });
}




const cargarmem=async(id)=>{

    const datos=new FormData();

  datos.append("id",id);

      var respuesta=await fetch("../Config/cargarMembresia.php",{

        method:'POST',

        body:datos

    });

  

    var resultado=await respuesta.json();

  
      document.querySelector("#id").value=resultado.id;
  
  
      document.querySelector("#nom").value=resultado.nom;
  
      document.querySelector("#dura").value=resultado.dura;
  
      document.querySelector("#pre").value=resultado.pre;
  
    
  
  }

  
  
  const editarmem=async()=>{
  
      var id=document.querySelector("#id").value;
  
  
      var nombre=document.querySelector("#nom").value;
  
      var dura=document.querySelector("#dura").value;
  
      var pre=document.querySelector("#pre").value;
  
     
  
  
  
      if(nombre.trim()===''||
  
      pre.trim()===''||
  
      dura.trim()===''){
  
          Swal.fire({
  
              icon: 'error',
  
              title: 'ERROR',
  
              text: 'FALTA LLENAR CAMPOS!',
  
              footer: 'TITANES GYM '
  
            })
  
            return;
  
    
  
      }
  
  
  
      const datos=new FormData();
  
  datos.append("id",id);
  
      datos.append("nom",nombre);
    
      datos.append("dura",dura);
    
      datos.append("pre",pre);
  
  
    datos.append("action", "actualizar");

    try {
        let respuesta = await fetch("../Models/membresias.php", { method: 'POST', body: datos });
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
  
          document.querySelector("#actualizar").reset();
          document.querySelector("#editarModal").click();
  
          
  
  
  
    }else{
  
        Swal.fire({
  
            icon: 'error',
  
            title: 'ERROR',
  
            text: respuesta.mensaje,
  
            footer: 'TITANES GYM '
  
          })
  
    }
  
   
  
  
  

  
} catch (error) {
    Swal.fire({ title: "ERROR", text: "Error al cargar ", icon: "error" });
}
  
  }
  
  