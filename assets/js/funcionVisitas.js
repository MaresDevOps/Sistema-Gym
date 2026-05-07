

let dataTable;
let dataTableIsInitialized = false;

let dataTableOptions = {
  dom: 'Bfrtilp',
  buttons: [
    
  ],
  lengthMenu: [5, 20, 20, 40, 20],
  columnDefs: [
    { className: 'centered', targets: [0, 1, 2, 3, 4] },
    { orderable: false, targets: [3,4]

     },
        { searchable: false, targets: [4] },
   { width: '20%', targets: [2] },
  ],
  pageLength: 4,
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
      
      pageLength: {
        '-1': 'Mostrar todas las filas',
        _: 'Mostrar %d filas',
      },
      
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

  dataTable = $('#tablevisitas').DataTable(dataTableOptions);

  dataTableIsInitialized = true;
};

const cargar = async () => {
  try {
  
    const respuesta=await fetch("../Config/cargarVisitas.php",{});

  
    const resultado=await respuesta.json();

    console.log(resultado);
    let content = ``;
    resultado.data.forEach(fila=>{
      content += `
                <tr>
                    <td>${fila[0]}</td>

    <td>${fila[1]}</td>

    <td>${fila[2]=Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(fila[2])}</td>

    <td>${fila[3]}</td>

                    <td><i class="fa-solid fa-circle-check"></i></td>
                   
                </tr>`;
             
    });
    visitas.innerHTML = content;
  } catch (error) {
    alert(error);
  }
};

window.addEventListener('load', async () => {
  await initDataTable();
});
//////////////carga





const Nvisita=async()=>{

    var nom=document.querySelector("#nom").value;
  
    var precio=document.querySelector("#pre").value;
  
    


  
 

let fechaA=new Date();
fechaA=fechaA.getFullYear()+'-'+('0'+(fechaA.getMonth()+1)).slice(-2)+'-'+('0'+fechaA.getDate()).slice(-2);
//fechas q se usaran

  
    if(nom.trim()===''||
  
    precio.trim()===''){
  
        Swal.fire({
  
            icon: 'error',
  
            title: 'ERROR',
  
            text: 'FALTA LLENAR CAMPOS!',
            footer: 'TITANES GYM '
  
          })
  
          return;
  
  
  
    }else{
  
     

    const datos=new FormData();
  
  
  
    datos.append("nom",nom);
  
    datos.append("pre",precio);
  
    datos.append("fecha",fechaA);
 
   
  console.log(fechaA);
 
    
  
  
    datos.append("action", "agregar");
    let respuesta = await fetch("../Models/Visitas.php", { method: 'POST', body: datos });
    let json = await respuesta.json();
    if (json.success === true) {
        Swal.fire("¡SE REGISTRO CON EXITO!", json.mensaje, "success").then(() => {
            localStorage.setItem("membresia", nombre);
            document.querySelector("#formAgregar").reset();
          window.location.href = "./nuevaVisita.html";

        });
    } else {
        Swal.fire("ERROR", json.mensaje, "error");
    }
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
  
  