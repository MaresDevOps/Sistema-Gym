<?php
require_once "../Config/config.php";
header('Content-Type: text/html; charset=utf-8');

if($_POST){
    $action=$_REQUEST['action'];
    switch($action){
        case "agregar":
            $valido['success']=array('success'=>false,'mensaje'=>"");            
            $a=$_POST['nom'];
            $b=$_POST['dura'];
            $c=$_POST['pre'];
           
            $check="SELECT * FROM membresias WHERE nom='$a'";
            $res=$cx->query($check);
            if($res->num_rows==0){
                $sql="INSERT INTO membresias VALUES (null,'$a','$b','$c')";
//otra forma de ingrsar datos es INSERT INTO cecyusuario (usuario,password,nombre,apellido,us)VALUES ('$a','$b','$c','$d','$e',null)
                if($cx->query($sql)){
                    $valido['success']=true;
                    $valido['mensaje']="SE REGISTRO CORRECTAMENTE";
                }else {
                    $valido['success']=false;
                    $valido['mensaje']="ERROR AL REGISTRAR";
                }
            }else{
                $valido['success']=false;
                $valido['mensaje']="MEMBRESIA NO DISPONIBLE";
            }
            echo json_encode($valido);
            break;
                case "eliminar":
                   

$valido['success']=array('success'=>false,'mensaje'=>"");





    $id=$_POST['id'];



        $Eliminar="DELETE FROM membresias WHERE id=$id";

        if($cx->query($Eliminar)===true){

            $valido['success']=true;

            $valido['mensaje']="SE ELIMINO LA MEMBRESIA ";

        }else{

            $valido['success']=false;

            $valido['mensaje']="ERROR ";

        } 


echo json_encode($valido);


                       
                        break; 
                        case "actualizar":
                            header('Content-Type: text/html; charset=utf-8');
                            $valido['success']=array('success'=>false,'mensaje'=>"");



                            if($_POST){
                            
                                $id=$_POST['id'];
                                $nombre=$_POST['nom'];
                            
                                $precio=$_POST['pre'];
                            
                                $dura=$_POST['dura'];
                            
    
                              
                            
                            
                            
                                    $Editar="UPDATE membresias SET 
                            
                            
                            
                                  
                                    nom='$nombre',
                            
                                    duracion='$dura',
                            
                                    precio='$precio'
                            
                            
                                    WHERE id=$id";
                            
                                    if($cx->query($Editar)===true){
                            
                                        $valido['success']=true;
                            
                                        $valido['mensaje']="SE ACTUALIZO CORRECTAMENTE";
                            
                                    }else{
                            
                                        $valido['success']=false;
                            
                                        $valido['mensaje']="ERROR NO SE GUARDO";
                            
                                    } 
                            
                            }else{
                            
                                $valido['success']=false;
                            
                                $valido['mensaje']="NO SE GUARDO";
                            
                            }
                            
                            echo json_encode($valido);
                            
                                break;                        
    }
}else{
    $valido['success']=false;
    $valido['mensaje']="ERROR NO SE RECIBIO NADA";
}
?>