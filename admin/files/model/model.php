<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbase = 'img-upload';

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
            case 'save_profile':
            echo 'PASOK SA MODEL';

            // $bio = stripslashes($_POST['bio']);
            // $profileImageName = time() . '-' . $_FILES["profileImage"]["name"];
            // // For image upload
            // echo $bio;
            // echo $profileImageName;
            // $target_dir = "images/";
            // $target_file = $target_dir . basename($profileImageName);
            // // VALIDATION
            // // validate image size. Size is calculated in Bytes
            // if($_FILES['profileImage']['size'] > 200000) {
            //   $msg = "Image size should not be greated than 200Kb";
            //   $msg_class = "alert-danger";
            // }
            // // check if file exists
            // if(file_exists($target_file)) {
            //   $msg = "File already exists";
            //   $msg_class = "alert-danger";
            // }
            // // Upload image only if no errors
            // if (empty($error)) {
            //   if(move_uploaded_file($_FILES["profileImage"]["tmp_name"], $target_file)) {
            //     $sql = "INSERT INTO users SET profile_image='$profileImageName', bio='$bio'";
            //     if(mysqli_query($mysqli, $sql)){
            //       $msg = "Image uploaded and saved in the Database";
            //       $msg_class = "alert-success";
            //     } else {
            //       $msg = "There was an error in the database";
            //       $msg_class = "alert-danger";
            //     }
            //   } else {
            //     $error = "There was an erro uploading the file";
            //     $msg = "alert-danger";
            //   }
            // }
            // break;
        }
}

if (isset($_POST['save_profile'])) {
    $bio = stripslashes($_POST['bio']);
    $profileImageName = time() . '-' . $_FILES["profileImage"]["name"];
    $target_dir = "images/";
    $target_file = $target_dir . basename($profileImageName);

    // $now = explode('-', $profileImageName);
    if (empty($error)) {
      if(move_uploaded_file($_FILES["profileImage"]["tmp_name"], $target_file)) {
        $sql = " INSERT INTO users SET profile_image='$profileImageName', bio='$bio' ";
        
        if(mysqli_query($mysqli, $sql)){
          $msg = "Image uploaded and saved in the Database";
          $msg_class = "alert-success";
        } else {
          $msg = "There was an error in the database";
          $msg_class = "alert-danger";
        }
      } else {
        $error = "There was an erro uploading the file";
        $msg = "alert-danger";
      }
    }
  }
?>                  