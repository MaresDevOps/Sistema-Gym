<?php
require_once '../Config/config.php';

header("Content-Type: text/html;charset=utf-8");



$valido['success']=array('success'=>false,

'mensaje'=>"",



'nom'=>"",

'ap'=>"",

'img'=>""

);



if($_POST){

    $id=$_POST['nom'];

    $sql="SELECT * FROM login WHERE nom=$id";

    $resultado=$cx->query($sql);

    $row=$resultado->fetch_array();

    $valido['success']=true;

    $valido['mensaje']="SE ENCONTRO REGISTRO";

    $valido['id']=$row[0];

    $valido['nom']=$row[2];

    $valido['img']=$row[4];


   

 






}else{

    $valido['success']=false;

    $valido['mensaje']="ERROR AL CARGAR CONTACTO";

}



$cx->close();

echo json_encode($valido);



?>
