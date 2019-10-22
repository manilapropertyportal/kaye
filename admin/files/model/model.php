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
                          $app = $_POST['app'];
                          $apptype = $_POST['apptype'];
                          $appname = $_POST['appname'];
                          $name = $_POST['name'];
                          $description = $_POST['description'];
                          $remarks = '<div class="'.$nClass.' card admin-content-card-body m-2 p-1" style="width: 18rem;">
                                        <div class="card-body text-center p-0">
                                            <p class="card-text">" '.$name.' "
                                              <button type="button" class="close" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                              </button>
                                            </p>
                                          </div>
                                        <img src="files/model/'.$path.'" class="'.$nClass.' card-img-top p-2 shadow-lg bg-light rounded" alt="Header Image" style="height: 20rem;">
                                      </div>';
                          echo $remarks;
                          $stmt = $mysqli -> prepare("INSERT headers (APP,APPTYPE,APPNAME,NAME,DESCRIPTION,VALUE) VALUES (?,?,?,?,?,?) ");
                          $stmt -> bind_param('ssssss',$app, $apptype, $appname, $name, $description, $value);
                          $stmt -> execute();
                        }
                    } else {
                      echo 'error';
                    }
                }
            break;
            case 'view_header':
                $var = '';
                $stmt = $mysqli -> prepare('SELECT APP, APPTYPE, APPNAME, NAME, DESCRIPTION, VALUE FROM headers ORDER BY ID DESC'); 
                $stmt -> execute(); 
                $stmt -> store_result(); 
                $stmt -> bind_result($app, $apptype, $appname, $name, $description, $value); 
                  while ($stmt -> fetch()) {
                    $str = explode('.',$value);
                    $nName = $str[0]; 
                      // echo $name; 
                      // echo $description; 
                      // echo $value;
                      $var  = '<div class="'.$nName.' card admin-content-card-body m-2 p-1" style="width: 18rem;">
                                 <div class="card-body text-center p-0">
                                    <p class="card-text">" '.$name.' "
                                      <button type="button" class="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </p>
                                  </div>
                                <img src="files/model/uploads/'.$value.'" class="'.$nName.' card-img-top p-2 shadow-lg bg-light rounded" alt="Header Image" style="height: 20rem;">
                              </div>';
                    echo $var;
                  }
            break;
            case 'delete_header':
              $stmt = $mysqli -> prepare('DELETE FROM users WHERE id = ?');
              $userId = 4;
              $stmt -> bind_param('i', $userId);
              $stmt -> execute();

              // number of deleted rows
              echo $stmt -> affected_rows;
            break;
            case 'update_header':
                  echo 'update header';
            break;
            case 'save_about':
                  echo 'save about';
            break;
            case 'view_about':
                  echo 'view about';
            break;
        }
}

?>                  