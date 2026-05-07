<?php
require_once "../Config/config.php";
header('Content-Type: application/json; charset=utf-8');
try{
if ($_POST) {
    $action = $_REQUEST['action'];
    $response = ['success' => false, 'mensaje' => '..'];

    switch ($action) {
        case "registrar":
            $usu = $_POST['Usuario'];
            $pass = md5($_POST['pass']);
            $nom = $_POST['nom'];
            $ap = $_POST['ap'];

            $check = "SELECT * FROM login2 WHERE gmail='$gmail'";
            $res = $cx->query($check);

            if ($res->num_rows == 0) {
                $sql = "INSERT INTO login2 VALUES (null,'$nom', '$ap', '$gmail', '$pass',null)";
                if ($cx->query($sql)) {
                    $response['success'] = true;
                    $response['mensaje'] = "SE REGISTRO CORRECTAMENTE";
                } else {
                    $response['mensaje'] = "ERROR AL REGISTRAR";
                }
            } else {
                $response['mensaje'] = "USUARIO NO DISPONIBLE";
            }
            break;

        case "login":
            $response = ['success' => false, 'mensaje' => '..'];

            $usu = $_POST['usu'];
            $pass = $_POST['pass'];

            $sql = "SELECT * FROM login WHERE usu='$usu' AND pass='$pass'";
            $res = $cx->query($sql);

            if ($res->num_rows > 0) {
                $response['success'] = true;
                $response['mensaje'] = "SESION INICIADA ";
            } else {
                
                $response['mensaje'] = "USUARIO Y/O PASSWORD INCORRECTO";

            }

            break;

        case "select":
            $usu = $_POST['usu'];

            $sql = "SELECT * FROM login WHERE usu='$usu'";
            $res = $cx->query($sql);

            if ($res->num_rows > 0) {
                $row = $res->fetch_assoc();
                $response['success'] = true;
                $response['mensaje'] = $row['nom'];
              
            } else {
                $response['mensaje'] = "USUARIO NO ENCONTRADO";
            }
            break;

            case "id":
                $gmail = $_POST['gmail'];
    
                $sql = "SELECT * FROM login2 WHERE gmail='$gmail'";
                $res = $cx->query($sql);
    
                if ($res->num_rows > 0) {
                    $row = $res->fetch_assoc();
                    $response['success'] = true;
                   $response['mensaje'] = $row['id'];
                } else {
                    $response['mensaje'] = "USUARIO NO ENCONTRADO";
                }



                break;
                case "perfil":
                    $usuario = $_POST['gmail'];
                    $check = "SELECT * FROM login2 WHERE gmail='$gmail'";
                    $res = $cx->query($check);  
    
                    if ($res->num_rows > 0) {
                        $row = $res->fetch_assoc();
                        $response['success'] = true;
                        $response['gmail'] = $row['gmail'];
                        $response['nom'] = $row['nom'];
                        $response['ap'] = $row['ap'];
                        $response['img'] = isset($row['img']) ? $row['img'] : '';
                    } else {
                        $response['mensaje'] = "USUARIO NO ENCONTRADO";
                    }
                    break;
    
                case "saveperfil":
                    $gmail = $_POST['gmail'];
                    $nom = $_POST['nom'];
                    $ap = $_POST['ap'];
                    $fotoPath = '';
    
                    if (isset($_FILES['img']) && $_FILES['img']['error'] === UPLOAD_ERR_OK) {
                        $fileName = $_FILES['img']['name'];
                        $fileTmpName = $_FILES['img']['tmp_name'];
                        $uploadDirectory = 'img_profile/';
    
                        if (!is_dir($uploadDirectory)) {
                            mkdir($uploadDirectory, 0755, true);
                        }
    
                        $filePath = $uploadDirectory . basename($fileName);
    
                        if (move_uploaded_file($fileTmpName, $filePath)) {
                            $fotoPath = $filePath;
                        } else {
                            $response['mensaje'] = "Error al subir la foto";
                            echo json_encode($response);
                            exit;
                        }
                    }
    
                    $sql = "UPDATE login2 SET nom='$nom', ap='$ap'";
                    if ($fotoPath !== '') {
                        $sql .= ", img='$fotoPath'";
                    }
                    $sql .= " WHERE gmail='$gmail'";
    
                    if ($cx->query($sql)) {
                        $response['success'] = true;
                        $response['mensaje'] = "Perfil guardado correctamente";
                    } else {
                        $response['mensaje'] = "Error al guardar el perfil";
                    }
                    break;
    
                default:
                    $response['mensaje'] = "Acción no válida";
                    break;
    }
        } else {
            $response['success'] = false;
            $response['mensaje'] = "ERROR NO SE RECIBIO NADA :(";
        }
    } catch (Exception $e) {
        $response['success'] = false;
        $response['mensaje'] = "Excepción: " . $e->getMessage();
    }

    
    echo json_encode($response);
    ?>

    
    

