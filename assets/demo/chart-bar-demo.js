// dash.js

// Función para realizar la consulta y actualizar los gráficos
function consulta() {
  // Obtener las fechas del formulario
  var fechaInicio = document.getElementById('fechaI').value;
  var fechaFinal = document.getElementById('fechaF').value;

  // Aquí puedes realizar una solicitud AJAX para enviar las fechas a tu archivo PHP (consulta.php)
  $.ajax({
      type: 'POST',
      url: '../Config/dash.php', // Ruta correcta hacia consulta.php
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

              // Actualizar el gráfico de área (ejemplo)
              var ctx = document.getElementById('myAreaChart').getContext('2d');
              var myAreaChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: fechas,
                    datasets: [{
                        label: 'Ganancias por dia durante el mes',
                        
                        lineTension: 0.3,
                        backgroundColor: "rgba(2,117,216,0.2)",
                        borderColor: "rgba(2,117,216,1)",
                        pointRadius: 5,
                        pointBackgroundColor: "rgba(2,117,216,1)",
                        pointBorderColor: "rgba(255,255,255,0.8)",
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(2,117,216,1)",
                        pointHitRadius: 50,
                        pointBorderWidth: 2,
                        data: ganancias,
                    }]
                },
                options: {
                  scales: {
                    xAxes: [{
                      time: {
                        unit: 'date'
                      },
                      gridLines: {
                        display: false
                      },
                      ticks: {
                        maxTicksLimit: 7
                      }
                    }],
                    yAxes: [{
                      ticks: {
                        min: 0,
                        max: 10000,
                        maxTicksLimit: 5
                      },
                      gridLines: {
                        color: "rgba(0, 0, 0, .125)",
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


