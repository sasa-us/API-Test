<?php
define('fromData', true);
if(empty($_GET['action'])) {
    exit('no action');
}

// print_r($_GET);
require_once('mysql_connect.php');

$output = array(
    'success' => false,
    'error' => [],
    'data' => []
);

switch($_GET['action']) {
    case 'insertAPI':
    include 'dataAPI/insertAPI.php';
    break;  
    
}

$output_json = json_encode($output);
print($output_json);

?>