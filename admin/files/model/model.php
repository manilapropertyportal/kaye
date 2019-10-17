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
                          $str = explode('/', $path); $value = $str[1];
                          $str = explode('.',$value); $nClass = $str[0];
                          $apptype = $_POST['apptype'];
                          $appname = $_POST['appname'];
                          $name = $_POST['name'];
                          $description = $_POST['description'];
                          $remarks = '<div class="'.$nClass.' admin-content-card-body col-4 my-5 admin-upload-new-container">
                                        <div class="admin-content-card-body-inner m-auto">
                                          <div class="h-100 d-flex align-items-center px-3 position-relative admin-upload-new">
                                            <img id="preview-img" class="'.$nClass.' h-100 mt-5 position-absolute m-auto" src="files/model/'.$path.'" alt="your image"/>
                                          </div>
                                        </div>
                                      </div>';
                          echo $remarks;
                          $stmt = $mysqli -> prepare("INSERT headers (APPTYPE,APPNAME,NAME,DESCRIPTION,VALUE) VALUES (?,?,?,?,?) ");
                          $stmt -> bind_param('sssss',$apptype,$appname,$name,$description,$value);

                        //   while ($stmt -> fetch()) { 
                        //     print_r($value); 
                        // }
                          $stmt -> execute();
                        }
                    } else {
                      echo 'error';
                    }
                }
            break;
            case 'view_header':
                $var = '';
                $stmt = $mysqli -> prepare('SELECT APPTYPE, APPNAME, NAME, DESCRIPTION, VALUE FROM headers ORDER BY ID DESC'); 
                $stmt -> execute(); 
                $stmt -> store_result(); 
                $stmt -> bind_result($apptype, $appname, $name, $description, $value); 
                  while ($stmt -> fetch()) { 
                      // echo $name; 
                      // echo $description; 
                      // echo $value;
                      $var  = '<div class="'.$name.' admin-content-card-body col-4 my-5 admin-upload-new-container">
                          <div class="admin-content-card-body-inner m-auto">
                            <div class="h-100 d-flex align-items-center px-3 position-relative admin-upload-new">
                              <img id="preview-img" class="'.$name.' h-100 mt-5 position-absolute m-auto" src="files/model/uploads/'.$value.'" alt="your image"/>
                            </div>
                          </div>
                        </div>';
                    echo $var;
                  }
            break;
        }
}

?>                  