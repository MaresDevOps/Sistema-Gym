<?php
require_once "../Config/config.php";
header('Content-Type: text/html; charset=utf-8');

if($_POST){
    $action=$_REQUEST['action'];
    switch($action){
        case "agregar":

            $valido['success']=array('success'=>false,'mensaje'=>"");  

            $a=$_POST['nom'];
            $b=$_POST['ap'];
            $c=$_POST['num'];
            $d=$_POST['inicio'];
            $e=$_POST['final'];
$fechaI=date('Y-m-d',strtotime($d));
$fechaF=date('Y-m-d',strtotime($e));

          if($_FILES['foto']){
            $targetDir='../assets/img_profile/';
$targetFile=$targetDir.basename($_FILES["foto"]["name"]);

if(move_uploaded_file($_FILES["foto"]["tmp_name"],$targetFile)){

$ruta=$targetFile;
$sql="INSERT INTO miembros VALUES (null,'$a','$b','$c','$fechaI','$fechaF','$ruta')";

if($cx->query($sql)){
    $valido['success']=true;
    $valido['mensaje']="SE REGISTRO";
}else {
    $valido['success']=false;
    $valido['mensaje']="ERROR AL REGISTRAR";
}
}else{
   
    $valido['success']=false;
    $valido['mensaje']="error al subir la imagen";

}
          }else{
            
            $valido['success']=false;
            $valido['mensaje']="No se selecciono ninguna imagen";

          
          }
          echo json_encode($valido);
          break;
           /* 

              
//otra forma de ingrsar datos es INSERT INTO cecyusuario (usuario,password,nombre,apellido,us)VALUES ('$a','$b','$c','$d','$e',null)
               
            }else{
                $valido['success']=false;
                $valido['mensaje']="MEMBRESIA NO DISPONIBLE";
            }
            echo json_encode($valido);
            */
        /*     */
        
           case "eliminar":
                   
            require_once "../Config/config.php";
header('Content-Type: text/html; charset=utf-8');

$valido['success']=array('success'=>false,'mensaje'=>"");





    $id=$_POST['id'];



        $Eliminar="DELETE FROM miembros WHERE idm=$id";

        if($cx->query($Eliminar)===true){

            $valido['success']=true;

            $valido['mensaje']="SE ELIMINO EL MIEMBRO ";

        }else{

            $valido['success']=false;

            $valido['mensaje']="ERROR ";

        } 


echo json_encode($valido);



                       
                        break; 

                     
                
                        case "actualizar":
                            header('Content-Type: text/html; charset=utf-8');
                            $valido['success']=array('success'=>false,'mensaje'=>"");  
$id=$_POST['id'];
            $a=$_POST['nom'];
            $b=$_POST['ap'];
            $c=$_POST['num'];
            $d=$_POST['inicio'];
            $e=$_POST['final'];
$fechaI=date('Y-m-d',strtotime($d));
$fechaF=date('Y-m-d',strtotime($e));

          if($_FILES['foto']){
            $targetDir='../assets/img_profile/';
$targetFile=$targetDir.basename($_FILES["foto"]["name"]);

if(move_uploaded_file($_FILES["foto"]["tmp_name"],$targetFile)){
    $valido['success']=true;
                            
    $valido['mensaje']="Imagen subida";

$ruta=$targetFile;
                              
                            
                            
                            
                                    $Editar="UPDATE miembros SET 
                            
                            
                            
                                  
                                    nom='$a',
                            
                                    ap='$b',
                            
                                    tel='$c',

                                    inicio='$fechaI',

                                    fin='$fechaF',

                                    img='$ruta'
                            
                            
                                    WHERE idm=$id";
                            

                            
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
    }
}
?>