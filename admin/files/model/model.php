<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbase = 'kaye';

    $mysqli = new mysqli($servername,$username,$password,$dbase);
    session_start();




    if(isset( $_POST['e'] )) {
        switch($_POST['e']) {
            case 'admin-header-upload':
                echo $_POST['header'];
//                 // $stmt = $mysqli -> prepare('INSERT INTO header (app,[value]) VALUES (?,?)');
//                 // $app = 'John';
//                 // $value = $_POST['header'];
//                 // $stmt -> bind_param('sb', $app,$value);
//                 // $stmt -> execute();
            break;
            case 'save_header':
              $img = $_FILES["image"]["name"]; 
              $tmp = $_FILES["image"]["tmp_name"]; 
              $valid_extensions = array('jpeg', 'jpg', 'png', 'gif', 'bmp' , 'pdf' , 'doc' , 'ppt');
              $path = 'uploads/';
                if($_FILES['image']) {
                  $img = $_FILES['image']['name'];
                  $tmp = $_FILES['image']['tmp_name'];
                  $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
                  $final_image = rand(1000,1000000).'-'.$img;
                    if(in_array($ext, $valid_extensions)) { 
                      $path = $path.strtolower($final_image); 
                        if(move_uploaded_file($tmp,$path)) {
                          // echo "<img src='files/model/$path' />";
                          $str = explode('/', $path);
                          $value = $str[1];
                          $stmt = $mysqli -> prepare(" INSERT headers (value) VALUES (?) ");
                          $stmt -> bind_param('s',$value);
                          $stmt -> execute();
                        }
                    } else {
                      echo 'Invalid!';
                    }
                }
            break;
        }
}

?>                  