<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbase = 'kaye';

    $conn = new mysqli($servername,$username,$password,$dbase);
    session_start();


    if(isset( $_POST['e'] )) {
        switch($_POST['e']) {
            case 'header':
                echo $_POST['header'];
                $app = 'test';
                $stmt= $conn->prepare("SELECT * FROM header WHERE APP = ?"); 
                $stmt->bind_param("s", $app); 
                $stmt->execute();
                $result = $app;
                $stmt->bind_result($result);
                $stmt->fetch();
                $stmt->close();
            break;
        }
        
   
   };

?>                  