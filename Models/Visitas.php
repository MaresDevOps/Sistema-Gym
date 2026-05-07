<?php
require_once "../Config/config.php";
header('Content-Type: text/html; charset=utf-8');

if($_POST){
    $action=$_REQUEST['action'];
    switch($action){
        case "agregar":
            $valido['success']=array('success'=>false,'mensaje'=>"");            
            $a=$_POST['nom'];
            $b=$_POST['pre'];
            $c=$_POST['fecha'];
           
           
                $sql="INSERT INTO visitas VALUES (null,'$a','$b','$c')";

                if($cx->query($sql)){
                    $valido['success']=true;
                    $valido['mensaje']="SE REGISTRO CORRECTAMENTE";
                }else {
                    $valido['success']=false;
                    $valido['mensaje']="ERROR AL REGISTRAR";
                }
           
            echo json_encode($valido);
            break;
               }
}else{
    $valido['success']=false;
    $valido['mensaje']="ERROR NO SE RECIBIO NADA";
}
?>