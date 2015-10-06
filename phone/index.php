<?php
$agent = $_SERVER['HTTP_USER_AGENT'];
if(preg_match("/^DoCoMo/i", $agent)){
 header("Location: http://matsumoto-seikeigeka.com/phone/m/index.xhtml");
}else if(preg_match("/^(J\-PHONE|Vodafone|MOT\-[CV]|SoftBank)/i", $agent)){
 header("Location: http://matsumoto-seikeigeka.com/phone/m/index.xhtml");
}else if(preg_match("/^KDDI\-/i", $agent) || preg_match("/UP\.Browser/i", $agent)){
 header("Location: http://matsumoto-seikeigeka/phone/m/index.xhtml");
}
?>
