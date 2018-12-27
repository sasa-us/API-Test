<?php
require_once('mysql_connect.php');
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
print_r($_GET); 
$internal_id = $_GET['internal_id'];
$sku = $_GET['sku'];
$chino_ca_warehouse = $_GET['chino_ca_warehouse'];
$summerville_sc_warehouse = $_GET['summerville_sc_warehouse'];
$wilmer_tx_warehouse = $_GET['wilmer_tx_warehouse'];
$sumner_wa_warehouse = $_GET['sumner_wa_warehouse'];
$avenel_nj_warehouse = $_GET['avenel_nj_warehouse'];

$query = "INSERT INTO `updated-inventory`
        (`internal_id`, `sku`, `chino_ca_warehouse`, `summerville_sc_warehouse`, `wilmer_tx_warehouse`, `sumner_wa_warehouse`, `avenel_nj_warehouse`) 
         VALUES
            ('$internal_id', '$sku', '$chino_ca_warehouse', '$summerville_sc_warehouse', '$wilmer_tx_warehouse', '$sumner_wa_warehouse' ,'$avenel_nj_warehouse')";

checkInsert($conn, $query);
function checkInsert($conn, $query) {
    print $query;
    $result = mysqli_query($conn, $query);
    global $output;
    if ($result) {
        $output['success'] = true;
        echo "New records insert successfully";
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($conn);
    }
}
?>