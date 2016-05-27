<?php
$ip = $_SERVER['REMOTE_ADDR'];

// you can get api keys from ipinfodb for free, please dont abouse this.
$data = file_get_contents("http://api.ipinfodb.com/v2/ip_query.php?ip=$ip&output=xml&key=a8ac40c258f4b1b9fecb27de7f091272979de523868d4b804e4b58ac9a0755b2");
 
//Use backup server if cannot make a connection
if (strlen($data) < 1){
	echo '{"success":0}';
	exit(0);
}

$answer = new SimpleXMLElement($data);

$country = trim($answer->CountryName);
$city = trim($answer->City);
$latitude = trim($answer->Latitude);
$longitude = trim($answer->Longitude);

$country = str_replace(" ", "-", $country);
$cookie = $latitude . ":" . $longitude . ":" . ucwords(strtolower($city)) . ":" . ucwords(strtolower($country));

setrawcookie('locInfo', urlencode($cookie), time()+60*60, '/');
setrawcookie('w3clocapisupported','false', time()+60*60, '/');

header ("Content-type: application/json");
?>
{
	"success": 1,
	"countryName": "<?php echo $country;  ?>",
	"cityName": "<?php echo $city; ?>",
	"latitude": "<?php echo $latitude; ?>",
	"longitude": "<?php echo $longitude; ?>"
}
