<?php



require_once '../Config/config.php';

header("Content-Type: text/html;charset=utf-8");



$valido['success']=array('success'=>false,

'mensaje'=>"",

'id'=>"",

'nom'=>"",

'ap'=>"",

'tel'=>"",

'inicio'=>"",

'fin'=>"",

'img'=>""

);



if($_POST){

    $id=$_POST['id'];

    $sql="SELECT * FROM miembros WHERE idm=$id";

    $resultado=$cx->query($sql);

    $row=$resultado->fetch_array();

    $valido['success']=true;

    $valido['mensaje']="SE ENCONTRO REGISTRO";

    $valido['id']=$row[0];

    $valido['nom']=$row[1];

    $valido['ap']=$row[2];

    $valido['tel']=$row[3];

    $valido['inicio']=$row[4];

    $valido['fin']=$row[5];

    $valido['img']=$row[6];


   

 






}else{

    $valido['success']=false;

    $valido['mensaje']="ERROR AL CARGAR CONTACTO";

}



$cx->close();

echo json_encode($valido);



?>
