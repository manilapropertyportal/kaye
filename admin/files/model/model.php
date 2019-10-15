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
                $stmt = $mysqli -> prepare('INSERT INTO header (app,[value]) VALUES (?,?)');
                $app = 'John';
                $value = $_POST['header'];
                $stmt -> bind_param('sb', $app,$value);
                $stmt -> execute();
            break;
        }
        
   
   };





?>                  