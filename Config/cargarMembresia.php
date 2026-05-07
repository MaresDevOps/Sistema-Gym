<?php



require_once '../Config/config.php';

header("Content-Type: text/html;charset=utf-8");



$valido['success']=array('success'=>false,

'mensaje'=>"",

'id'=>"",

'nom'=>"",

'duracion'=>"",

'precio'=>""

);



if($_POST){

    $id=$_POST['id'];

    $sql="SELECT * FROM membresias WHERE id=$id";

    $resultado=$cx->query($sql);

    $row=$resultado->fetch_array();

    $valido['success']=true;

    $valido['mensaje']="SE ENCONTRO REGISTRO";

    $valido['id']=$row[0];

    $valido['nom']=$row[1];

    $valido['dura']=$row[2];

    $valido['pre']=$row[3];


   

 ;






}else{

    $valido['success']=false;

    $valido['mensaje']="ERROR AL CARGAR CONTACTO";

}



$cx->close();

echo json_encode($valido);



?>
