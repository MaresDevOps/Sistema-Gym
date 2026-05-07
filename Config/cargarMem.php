<?php

require_once '../Config/config.php';

header("Content-Type: text/html;charset=utf-8");

                
$sql = "SELECT nom,duracion FROM membresias ";

$res = $cx->query($sql);

$valido=array('data'=>array());

if ($res->num_rows > 0) {
    $response['success'] = true;
    while($row=$res->fetch_array()){

     
        $valido['data'][]=array($row['nom']);

    }


} else {
    $response['mensaje'] = " NO ENCONTRADO";
    echo "ERRORs".$response;
}
echo json_encode($valido);
?>
