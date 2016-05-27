<?php
header ("Content-type: application/json");
$day = $_GET['d'];
$month = $_GET['m'];

if ($day == null || $month == null) {
	echo '{success:false, error-msg:"day or month parameter missing"}';
	exit(0);
}

if ($day < 1 || $day >30 || $month < 1 || $month > 12) {
	echo '{success:false, error-msg: "invalid value of paramater"}';
	exit(0);
}


$sig_dates_string = file_get_contents("history/sig_dates.json");
if ($sig_dates_string == false || strlen($sig_dates_string) < 1) {
    echo '{success:false, error-msg: "server error. unable to connect to db."}';
	exit(0);	
}

$result = array("success" => true);
$significance = array();

$sig_dates_json = json_decode($sig_dates_string,true);
$sig_dates_json_count = count($sig_dates_json);
for ( $i = 0; $i < $sig_dates_json_count; $i++) {
    $item = $sig_dates_json[$i];
    if ($item["month"] == $month && $item["day"] == $day) {
        array_push($significance, array ("significance" => $item["significance"], "url" => $item["url"]));
    }    
}

$result["values"] = $significance;
echo json_encode($result);
?>