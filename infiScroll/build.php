<?php
include('conn.php');

for($x=0; $x < 50; $x++) {
    $file = file_get_contents('http://loripsum.net/api/3/short', true);
    $uTime = time();
    //content is long string with comma, so need '' around the 
    $query="INSERT INTO `bposts`(`content`, `date`) 
            VALUES ('".$file."',$uTime)";
    $result = mysqli_query($conn, $query);
    //echo $query;
}
