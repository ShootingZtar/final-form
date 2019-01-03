<?php
    session_start();

    if (isset($_GET['test']) == true) {
        $obj = new StdClass();
        $obj->foo = "12345";
        echo json_encode($obj);
    } elseif (isset($_POST['create_form']) == 'create') {
        // $obj = new StdClass();
        $_SESSION['create'][0] = "create success";
        $_SESSION['create'][1] = "create success";
        $_SESSION['create'][2] = "create success";
        $arr = $_SESSION;
        // $arr.push("create success");
        echo json_encode($_SESSION);
    } else {
        echo "false";
    }
?>