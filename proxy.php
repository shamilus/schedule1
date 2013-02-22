<?php


$url = $_SERVER['QUERY_STRING'];
if(!empty($url)){
$content = file_get_contents($url);
echo $content;
}
