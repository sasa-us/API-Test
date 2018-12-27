<?php
require_once('mysql_connect.php');
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
print_r('$_GET');


?>