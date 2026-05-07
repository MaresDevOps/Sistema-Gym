<?php



require_once '../Config/config.php';

header("Content-Type: text/html;charset=utf-8");



$valido['success']=array('success'=>false,

'mensaje'=>"",

'fechaInicio'=>"",

'fechaFinal'=>""

);


$valido=array('data'=>array());
if($_POST){

   $d=$_POST['fechaInicio'];


   $e=$_POST['fechaFinal'];
   $fechaI=date('Y-m-d',strtotime($d));
$fechaF=date('Y-m-d',strtotime($e));

    $sql="SELECT SUM(precio) AS ganancia,fecha from visitas where fecha BETWEEN '$fechaI' and '$fechaF' GROUP by fecha;";

   // echo $sql;
    $resultado=$cx->query($sql);
    while($row=$resultado->fetch_array()){

        $valido['success']=true;

        $valido['mensaje']="SE ENCONTRO REGISTRO";
    
      
     
        $valido['data'][]=array($row['ganancia'],$row['fecha']);
        

    }
    

  
   


   

 






}else{

    $valido['success']=false;

    $valido['mensaje']="ERROR AL CARGAR CONTACTO";

}



$cx->close();

echo json_encode($valido);



?>
