<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once('conn.php');

if(!mysql_connect($db_host, $db_user, $db_pwd)) {
    die("can't connect");
}

if(!mysql_select_db($database)) {
    die("can't select db");

    if(isset($_POST['submit'])) {
        $fname = $_FILES['sel_file']['name'];
        echo 'upload file name: '. $fname. ' ';
        $chk_ext = explode(".", $fname);

        if(strtolower(end($chk_ext)) == "csv") {
            $filename = $_FILES['sel_file']['tmp_name'];
            $handle = fopen($filename, "r");

            while(($data = fgetcsv($handle, 1000, ',')) !== FALSE) {
                $sql = "INSERT into user(name, email, phone) values('$data[0]', '$data[1]', 'data[2]')";
                mysql_query($sql) or die(mysql_error());
            }

            fclose($handle);
            echo "successfully imported";
        }
        else {
            echo "invalid";
        }
    }
}
?>

<h1>Import cs</h1>
<form action='<?php echo $_SERVER['PHP_SELF']; ?>' method='post'>
import file: <input type='file' name='sel_file' size='20'>
<input type="submit" name='submit' value='submit'>
</form>