<?php



require_once '../Config/config.php';

header("Content-Type: text/html;charset=utf-8");



$valido['success']=array('success'=>false,'mensaje'=>""); 


if($_POST){

   
    $sql="SELECT count(*) AS miem FROM miembros";

   echo $sql;

    $resultado=$cx->query($sql);
    

if($resultado->num_rows>0){

    $row = $resultado;

        $valido['success']=true;

        $valido['mensaje']="SE ENCONTRO REGISTRO";
    
      
     
          $valido['mensaje'] = $row[0];
        

    
    
}



}else{

    $valido['success']=false;

    $valido['mensaje']=$resultado;

}



$cx->close();

echo json_encode($valido);



?>
