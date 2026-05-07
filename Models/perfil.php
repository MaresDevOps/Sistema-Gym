<?php
require_once "../Config/config.php";
header('Content-Type: text/html; charset=utf-8');

if($_POST){
    $action=$_REQUEST['action'];
    switch($action){
        case "agregar":

            header('Content-Type: text/html; charset=utf-8');
                            $valido['success']=array('success'=>false,'mensaje'=>"");
                                        $a=$_POST['nom'];
            $b=$_POST['ap'];
           
          if($_FILES['foto']){
            $targetDir='../assets/img_profile/';
$targetFile=$targetDir.basename($_FILES["foto"]["name"]);

if(move_uploaded_file($_FILES["foto"]["tmp_name"],$targetFile)){
    $valido['success']=true;
                            
    $valido['mensaje']="Imagen subida";

$ruta=$targetFile;
                              
                            
                            
                            
                                    $Editar="UPDATE login SET        
                                  
                                    nom='$a',
                            
                                    img='$ruta'
                            
                            
                                    WHERE nom=$a";
                            

                            
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