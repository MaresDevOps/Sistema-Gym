// Función para realizar la consulta y actualizar los gráficos
function consulta2() {
  // Obtener las fechas del formulario
  var fechaInicio = document.getElementById('fechaI2').value;
  var fechaFinal = document.getElementById('fechaF2').value;

  // Aquí puedes realizar una solicitud AJAX para enviar las fechas a tu archivo PHP (consulta.php)
  $.ajax({
      type: 'POST',
      url: '../Config/dash2.php', // Ruta correcta hacia consulta.php
      data: {
          fechaInicio: fechaInicio,
          fechaFinal: fechaFinal
      },
      dataType: 'json', // Esperamos JSON como respuesta
      success: function(response) {
          // Aquí puedes procesar la respuesta y actualizar los gráficos
          if (response.success) {
              var ganancias = response.data.map(function(item) {
                  return item[0];
              });
              var fechas = response.data.map(function(item) {
                  return item[1];
              });
console.log(fechas);
console.log(ganancias);
              // Actualizar el gráfico de área (ejemplo)
              var ctx = document.getElementById('myBarChart').getContext('2d');
              var myLineChart = new Chart(ctx, {
                type: 'bar',
                data: {
                  labels: fechas,
                  datasets: [{
                    label: "Ganancias por mes:",
                    backgroundColor: "rgba(2,117,216,1)",
                    borderColor: "rgba(2,117,216,1)",
                    data: ganancias,
                  }],
                },
                options: {
                  scales: {
                    xAxes: [{
                      time: {
                        unit: 'month'
                      },
                      gridLines: {
                        display: false
                      },
                      ticks: {
                        maxTicksLimit: 6
                      }
                    }],
                    yAxes: [{
                      ticks: {
                        min: 0,
                        max: 15000,
                        maxTicksLimit: 5
                      },
                      gridLines: {
                        display: true
                      }
                    }],
                  },
                  legend: {
                    display: false
                  }
                }
                });
          } else {
              alert('No se encontraron registros para las fechas seleccionadas.');
          }
      },
      error: function(xhr, status, error) {
          console.error('Error en la solicitud AJAX:', error);
          alert('Error en la solicitud AJAX. Verifique la consola para más detalles.');
      }
  });
}